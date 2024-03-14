// pages/api/notice/[id].ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query; // URL에서 id 파라미터를 추출합니다.

    if (req.method === 'GET') {
        const numericId = Number(id);
        try {
            // 현재 공지사항 조회
            const technic = await prisma.technic.findUnique({
                where: { id: numericId },
            });

            // 이전 공지사항 조회
            const prevNotice = await prisma.technic.findFirst({
                where: { id: { lt: numericId } },
                orderBy: { id: 'desc' },
            });

            // 다음 공지사항 조회
            const nextNotice = await prisma.technic.findFirst({
                where: { id: { gt: numericId } },
                orderBy: { id: 'asc' },
            });

            if (technic) {
                res.status(200).json({ technic, prevNotice, nextNotice });
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