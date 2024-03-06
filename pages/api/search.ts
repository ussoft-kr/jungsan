import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { query } = req.query; // 검색어 받기

    if (!query) {
        return res.status(400).json({ message: 'Query is required' });
    }

    try {
        // 제목에 검색어를 포함하는 게시물 찾기
        const results = await prisma.notice.findMany({
            where: {
                title: {
                    contains: query as string,
                },
            },
        });

        res.status(200).json(results);
    } catch (error) {
        console.error('Search error:', error);
        res.status(500).json({ message: 'Error performing search' });
    }
}
