// /api/upload.ts
import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import { createRouter } from 'next-connect';

// 파일 저장을 위한 multer 설정
const upload = multer({
    storage: multer.diskStorage({
        destination: './public/data/file', // 파일 저장 경로
        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
        },
    }),
});

// 라우터 생성
const router = createRouter<NextApiRequest, NextApiResponse>();

// 파일 업로드 미들웨어 사용
router.use(upload.array('files') as any);

// POST 요청 처리
router.post((req, res) => {
    // 업로드된 파일 정보는 req.files에 저장됨
    console.log(req.files);
    res.status(200).json({ message: 'Files uploaded successfully', files: req.files });
});

export default router.handler({
    onError: (err: unknown, req: NextApiRequest, res: NextApiResponse) => {
        if (err instanceof Error) {
            // 이제 err는 Error 타입으로 안전하게 사용할 수 있습니다.
            console.error(err.stack);
            res.status(500).end("Internal server error");
        } else {
            // err가 Error 타입이 아닐 경우의 처리
            console.error('An unknown error occurred:', err);
            res.status(500).end("An unknown error occurred");
        }
    },
    onNoMatch: (req: NextApiRequest, res: NextApiResponse) => {
        res.status(404).end("Page not found");
    },
});


export const config = {
    api: {
        bodyParser: false, // bodyParser를 비활성화하여 multer가 파일 처리를 할 수 있도록 함
    },
};
