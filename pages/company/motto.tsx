import React from 'react';
import styles from '@/styles/Motto.module.css';
import {NextPage} from "next";
import Layout from "@/component/common/Layout";
import SubHeader from "@/component/common/SubHeader";
import {Col, Container, Image, Row} from "react-bootstrap";


const Motto:NextPage = () => {
    return (
        <Layout>
            <SubHeader
                imgsrc={'/sub/sub_img1.jpg'}
                title={'사훈 및 경영방침'}
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
                        <h3>
                            정리(整理) · 정돈(整頓)이<br/>
                            회사를 유지하고 발전시키는 원동력이 된다!
                        </h3>
                        <Image src={'/sub/value.png'} alt={'sub-img'}/>
                    </Container>
                </div>
                <div className={styles.section2}>
                    <Container>
                        <div className={styles.contentheader}>
                            <strong>비전</strong><span>Vision</span>
                            <h3>GLOBAL NO1 : TOP 2020</h3>
                            <p>
                                조선엔진 / 원자력 / 풍력발전 / 전자조립용부품 전문메이커
                            </p>
                            <Image src={'/sub/vision_img.png'} alt={'sub-img'} />
                        </div>
                        <div className={styles.contentbody}>
                            <div className={styles.contentbox1}>
                                <strong>목표</strong><span>Target</span>
                                <Row className={'mt-4'}>
                                    <Col xl={4} xs={12}>
                                        <div className={styles.infobox}>
                                            <p>불량 &#39;0&#39;화</p>
                                        </div>
                                    </Col>
                                    <Col xl={4} xs={12}>
                                        <div className={styles.infobox}>
                                            <p>고장 &#39;0&#39;화</p>
                                        </div>
                                    </Col>
                                    <Col xl={4} xs={12}>
                                        <div className={styles.infobox}>
                                            <p>재해 &#39;0&#39;화</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.contentbox2}>
                                <strong>활동전략</strong><span>Activity Strategy</span>
                                <div className={styles.box}>
                                    <Row className={'mt-4'}>
                                        <Col xl={4} xs={12} className={styles.col1}>
                                            <div className={styles.infobox}>
                                                <Image src={'/sub/activity_bg1.png'} alt={'sub-icon'} className={'w-100'} />
                                                <div className={styles.boxwrap}>
                                                    <div className={styles.imgbox}>
                                                        <Image src={'/sub/activity_icon1.svg'} alt={'sub-icon'} />
                                                    </div>
                                                    <div className={styles.textbox}>
                                                        <h4>People의 혁신</h4>
                                                        <ul>
                                                            <li>· 3P의 실천</li>
                                                            <li>· 변화에 강한체질의 직장</li>
                                                            <li>· Communication의 확대</li>
                                                            <li>· 중산 고유의 품질문화정립</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={4} xs={12} className={styles.col2}>
                                            <div className={styles.infobox}>
                                                <Image src={'/sub/activity_bg2.png'} alt={'sub-icon'} className={'w-100'} />
                                                <div className={styles.boxwrap}>
                                                    <div className={styles.imgbox}>
                                                        <Image src={'/sub/activity_icon2.svg'} alt={'sub-icon'}/>
                                                    </div>
                                                    <div className={styles.textbox}>
                                                        <h4>Process의 혁신</h4>
                                                        <ul>
                                                            <li>· 철저한 표준작업의 준수</li>
                                                            <li>· 자주품질보증체계</li>
                                                            <li>· 생산성 배가 활동</li>
                                                            <li>· 지속적인 현장 개선활동</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={4} xs={12} className={styles.col3}>
                                            <div className={styles.infobox}>
                                                <Image src={'/sub/activity_bg3.png'} alt={'sub-icon'} className={'w-100'} />
                                                <div className={styles.boxwrap}>
                                                    <div className={styles.imgbox}>
                                                        <Image src={'/sub/activity_icon3.svg'} alt={'sub-icon'}/>
                                                    </div>
                                                    <div className={styles.textbox}>
                                                        <h4>Product의 혁신</h4>
                                                        <ul>
                                                            <li>· 최상의 제조기술력 확보</li>
                                                            <li>· 철저한 낭비제거 활동</li>
                                                            <li>· Global한 시장개척</li>
                                                            <li>· Green공장의 쾌적한 작업</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className={styles.contentbox3}>
                                <strong>인프라</strong><span>Infrastructure</span>
                                <div className={styles.box}>
                                    <Row>
                                        <Col xl={3} xs={12}>
                                            <div className={styles.infobox}>
                                                <span className={styles.linespan}></span>
                                                <p>제안활동</p>
                                            </div>
                                        </Col>
                                        <Col xl={3} xs={12}>
                                            <div className={styles.infobox}>
                                                <span className={styles.linespan}></span>
                                                <p>교육,훈련</p>
                                            </div>
                                        </Col>
                                        <Col xl={3} xs={12}>
                                            <div className={styles.infobox}>
                                                <span className={styles.linespan}></span>
                                                <p>3정 5S활동 TPM</p>
                                            </div>
                                        </Col>
                                        <Col xl={3} xs={12}>
                                            <div className={styles.infobox}>
                                                <span className={styles.linespan}></span>
                                                <p>보전활동</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.bottombox}>
                                    <p>전원참여 TPM / 동아리 활동</p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </Layout>
    )
}

export default Motto