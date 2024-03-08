// pages/api/notice/update.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'PUT') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { id, title, content, images } = req.body;

    try {
        // 공지사항 업데이트 로직
        const updatedNotice = await prisma.notice.update({
            where: { id: Number(id) },
            data: {
                title,
                content,
            },
        });

        return res.status(200).json(updatedNotice);
    } catch (error) {
        console.error('Error updating notice:', error);
        return res.status(500).json({ message: 'Error updating notice' });
    }
}
