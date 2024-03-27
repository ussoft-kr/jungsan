import { useRouter } from 'next/router';
import React, {ChangeEvent, useEffect, useState} from 'react';
import axios from 'axios';
import {Button, CloseButton, Container, Form, InputGroup} from "react-bootstrap";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FileInput } from 'types/type';
import Layout from 'component/common/Layout';
import SubHeader from 'component/common/SubHeader';
import styles from "styles/Board.module.css";



const Editors = dynamic(() => import('component/board/Editor'), {ssr: false});

const EditNotice = () => {
    const router = useRouter();
    const { id } = router.query;
    const [title, setTitle] = useState<string>('');
    const [text,setText] = useState('');
    const [fileInputs, setFileInputs] = useState<FileInput[]>([{ file: null }]);


// 데이터를 불러올 때
    useEffect(() => {
        if (id) {
            axios.get(`/api/notice/${id}`).then((response) => {
                const { title, content, boardfile } = response.data.notice;
                setTitle(title || ''); // API로부터 받은 값이 undefined일 경우 빈 문자열 사용
                setText(content || ''); // 동일하게 적용
                const initialFileInputs = boardfile.map((file: { path: string; }) => ({
                    file: null, // 새로운 파일을 위한 공간
                    path: file.path, // 기존 파일 경로
                }));
                setFileInputs([...initialFileInputs, { file: null }]); // 기존 파일 정보와 새 파일 입력을 위한 공간 추가
            }).catch(error => {
                console.error("공지사항 불러오기 실패:", error);
            });
        }
    }, [id]);



    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

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


            const formData = new FormData();
            formData.append('title', title);
            formData.append('content', text);
            formData.append('id', id?.toString() ?? 'defaultId');


            fileInputs.forEach((input, index) => {
                if (input.file) {
                    formData.append(`files`, input.file); // 새로운 파일 추가
                } else if (input.path) {
                    // 기존 파일의 경로를 formData에 추가합니다. 서버에서 이를 구분할 수 있어야 합니다.
                    formData.append(`existingFiles[${index}][path]`, input.path);
                }
            });

            uploadResponse.data.files.forEach((file: {
                originalname: string;
                path: string }, index: number) => {
                formData.append(`file[${index}][path]`, file.path);
                formData.append(`file[${index}][name]`, file.originalname); // or any other file info
            });
            const response = await axios.put(`/api/notice/noticeupdate`, formData, {

                headers: {
                    'Content-Type': 'multipart/form-data',
                },


            });

            alert("글 수정이 완료되었습니다.");
            await router.push(`/board/notice/${response.data.id}`);
        } catch (error) {
            console.error("Error submitting the form:", error);
            alert("글 수정에 실패했습니다.");
        }
    };



// 기존 첨부파일과 새 첨부파일을 구분하여 처리하는 로직
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (file) {
            // 새 파일이 선택된 경우, fileInputs 상태 업데이트
            const updatedFileInputs = [...fileInputs];
            updatedFileInputs[index] = { file, path: '' }; // 새 파일 정보 저장
            setFileInputs(updatedFileInputs);
        }
    };

    const handleRemoveFile = (index: number) => {
        // 파일 삭제 처리 로직
        const updatedFileInputs = fileInputs.filter((_, i) => i !== index);
        setFileInputs(updatedFileInputs);
    };


    return (
        <Layout>
            <SubHeader
                imgsrc={'/sub/sub_img4.jpg'}
                title={'기술자료'}
                menuitem={[
                    {id: 1, menutitle: '회사소식', href: '/board/notice'},
                    {id: 2, menutitle: '기술자료', href: '/board/technic'},
                    {id: 3, menutitle: '카탈로그', href: '/community/catalog'},
                ]}
            />
            <div className={styles.writewrap}>
                <Container className={styles.container}>
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
                            <Editors onContentChange={(content) => setText(content)} initialValue={text}/>


                            <div className={styles.attchbox}>
                                <Form.Label className={'me-3'}>첨부파일</Form.Label>
                                {fileInputs.map((input, index) => (
                                    // 기존 첨부파일 표시
                                    input.path ? (
                                        <span key={`existing-${index}`} className={styles.fileDisplay}>
                                            <Link href={input.path} download>
                                                {input.path.split('/').pop()}
                                            </Link>
                                            <CloseButton className={styles.closebtn} onClick={() => handleRemoveFile(index)} />
                                        </span>
                                    ) : (
                                        // 새 파일 업로드 입력 필드
                                        <Form.Group key={`new-${index}`} controlId={`fileInput-${index}`} className={'mt-1'}>
                                            <Form.Control
                                                type='file'
                                                className={styles.fileinput}
                                                onChange={(e) => handleFileChange(e as ChangeEvent<HTMLInputElement>, index)}
                                            />
                                        </Form.Group>
                                    )
                                ))}
                                {/* 사용자가 새 파일을 추가할 수 있도록 항상 빈 입력 필드 추가 */}
                                <Form.Group controlId={`fileInput-new`}>
                                    <Form.Control
                                        type='file'
                                        className={styles.fileinput}
                                        onChange={(e) => handleFileChange(e as ChangeEvent<HTMLInputElement>, fileInputs.length)}
                                    />
                                </Form.Group>
                            </div>

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
