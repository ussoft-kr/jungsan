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
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', text);

        fileInputs.forEach((input, index) => {
            if (input.file) {
                formData.append(`files`, input.file); // 새로운 파일 추가
            } else if (input.path) {
                // 기존 파일의 경로를 formData에 추가합니다. 서버에서 이를 구분할 수 있어야 합니다.
                formData.append(`existingFiles[${index}][path]`, input.path);
            }
        });

        try {
            const response = await axios.put(`/api/notice/noticeupdate`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            alert("글 수정이 완료되었습니다.");
            router.push(`/board/notice/${response.data.id}`);
        } catch (error) {
            console.error("Error submitting the form:", error);
            alert("글 수정에 실패했습니다.");
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

    const handleRemoveFile = (removeIndex: number) => {
        setFileInputs(prevInputs =>
            prevInputs.filter((_, index) => index !== removeIndex)
        );
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
