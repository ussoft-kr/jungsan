import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            // Prisma를 사용하여 데이터베이스에서 공지사항 목록 조회
            const notices = await prisma.notice.findMany({
                include: {
                    attachments: true, // 첨부파일 정보도 함께 가져옵니다.
                },
                orderBy: {
                    postedAt: 'desc', // 작성일 기준 내림차순으로 정렬
                },
            });

            // 조회된 공지사항 목록을 응답으로 반환
            return res.status(200).json(notices);
        } catch (error) {
            console.error("Notice list fetch error:", error);
            return res.status(500).json({ message: "목록을 불러오는데 실패하였습니다." });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
