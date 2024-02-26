import React from 'react';
import styles from '@/styles/Organization.module.css';
import {NextPage} from "next";
import Layout from "@/component/common/Layout";
import SubHeader from "@/component/common/SubHeader";
import {Container, Image} from "react-bootstrap";

const Organization:NextPage = () => {
    return (
        <Layout>
            <SubHeader
                imgsrc={'/sub/sub_img1.jpg'}
                title={'조직도'}
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
                <Container>
                    <div className={styles.contentheader}>
                        <h3>
                            <strong>강화된 품질력</strong>을 바탕으로<br />
                            <strong>지속적인 매출증대</strong>의 성과를 위해 최선을 다합니다.
                        </h3>
                    </div>
                    <div className={styles.contentbody}>
                        <Image src={'/sub/organization.png'} alt={'sub-img'} className={'w-100'} />
                    </div>
                </Container>
            </div>
        </Layout>
    )
}

export default Organization