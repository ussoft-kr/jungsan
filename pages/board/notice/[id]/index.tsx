import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '@/component/common/Layout';
import {NoticeTypes} from "@/pages/board/notice";
import SubHeader from "@/component/common/SubHeader";
import styles from '@/styles/Board.module.css';
import {Button, Container} from "react-bootstrap";
import Link from "next/link";

const NoticeDetailPage = () => {
    const router = useRouter();
    const { id } = router.query; // URL로부터 공지사항 ID 추출
    const [notice, setNotice] = useState<NoticeTypes | null>(null); // 상태 변수로 공지사항 상세 정보 저장

    useEffect(() => {
        if (id) { // ID가 유효하면 API 호출
            const fetchNoticeDetail = async () => {
                try {
                    const response = await axios.get(`/api/notice/${id}`);
                    setNotice(response.data); // 상태 업데이트
                } catch (error) {
                    console.error('공지사항 상세 정보를 불러오는데 실패했습니다.', error);
                }
            };

            fetchNoticeDetail().then(r => '');
        }
    }, [id]); // ID가 변경될 때마다 실행

    if (!notice) return <p>Loading...</p>; // 로딩 중이거나 데이터가 없는 경우

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
                    <h1>{notice.title}</h1>

                    <div dangerouslySetInnerHTML={{ __html: notice.content }}></div>
                    <div className={styles.buttonbox}>
                        <Button type={'button'} onClick={() => router.back()}>목록</Button>
                        <Button type={'button'}>
                            <Link href={`/board/notice/${notice.id}/edit`}>
                                수정
                            </Link>
                        </Button>
                    </div>
                </Container>
            </div>
        </Layout>
    );
};

export default NoticeDetailPage;
