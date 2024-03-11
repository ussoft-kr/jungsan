import React, {ChangeEvent, useState} from 'react';
import styles from 'styles/Board.module.css';
import {NextPage} from "next";
import Layout from "component/common/Layout";
import SubHeader from "component/common/SubHeader";
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import axios from "axios";
import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import {FileInput} from "types/type";




const Editors = dynamic(() => import('component/board/Editor'), {ssr: false});

const NoticeWrite:NextPage = () => {
    const [text,setText] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [fileInputs, setFileInputs] = useState<FileInput[]>([{ file: null }]);
    const router = useRouter();

    // 폼 제출 핸들러
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // 폼 기본 제출 동작 방지

        // 첨부 파일 업로드를 위한 FormData 생성
        const uploadFormData = new FormData();
        fileInputs.forEach((input, index) => {
            if (input.file) {
                uploadFormData.append(`files`, input.file);
            }
        });

        try {
            // 첨부 파일 업로드
            const uploadResponse = await axios.post('/api/upload', uploadFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // 업로드된 파일 정보 및 기타 폼 데이터 전송
            const postFormData = new FormData();
            postFormData.append('title', title);
            postFormData.append('content', text);


            uploadResponse.data.files.forEach((file: {
                originalname: string;
                path: string }, index: number) => {
                postFormData.append(`file[${index}][path]`, file.path);
                postFormData.append(`file[${index}][name]`, file.originalname); // or any other file info
            });

            // 제목, 내용, 파일 정보를 포함하여 서버에 POST 요청
            const technicResponse = await axios.post('/api/technic/post', postFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // 성공적으로 데이터가 전송된 후의 처리
            console.log(technicResponse.data.message);
            alert("글쓰기가 완료되었습니다.");
            await router.push('/board/technic');
            // 폼 초기화 및 이동 등의 후속 처리
        } catch (error) {
            console.error("Error submitting the form:", error);
            alert("글쓰기에 실패했습니다."); // 실패 알림
        }
    };



    const handleFileChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        const newFile = event.target.files ? event.target.files[0] : null;
        let updatedFileInputs = [...fileInputs];
        updatedFileInputs[index] = { file: newFile };

        // 마지막 입력 필드에 파일이 추가되면 새 입력 필드 추가
        if (index === fileInputs.length - 1 && newFile) {
            updatedFileInputs.push({ file: null });
        }

        setFileInputs(updatedFileInputs);
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
                        <InputGroup className={styles.writegroupbox}>
                            <Form.Control
                                type={'text'}
                                required
                                placeholder={'제목'}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className={styles.titleinput}
                            />
                        </InputGroup>
                        <Editors onContentChange={(content) => setText(content)}  />
                        <div className={styles.attchbox}>
                            <Form.Label>첨부파일</Form.Label>
                            {fileInputs.map((input, index) => (
                                <Form.Group key={index} controlId={`fileInput-${index}`}>
                                    <Form.Control
                                        type='file'
                                        className={styles.fileinput}
                                        onChange={(e) => handleFileChange(e as ChangeEvent<HTMLInputElement>, index)}
                                    />
                                </Form.Group>
                            ))}
                        </div>
                        <div className={styles.buttonbox}>
                            <Button type={'submit'} className={styles.writebtn}>저장</Button>
                            <Button type={'button'} onClick={() => router.back()} className={styles.cenclebtn}>취소</Button>
                        </div>
                    </Form>
                </Container>
            </div>
        </Layout>
    )
}

export default NoticeWrite
