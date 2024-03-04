import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query; // URL에서 id 파라미터를 추출합니다.

    if (req.method === 'GET') {
        try {
            // ID를 이용하여 데이터베이스에서 해당 공지사항 조회
            const notice = await prisma.notice.findUnique({
                where: { id: Number(id) }, // id는 문자열로 넘어오므로, 숫자로 변환해야 합니다.
                include: {
                    attachments: true, // 첨부파일 정보도 함께 조회합니다.
                },
            });

            if (notice) {
                res.status(200).json(notice);
            } else {
                res.status(404).json({ message: "해당 공지사항을 찾을 수 없습니다." });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "서버 오류로 인해 공지사항을 불러올 수 없습니다." });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
