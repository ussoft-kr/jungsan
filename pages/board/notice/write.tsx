import React, {useState} from 'react';
import styles from '@/styles/Notice.module.css';
import {NextPage} from "next";
import Layout from "@/component/common/Layout";
import SubHeader from "@/component/common/SubHeader";
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import axios from "axios";
import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import { extractImagesFromHTML } from '@/util/imageutils';


const Editors = dynamic(() => import('@/component/board/Editor'), {ssr: false});

const NoticeWrite:NextPage = () => {
    const [text,setText] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const router = useRouter();






    // 폼 제출 핸들러
    const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // 폼 기본 제출 동작 방지

        // 에디터에서 HTML 내용과 이미지 정보 추출
        const images = extractImagesFromHTML(text);

        try {
            // 제목, 에디터 내용, 이미지 정보를 포함하여 서버에 POST 요청
            const response = await axios.post('/api/notice/noticepost', {
                title,
                content: text,
                images, // 이미지 URL과 파일 이름 배열
            });

            console.log(response.data); // 응답 로깅

            // 폼 초기화 등 후속 처리
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
                    {id: 1, menutitle: '공지사항', href: '/board/notice'},
                    {id: 2, menutitle: '기술자료', href: '/board/technic'},
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
                        <Editors onContentChange={(content) => setText(content)}  />
                        <Button type={'submit'}>글쓰기</Button>
                        <Button type={'button'} onClick={() => router.back()}>취소</Button>
                    </Form>
                </Container>
            </div>
        </Layout>
    )
}

export default NoticeWrite
