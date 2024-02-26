import React from 'react';
import styles from '@/styles/Location.module.css';
import {NextPage} from "next";
import Layout from "@/component/common/Layout";
import SubHeader from "@/component/common/SubHeader";
import KaKaoMap from "@/component/intro/KaKaoMap";
import {Container, Image} from "react-bootstrap";


const Location:NextPage = () => {
    return (
        <Layout>
            <SubHeader
                imgsrc={'/sub/sub_img1.jpg'}
                title={'오시는길'}
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
                            고객의 <strong>신뢰</strong>와 더불어 <strong>기술과 품질의<br/>
                            자부심을 키워가는</strong> (주)중산기업 입니다.
                        </h3>
                    </div>
                    <div className={styles.contentbody}>
                        <KaKaoMap/>
                        <div className={styles.mapabsolutebox}>
                            <div className={styles.titlebox}>
                                <span>Headquarters</span>
                                <h4>울산본사</h4>
                            </div>
                            <div className={styles.infobox}>
                                <p>울산광역시 울주군 삼동면 암리 3길 25 우) 44956</p>
                            </div>
                        </div>
                        <div className={styles.bottombox}>
                            <ul>
                                <li>
                                    <span className={styles.elipse}>
                                        <Image src={'/sub/icon_tel.svg'} alt={'sub-icon'}/>
                                    </span>
                                    <span className={styles.titlespan}>
                                        대표전화(영업부)
                                    </span>
                                    <span className={styles.textspan}>
                                        052-254-3290~4
                                    </span>
                                </li>
                                <li>
                                    <span className={styles.elipse}>
                                        <Image src={'/sub/icon_fax.svg'} alt={'sub-icon'}/>
                                    </span>
                                    <span className={styles.titlespan}>
                                        팩스
                                    </span>
                                    <span className={styles.textspan}>
                                        052-254-3295
                                    </span>
                                </li>
                                <li>
                                    <span className={styles.elipse}>
                                        <Image src={'/sub/icon_email.svg'} alt={'sub-icon'}/>
                                    </span>
                                    <span className={styles.titlespan}>
                                        이메일
                                    </span>
                                    <span className={styles.textspan}>
                                        jungsan@jungsan.com / sales@jungsan.com
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
        </Layout>
    )
}

export default Location