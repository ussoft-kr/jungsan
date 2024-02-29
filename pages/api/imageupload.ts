import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import multer from 'multer';
import path from 'path';


interface NextApiRequestWithFile extends NextApiRequest {
    file: Express.Multer.File;
}


// multer 설정
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(process.cwd(), 'upload/board'));
        },
        filename: function (req, file, cb) {
            cb(null, `${Date.now()}-${file.originalname}`);
        },
    }),
    limits: { fileSize: 10 * 1024 * 1024 }
});

// multer 미들웨어를 Promise로 감싸는 함수
function multerUploadPromise(req: NextApiRequestWithFile, res: NextApiResponse): Promise<void> {
    return new Promise((resolve, reject) => {
        upload.single('image')(req as any , res as any , (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}


// router 생성

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        // 여기서 req를 NextApiRequestWithFile로 캐스팅합니다.
        await multerUploadPromise(req as NextApiRequestWithFile, res);

        // 여기서도 req를 NextApiRequestWithFile로 캐스팅하여 file 프로퍼티에 접근합니다.
        const file = (req as NextApiRequestWithFile).file;
        if (!file) {
            return res.status(400).send('No file uploaded.');
        }

        const imageUrl = `upload/board/${file.filename}`;
        res.status(200).json({ imageUrl });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error processing file upload');
    }
});

export default router.handler({
    onError: (err : any, req, res) => {
        console.error(err.stack);
        res.status(500).end("에러..");
    },
    onNoMatch: (req, res) => {
        res.status(404).end("api");
    },
});