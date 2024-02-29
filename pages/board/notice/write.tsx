import React, {useState} from 'react';
import styles from '@/styles/Notice.module.css';
import {NextPage} from "next";
import Layout from "@/component/common/Layout";
import SubHeader from "@/component/common/SubHeader";
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import { Editor } from "primereact/editor";
import axios from "axios";



const NoticeWrite:NextPage = () => {
    const [text,setText] = useState<string>('');
    const [title, setTitle] = useState<string>('');




    const handleImageUpload = async (file: string | Blob) => {
        const formData = new FormData();
        formData.append('image', file); // 'image'는 서버 측에서 파일 데이터를 참조하는 키입니다.

        return axios.post('/api/imageupload', formData) // Content-Type 헤더를 생략합니다.
            .then(response => {
                // 서버로부터의 응답 처리
                console.log(response.data);
                return response.data.imageUrl; // 가정: 응답에서 이미지 URL을 받는다고 가정
            })
            .catch(error => {
                console.error('Image upload failed:', error);
            });
    };



    const initQuill = (quill : any) => {
        const toolbar = quill.getModule('toolbar');
        toolbar.addHandler('image', () => {
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.click();

            input.onchange = async () => {
                const file = input.files ? input.files[0] : null;
                if (file) {
                    const imageUrl = await handleImageUpload(file);
                    if (imageUrl) {
                        const range = quill.getSelection();
                        quill.insertEmbed(range.index, 'image', imageUrl);
                    }
                }
            };
        });
    };



    // 폼 제출 핸들러
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // 폼 기본 제출 동작 방지

        try {
            // 서버에 POST 요청 보내기
            const response = await axios.post('/api/noticepost', {
                title,
                content: text,
            });

            console.log(response.data); // 응답 로깅

            // 성공적으로 데이터를 보낸 후의 처리 (예: 폼 초기화, 알림 표시 등)
            setTitle('');
            setText('');
        } catch (error) {
            console.error(error); // 오류 로깅
        }
    };


    return (
        <Layout>
            <SubHeader
                imgsrc={'/sub/sub_img4.jpg'}
                title={'공지사항'}
                menuitem={[
                    {id: 1, menutitle: '공지사항', href: '/community/notice'},
                    {id: 2, menutitle: '기술자료', href: '/community/technic'},
                    {id: 3, menutitle: '카탈로그', href: '/community/catalog'},
                    {id: 4, menutitle: '회사소식', href: '/community/video'},
                ]}
            />
            <div className={styles.writewrap}>
                <Container>
                    <Form onSubmit={handleSubmit} encType={'multipart/form-data'}>
                        <InputGroup>
                            <Form.Control
                                type={'text'}
                                required
                                placeholder={'제목'}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </InputGroup>
                        <Editor
                            value={text}
                            onTextChange={(e) => setText(e.htmlValue ?? '')} style={{height: '320px'}}
                            onLoad={initQuill}
                        />

                        <Button type={'submit'}>글쓰기</Button>
                    </Form>
                </Container>
            </div>
        </Layout>
    )
}

export default NoticeWrite
