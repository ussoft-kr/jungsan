import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from "@/component/common/Layout";
import styles from "@/styles/Board.module.css";
import SubHeader from "@/component/common/SubHeader";
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import dynamic from "next/dynamic";
import { extractImagesFromHTML } from '@/util/imageutils';
import Link from "next/link";



const Editors = dynamic(() => import('@/component/board/Editor'), {ssr: false});

const EditNotice = () => {
    const router = useRouter();
    const { id } = router.query;
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [images, setImages] = useState('');

    useEffect(() => {
        if (id) {
            axios.get(`/api/notice/${id}`).then((response) => {
                const { title, content, images } = response.data;
                setTitle(title);
                setContent(content);
                setImages(images);
            });
        }
    }, [id]);



    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // 폼 기본 제출 동작 방지

        // 이미지 정보 추출 로직이 필요한 경우 여기에 추가
        const images = extractImagesFromHTML(content);

        try {
            // 수정된 제목, 내용, (필요한 경우 이미지 정보)를 포함하여 서버에 PUT 요청
            await axios.put(`/api/notice/noticeupdate`, {
                id,
                title,
                content,
                images,
            });
            // 성공 응답 후 처리, 예: 수정된 글의 상세 페이지로 리다이렉션
            alert("수정되었습니다.");
            router.push(`/board/notice/${id}`);
        } catch (error) {
            console.error("글 수정에 실패했습니다.", error);
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
                    <div className={styles.box}>
                        <form onSubmit={handleSubmit}>
                            <InputGroup className={styles.writegroupbox}>
                                <Form.Control
                                    type={'text'}
                                    required
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className={styles.titleinput}
                                />
                            </InputGroup>
                            <Editors onContentChange={(content) => setContent(content)} initialValue={content} />
                            <div className={styles.buttonbox}>
                                <Button type="submit" className={styles.writebtn}>수정</Button>
                                <Button type={'button'} className={styles.cenclebtn}>
                                    <Link href={'/board/notice'}>
                                        취소
                                    </Link>
                                </Button>
                            </div>
                        </form>
                    </div>
                </Container>
            </div>
        </Layout>
    );
};

export default EditNotice;
