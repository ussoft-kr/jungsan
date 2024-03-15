import nodemailer from 'nodemailer';
import multer from 'multer';
import {createRouter} from "next-connect";
import type {NextApiRequest, NextApiResponse} from "next";
import {InquiryFormType} from "types/type";


const upload = multer({
    storage: multer.memoryStorage(),
    limits : {
        fileSize : 10 * 1024 * 1024,   // 10메가까지 첨부파일 되도록
    },
});


const router = createRouter<NextApiRequest, NextApiResponse>();

router.use(upload.single('file') as any);

router.post(async (req: any, res) => {
    const { inquiryname, inquiryemail, phoneNumber, inquirycontury, inquirybusiness, inquirycontent, inquirystats } = req.body as InquiryFormType;
    const file = req.file; // Multer를 통해 업로드된 파일



    // nodemailer를 사용하여 메일 서비스 설정
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "ussoft9789@gmail.com", // generated ethereal user
            pass: "uued dfiz tbwb amei", // generated ethereal password
        },
    });

    // 이메일 옵션 설정
    let mailOptions = {
        from: `"${inquiryname}" "${inquiryemail}"`, // 동적으로 발신자 이름과 이메일 주소 포함
        to: 'wishsky08@naver.com', // 수신자 주소
        subject: '문의드립니다.', // 메일 제목
        html: `
                <div style='margin:30px auto;width:900px;border:10px solid #f7f7f7'>
                    <div style='border:1px solid #dedede'>
                        <h1 style='padding:30px 30px 0;background:#f7f7f7;color:#555;font-size:1.4em'>
                            문의드립니다.
                        </h1>
                        <span style='display:block;padding:10px 30px 30px;background:#f7f7f7;text-align:right'>
                            이름 : ${inquiryname}
                        </span>
                        <ul>
                            <li style='list-style: none; margin-bottom:10px;'><strong style='font-size: 16px;'>이메일</strong> :  ${inquiryemail}</li>
                            <li style='list-style: none; margin-bottom:10px;'><strong style='font-size: 16px;'>연락처</strong> :  ${phoneNumber}</li>
                            <li style='list-style: none; margin-bottom:10px;'><strong style='font-size: 16px;'>국가명</strong> :  ${inquirycontury}</li>
                             ${inquirybusiness ? `<li style='list-style: none; margin-bottom:10px;'><strong style='font-size: 16px;'>사업분야</strong> :  ${inquirybusiness}</li>` : ""}
                            <li style='list-style: none; margin-bottom:10px;'><strong style='font-size: 16px;'>문의내용</strong> :  ${inquirycontent}</li>
                        </ul>
                        <p style="padding-left:20px; font-size:16px; margin:30px 0">${inquirystats}</p>
                    </div>
                </div>
            `, // 메일 내용
        attachments: [
            ...(file ? [{
                // 파일 이름을 latin1에서 UTF-8로 인코딩 변환
                filename: Buffer.from(file.originalname, 'latin1').toString('utf8'),
                content: file.buffer,
            }] : []),
        ],
    };


    // 메일 전송
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.status(500).send('메일 전송에 실패하였습니다.');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('성공적으로 문의하였습니다.');
        }
    });
});

export default router.handler( {
    onError: (err: unknown, req, res) => {
        if (err instanceof multer.MulterError && err.code === "LIMIT_FILE_SIZE") {
            // 파일 용량 초과 에러 처리
            res.status(413).json({ message: "파일 용량이 너무 큽니다. 최대 10MB까지 가능합니다." });
        } else {
            // 기타 서버 에러 처리
            console.error(err);
            res.status(500).json({ message: "서버 오류가 발생했습니다." });
        }
    },
    onNoMatch(req, res) {
        res.status(404).json({ message: "해당 경로를 찾을 수 없습니다." });
    },
});

export const config = {
    api: {
        bodyParser: false,
    },
};