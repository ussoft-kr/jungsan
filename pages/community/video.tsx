import React from 'react';
import styles from '@/styles/Video.module.css';
import {NextPage} from "next";
import Layout from "@/component/common/Layout";
import SubHeader from "@/component/common/SubHeader";

const Video:NextPage = () => {
    return (
        <Layout>
            <SubHeader
                imgsrc={'/sub/sub_img4.jpg'}
                title={'회사소식'}
                menuitem={[
                    {id: 1, menutitle: '공지사항', href: '/community/notice'},
                    {id: 2, menutitle: '기술자료', href: '/community/technic'},
                    {id: 3, menutitle: '카탈로그', href: '/community/catalog'},
                    {id: 4, menutitle: '회사소식', href: '/community/video'},
                ]}
            />
            <div className={styles.subwrap}>

            </div>
        </Layout>
    )
}

export default Video