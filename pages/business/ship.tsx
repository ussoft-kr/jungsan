import React from 'react';
import styles from '@/styles/Ship.module.css';
import {NextPage} from "next";
import Layout from "@/component/common/Layout";
import SubHeader from "@/component/common/SubHeader";
import {Container} from "react-bootstrap";


const Ship:NextPage = () => {
    return (
        <Layout>
            <SubHeader
                imgsrc={'/sub/sub_img2.jpg'}
                title={'선박엔진 부품사업'}
                menuitem={[
                    {id : 1, menutitle : '선박엔진 부품사업', href: '/business/ship'},
                    {id : 2, menutitle : '플랜트 부품사업', href: '/business/plant'},
                    {id : 3, menutitle : '산업설비 부품산업', href: '/business/industry'},
                    {id : 4, menutitle : '전자제품 사업분야', href: '/business/electron'},
                    {id : 5, menutitle : '제품사양', href: '/business/product'},
                ]}
            />
            <div className={styles.subwrap}>
                <Container>
                    <div className={styles.contentheader}>
                        <h3>
                            고객의 <strong>신뢰</strong>와 더불어 <strong>기술과 품질의<br/>
                            자부심을 키워가는</strong> (주)중산기업 입니다.
                        </h3>
                    </div>
                </Container>
            </div>
        </Layout>
    )
}

export default Ship