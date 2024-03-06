import express from 'express';
import next from 'next';
import multer from 'multer';
import path from 'path';


const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const port = parseInt(process.env.PORT || '3000', 10);

// Multer 설정 확장
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        // 파일 업로드 경로를 요청 URL에 따라 분기
        if (req.url.startsWith('/data/board')) {
            cb(null, 'public/data/board'); // 이미지 저장 경로
        } else if (req.url.startsWith('/data/file')) {
            cb(null, 'public/data/file'); // 파일 저장 경로
        } else {
            cb(new Error('Invalid upload path'), ''); // 잘못된 경로 처리
        }
    },
    filename: function(req, file, cb) {
        const ext = path.extname(file.originalname);
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

    // 파일 업로드 라우트 추가
    server.post('/data/file', upload.single('file'), (req, res) => {
        const file = req.file;
        if (!file) {
            return res.status(400).send('No file uploaded.');
        }
        res.json({ location: `/data/file/${file.filename}` });
    });

    // 정적 파일 라우트
    server.use('/data/board', express.static(path.join('public/data/board')));
    server.use('/data/file', express.static(path.join('public/data/file'))); // 새로운 정적 파일 경로 추가

    // Next.js 요청 핸들러
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
});
