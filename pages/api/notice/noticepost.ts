import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import {ImageInfo} from "@/util/imageutils";





const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // POST 요청 처리
        try {
            // 요청 본문에서 title과 content 추출
            const { title, content, images } = req.body;

            // Prisma를 사용하여 데이터베이스에 새 공지사항 추가
            const newNotice = await prisma.notice.create({
                data: {
                    title,
                    content,
                    attachments: {
                        create: images.map((img: ImageInfo) => ({
                            filePath: img.url,
                            fileName: img.filename,
                        }))
                    },
                },
            });

            // 성공 응답 보내기
            // 새로 생성된 글의 ID를 응답으로 반환
            return res.status(200).json({ message: "글쓰기가 완료되었습니다.", id: newNotice.id });
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
