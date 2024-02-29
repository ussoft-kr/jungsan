import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // POST 요청 처리
        try {
            // 요청 본문에서 title과 content 추출
            const { title, content } = req.body;

            // Prisma를 사용하여 데이터베이스에 새 공지사항 추가
            const newNotice = await prisma.notice.create({
                data: {
                    title,
                    content,
                    // 여기서 postedAt은 자동으로 설정됩니다 (schema.prisma에서 @default(now()) 지정)
                },
            });

            // 성공 응답 보내기
            return res.status(200).json('글쓰기 성공');
        } catch (error) {
            // 서버 오류 응답
            console.error("Notice post creation error:", error);
            return res.status(500).json({ message: "글작성에 실패하였습니다." });
        }
    } else {
        // POST 요청이 아닌 경우 405 Method Not Allowed 응답
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
