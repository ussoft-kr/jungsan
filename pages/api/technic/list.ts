import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const { search } = req.query; // 검색어 쿼리 파라미터 추출
        // 요청에서 페이지 번호와 페이지당 아이템 수를 받습니다. (예: ?page=2&itemsPerPage=10)
        const page = Number(req.query.page) || 1;
        const itemsPerPage = Number(req.query.itemsPerPage) || 10;

        // skip 계산: (현재 페이지 번호 - 1) * 페이지당 아이템 수
        const skip = (page - 1) * itemsPerPage;

        try {
            // 검색어가 있는 경우와 없는 경우를 처리
            const notices = await prisma.technic.findMany({
                where: search ? {
                    title: {
                        contains: search as string,
                    },
                } : {},
                orderBy: {
                    postedAt: 'asc', // 작성일 기준 내림차순으로 정렬
                },
                take : itemsPerPage,
                skip: skip,
            });

            const total = await prisma.technic.count({
                where: search ? {
                    title: {
                        contains: search as string,
                    },
                } : {},
            });


            // 조회된 공지사항 목록을 응답으로 반환
            return res.status(200).json({notices, total});






        } catch (error) {
            console.error("Notice list fetch error:", error);
            return res.status(500).json({ message: "목록을 불러오는데 실패하였습니다." });
        }



    } else {
        res.setHeader('Allow', ['GET']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

}
