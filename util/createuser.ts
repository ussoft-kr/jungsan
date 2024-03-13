import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function createUser(userid: string, name: string, plainPassword: string, role: 'ADMIN' | 'SEMIADMIN' | 'USER' = 'USER'): Promise<void> {
    // 평문 비밀번호를 bcrypt를 사용해 해싱 처리
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    // 새로운 사용자를 데이터베이스에 추가
    const newUser = await prisma.user.create({
        data: {
            userid,
            name,
            password: hashedPassword,
            role, // 역할을 직접 지정하거나 기본값 'USER' 사용
        },
    });

    console.log(`New user created with ID: ${newUser.id}`);
}

// 사용자 생성 예시 호출
// 사용자 ID, 사용자 이름, 평문 비밀번호, 역할을 인자로 전달
createUser('jungsan', '관리자', '4290@@', 'SEMIADMIN')
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
