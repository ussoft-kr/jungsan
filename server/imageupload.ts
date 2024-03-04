import express from 'express';
import multer from 'multer';
import path from 'path';

const app = express();
const port = 3000; // 포트는 필요에 따라 조정

// `public/data/board` 디렉토리에 파일을 저장하도록 multer 설정
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/data/board');
    },
    filename: function(req, file, cb) {
        // 파일명 설정 (여기서는 원본 파일명 사용)
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// 이미지 업로드를 처리하는 엔드포인트
app.post('/data/board', upload.single('file'), (req, res) => {
    // 업로드된 파일에 접근
    const file = req.file;
    if (!file) {
        return res.status(400).send('No file uploaded.');
    }

    // 클라이언트에게 업로드된 이미지의 URL 응답
    res.json({ location: `/data/board/${file.filename}` });
});

// 정적 파일 제공을 위한 미들웨어 설정
app.use('/data/board', express.static(path.join(__dirname, 'public/data/board')));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
