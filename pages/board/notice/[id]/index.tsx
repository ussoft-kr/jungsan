import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Layout from 'component/common/Layout';
import SubHeader from "component/common/SubHeader";
import styles from 'styles/Board.module.css';
import {Button, Container} from "react-bootstrap";
import Link from "next/link";
import {NoticeTypes} from "types/type";

const NoticeDetailPage = () => {
    const router = useRouter();
    const {id} = router.query; // URL로부터 공지사항 ID 추출
    const [notice, setNotice] = useState<NoticeTypes | null>(null); // 상태 변수로 공지사항 상세 정보 저장
    const [prevNotice, setPrevNotice] = useState<NoticeTypes | null>(null);
    const [nextNotice, setNextNotice] = useState<NoticeTypes | null>(null);
    const [file, setFile] = useState<NoticeTypes | null>(null);

    useEffect(() => {
        if (id) {
            const fetchNoticeDetail = async () => {
                try {
                    const {data} = await axios.get(`/api/notice/${id}`);
                    setNotice(data.notice); // 현재 게시물의 상태 업데이트
                    // 이전글과 다음글의 상태도 업데이트
                    setPrevNotice(data.prevNotice);
                    setNextNotice(data.nextNotice);
                } catch (error) {
                    console.error('공지사항 상세 정보를 불러오는데 실패했습니다.', error);
                }
            };

            fetchNoticeDetail();
        }
    }, [id]);

    if (!notice) return <p>Loading...</p>; // 로딩 중이거나 데이터가 없는 경우

    const handleDelete = async () => {
        const isConfirmed = window.confirm('정말 삭제하시겠습니까? 삭제된 데이터들은 복구가 불가능합니다.');

        if (!isConfirmed) {
            // 사용자가 아니오를 선택한 경우 alert 종료
            return;
        }

        try {
            // 게시물 삭제 요청

            await axios.delete(`/api/notice/noticedelete`, {
                data: {ids: [Number(id)]},
            });

            //성공시
            window.alert('삭제되었습니다.');

            // 삭제 이후 목록으로 이동
            await router.push('/board/notice');

        } catch (error) {
            console.log('삭제실패', error);
            window.alert('삭제에 실패하였습니다.');
        }

    }


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
            <div className={styles.boardviewwrap}>
                <Container>
                    <div className={styles.boardviewheader}>
                        <h1>{notice.title}</h1>
                        <span>{new Date(notice.postedAt).toLocaleDateString()}</span>
                    </div>
                    <div className={styles.boardviewbody}>
                        <div dangerouslySetInnerHTML={{__html: notice.content}} className={styles.contentbox}></div>
                    </div>
                    <div className={styles.prevnextbox}>
                        <table>
                            <tbody>

                            <tr>
                                <th>첨부파일</th>
                                <td className={styles.viewatttd}>
                                    <div className={styles.attboxs}>
                                        {
                                            notice.boardfile && notice.boardfile.length > 0 ? (
                                                notice.boardfile.map((file, index) => (
                                                    <span key={index}>
                                                        <Link href={file.path ?? '#'} target="_blank" rel="noopener noreferrer" download>
                                                            {file.path ? file.path.split('/').pop() : '파일 정보 없음'}
                                                        </Link>
                                                    </span>
                                                ))
                                            ) : (
                                                <span>첨부파일이 없습니다.</span>
                                            )
                                        }
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <th>이전글</th>
                                <td className={styles.prevtd}>
                                    {prevNotice ? (
                                        <Link href={`/board/notice/${prevNotice.id}`}>
                                            {prevNotice.title}
                                        </Link>
                                    ) : '이전글이 없습니다.'}
                                </td>
                            </tr>
                            <tr>
                                <th>다음글</th>
                                <td className={styles.nexttd}>
                                    {nextNotice ? (
                                        <Link href={`/board/notice/${nextNotice.id}`}>
                                            {nextNotice.title}
                                        </Link>
                                    ) : '다음글이 없습니다.'}
                                </td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className={styles.buttonbox}>
                        <Button type={'button'}>
                            <Link href={'/board/notice'}>
                                목록
                            </Link>
                        </Button>
                        <Button type={'button'}>
                            <Link href={`/board/notice/${notice.id}/edit`}>
                                수정
                            </Link>
                        </Button>
                        <Button type={'button'} onClick={handleDelete} className={'me-0'}>삭제</Button>
                    </div>
                </Container>
            </div>
        </Layout>
    );
};

export default NoticeDetailPage;
