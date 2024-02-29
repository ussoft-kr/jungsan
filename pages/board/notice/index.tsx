import React from 'react';
import styles from '@/styles/Notice.module.css';
import {NextPage} from "next";
import Layout from "@/component/common/Layout";
import SubHeader from "@/component/common/SubHeader";
import BoardSearch from "@/component/board/BoardSearch";
import {Container, Form} from "react-bootstrap";
import Link from "next/link";


interface NoticeDataProps {
    id : number;
    title : string;
    file? : string;
    date : Date;
}




const NoticeIndex:NextPage = () => {
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
            <div className={styles.subwrap}>
                <Container>
                    <BoardSearch />
                    <div className={styles.boardtablebox}>
                        <table>
                            <caption>전체 <span>10</span>건</caption>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>No</th>
                                    <th>제목</th>
                                    <th>첨부파일</th>
                                    <th>작성일</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={styles.allcheck}>
                                        <Form.Check type={'checkbox'} />
                                    </td>
                                    <td>
                                        <Link href={''}>

                                        </Link>
                                    </td>
                                    <td>
                                        
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Container>
            </div>
        </Layout>
    )
}

export default NoticeIndex