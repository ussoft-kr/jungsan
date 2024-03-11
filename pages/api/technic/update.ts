// /api/notice/update.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import { createRouter } from 'next-connect';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// multer 설정
const upload = multer({
    storage: multer.diskStorage({
        destination: './data/file', // 파일 저장 경로
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}-${file.originalname}`); // 파일 이름 설정
        },
    }),
});

const router = createRouter<NextApiRequest, NextApiResponse>();

// 파일 업로드 미들웨어 설정
router.use(upload.array('files') as any);

router.put(async (req: any, res) => {
    const { id, title, content, existingFiles } = req.body; // existingFiles 처리 추가
    let filesInfo = [];

    try {

        if (req.body.file) {
            if (typeof req.body.file === 'string') {
                filesInfo = JSON.parse(req.body.file);
            } else {
                filesInfo = req.body.file; // 이미 객체 형태인 경우 바로 사용
            }
        }

        const pathsOnly = filesInfo.map((file: { path: string; }) => ({
            path: file.path.replace('public', '') // 'public' 경로를 제거하고 저장
        }));


        const updatedNotice = await prisma.notice.update({
            where: { id: Number(id) },
            data: {
                title,
                content,
                boardfile: filesInfo.length > 0 ? pathsOnly : [],
            },
        });
        console.log(req.files); // multer에 의해 처리된 파일 정보 로깅
        console.log(filesInfo); // 데이터베이스에 저장하기 전의 boardfile 내용 로깅
        console.log(req.body);
        res.status(200).json(updatedNotice);
    } catch (error) {
        console.error("글수정 실패:", error);
        res.status(500).json({ message: "글수정에 실패하였습니다." });
    }
});



export default router.handler({
    onError: (err: unknown, req, res) => {
        console.error('Error:', err);
        res.status(500).end('Internal Server Error');
    },
    onNoMatch: (req, res) => {
        res.status(404).end('Not Found');
    },
});

export const config = {
    api: {
        bodyParser: false,
    },
};
