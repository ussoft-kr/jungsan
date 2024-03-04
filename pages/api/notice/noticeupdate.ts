// pages/api/notice/update.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { ImageInfo } from '@/util/imageutils';

const prisma = new PrismaClient();

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
                // 기존 첨부파일 처리 로직이 필요한 경우 여기에 추가
                attachments: {
                    // 예: 기존 첨부파일 삭제 후 새로운 파일 정보로 업데이트
                    deleteMany: {},
                    create: images.map((img: ImageInfo) => ({
                        filePath: img.url,
                        fileName: img.filename,
                    })),
                },
            },
        });

        return res.status(200).json(updatedNotice);
    } catch (error) {
        console.error('Error updating notice:', error);
        return res.status(500).json({ message: 'Error updating notice' });
    }
}
