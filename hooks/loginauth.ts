import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';

export async function redirectIfLoggedIn(context: GetServerSidePropsContext) {
    const session = await getSession(context);
    console.log(session);

    if (session) {
        if (session.role === "ADMIN") {
            return {
                redirect: {
                    destination: '/',
                    permanent: false,
                },
            };
        } else {
            return {
                redirect: {
                    destination: '/',
                    permanent: false,
                },
            };
        }
    }

    return {
        props: {},
    };
}
