import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'DELETE') {
        // DELETE 요청만을 허용
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { ids } = req.body; // 삭제할 게시물의 ID 배열

    try {
        // 트랜잭션 시작
        await prisma.$transaction(async (prisma) => {
            // ID 배열에 해당하는 모든 NoticeAttachment 삭제
            await prisma.noticeAttachment.deleteMany({
                where: {
                    noticeId: {
                        in: ids,
                    },
                },
            });

            // ID 배열에 해당하는 모든 Notice 삭제
            await prisma.notice.deleteMany({
                where: {
                    id: {
                        in: ids,
                    },
                },
            });
        });

        // 성공 응답
        return res.status(200).json({ message: 'Notices and their  have been deleted successfully.' });
    } catch (error) {
        console.error('Error deleting notices:', error);
        // 에러 응답
        return res.status(500).json({ message: 'Error deleting notices' });
    }
}
