import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function hashPasswordAndUpdateUser(userId: number, plainPassword: string): Promise<void> {
    // 평문 비밀번호를 해시 처리
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    // 사용자의 비밀번호를 업데이트
    const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { password: hashedPassword },
    });

    console.log(`User ${updatedUser.id}'s password updated.`);
}

// 사용자 ID와 평문 비밀번호로 함수 호출
// 실행방법은 터미널에서 node --loader ts-node/esm updatepassword.ts
const userId = 2; // 사용자 ID 예시
const plainPassword = 'usus9789##'; // 업데이트할 평문 비밀번호

hashPasswordAndUpdateUser(userId, plainPassword)
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
