import React from 'react';
import styles from '@/styles/Overview.module.css';
import {NextPage} from "next";
import Layout from "@/component/common/Layout";
import SubHeader from "@/component/common/SubHeader";
import {Container} from "react-bootstrap";


const Overview:NextPage = () => {
    return(
        <Layout>
            <SubHeader
                imgsrc={'/sub/sub_img1.jpg'}
                title={'회사개요'}
                menuitem={[
                    {id : 1, menutitle : 'CEO 인사말', href: '/company/intro'},
                    {id : 2, menutitle : '회사개요', href: '/company/overview'},
                    {id : 3, menutitle : '사훈 및 경영방침', href: '/company/motto'},
                    {id : 4, menutitle : '연혁', href: '/company/history'},
                    {id : 5, menutitle : '조직도', href: '/company/organization'},
                    {id : 6, menutitle : '오시는길', href: '/company/location'},
                ]}
            />
            <div className={styles.subwrap}>
                <div className={styles.section1}>
                    <Container>
                        <div className={styles.contentheader}>

                        </div>
                    </Container>
                </div>
            </div>
        </Layout>
    )
}

export default Overview