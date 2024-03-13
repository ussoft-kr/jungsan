import nodemailer from 'nodemailer';
import multer from 'multer';
import {createRouter} from "next-connect";
import type {NextApiRequest, NextApiResponse} from "next";
import {InquiryFormType} from "types/type";


const upload = multer({ storage: multer.memoryStorage() });


const router = createRouter<NextApiRequest, NextApiResponse>();

router.use(upload.single('file') as any);

router.post(async (req: any, res) => {

    const { inquiryname , inquiryemail, phoneNumber, inquirycontury, inquirybusiness, inquirycontent } = req.body as InquiryFormType;
    const file = req.file;


    // nodemailer를 사용하여 메일 서비스 설정
    let transporter = nodemailer.createTransport({
        host: "smtp.example.com",
        port: 587,
        secure: false,
        auth: {
            user: "your_email@example.com",
            pass: "your_password",
        },
    });

    let mailOption = {

    }

});