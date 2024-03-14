import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import {extractFirstImageUrl} from "lib/thumbnail";
import { extractText } from "lib/extracttext";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res : NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const latestNotices = await prisma.notice.findMany({
                orderBy: {
                    postedAt: 'asc', // 최신순으로 정렬
                },
                take : 6,
                select: {
                    id: true,
                    title: true,
                    postedAt: true,
                    content: true, // 썸네일 이미지 추출을 위해 content 포함
                },
            });

            // 썸네일 이미지 URL 추출 로직 추가 가능
            const noticesWithThumbnailsAndText = latestNotices.map(notice => ({
                ...notice,
                thumbnail: extractFirstImageUrl(notice.content),
                text: extractText(notice.content), // 텍스트 추출 로직 적용
            }));

            res.status(200).json({ notices: noticesWithThumbnailsAndText });
        } catch (error) {
            console.error('Error fetching latest notices', error);
            res.status(500).json({ message: 'Error fetching latest notices' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}