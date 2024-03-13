import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "lib/auth";
import { PrismaClient} from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";





const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

export default NextAuth({
    providers: [
        CredentialsProvider({
            id: 'credentials',
            credentials: {
                userid: { label: "UserID", type: "text" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials, req) => {
                if (!credentials) {
                    return null;
                }
                const user = await prisma.user.findUnique({
                    where: { userid: credentials.userid }
                });

                if (user && await verifyPassword(credentials.password, user.password)) {
                    return { ...user, id: user.id.toString() };
                } else {
                    return null;
                }

            }
        }),
    ],

    adapter: PrismaAdapter(prisma),
    jwt: {
        secret: process.env.SECRET,
    },

    session: {
        strategy: 'jwt',
        maxAge: 3600, // 1시간으로 설정
    },


    callbacks: {
        async jwt({ token, user }) {
            if (user && 'role' in user) {
                token.role = user.role;
            }
            return token;
        },


        async session({ session, token }) {
            (session as any).role = token.role;
            return session;
        },
    },
    pages: {
        signIn: "/login",
    },

});
