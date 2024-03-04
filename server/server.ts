import express from 'express';
import next from 'next';
import multer from 'multer';
import path from 'path';

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const port = parseInt(process.env.PORT || '3000', 10);

// Multer 설정
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/data/board'); // 저장 경로
    },
    filename: function(req, file, cb) {
        // 파일 확장자 추출
        const ext = path.extname(file.originalname);
        // 원본 파일명에 타임스탬프 추가
        const filename = path.basename(file.originalname, ext) + '-' + Date.now() + ext;
        cb(null, filename);
    }
});
const upload = multer({ storage: storage });

nextApp.prepare().then(() => {
    const server = express();

    // 이미지 업로드 라우트
    server.post('/data/board', upload.single('file'), (req, res) => {
        const file = req.file;
        if (!file) {
            return res.status(400).send('No file uploaded.');
        }
        res.json({ location: `/data/board/${file.filename}` });
    });

    // 정적 파일 라우트
    server.use('/data/board', express.static(path.join('public/data/board')));

    // Next.js 요청 핸들러
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
});