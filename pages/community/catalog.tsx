import React from 'react';
import styles from 'styles/Catalog.module.css';
import {NextPage} from "next";
import Layout from "component/common/Layout";
import SubHeader from "component/common/SubHeader";
import {Col, Container, Image, Row} from "react-bootstrap";
import Link from "next/link";

const Catalog:NextPage = () => {
    return (
        <Layout>
            <SubHeader
                imgsrc={'/sub/sub_img4.jpg'}
                title={'카탈로그'}
                menuitem={[
                    {id: 1, menutitle: '회사소식', href: '/board/notice'},
                    {id: 2, menutitle: '기술자료', href: '/board/technic'},
                    {id: 3, menutitle: '카탈로그', href: '/community/catalog'},
                ]}
            />
            <div className={styles.subwrap}>
                <Container>
                    <h4>
                        <Image src={'/sub/title_icon.png'} alt={'sub-img'}/>
                        E-CATALOGUE
                    </h4>
                    <div className={styles.cataloguebox}>
                        <Row>
                            <Col xl={4} xs={12}>
                                <div className={styles.infobox}>
                                    <div className={styles.infoheader}>
                                        <p>플랜트 & 엔진</p>
                                        <Image src={'/sub/catalog01.jpg'} alt={'sub-img'}/>
                                    </div>
                                    <div className={styles.downloadbox}>
                                        <Link href={'/data/download/jungsan ca_kr web out.pdf'} target="_blank" rel="noopener noreferrer" download>
                                            <span className={styles.textspan}>다운로드</span>
                                            <span className={styles.imgspan}>
                                              <Image src={'/main/download.svg'} alt={'sub-icon'} />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={4} xs={12}>
                                <div className={styles.infobox}>
                                    <div className={styles.infoheader}>
                                        <p>풀림방지솔루션</p>
                                        <Image src={'/sub/catalog03.jpg'} alt={'sub-img'}/>
                                    </div>
                                        <div className={styles.downloadbox}>
                                            <Link href={'/data/download/LOCXELL_KOR.pdf'} target="_blank"
                                                  rel="noopener noreferrer" download>
                                                <span className={styles.textspan}>다운로드</span>
                                                <span className={styles.imgspan}>
                                              <Image src={'/main/download.svg'} alt={'sub-icon'}/>
                                            </span>
                                            </Link>
                                        </div>
                                    </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </Layout>
    )
}

export default Catalog