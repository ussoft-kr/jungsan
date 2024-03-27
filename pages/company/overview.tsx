import React from 'react';
import styles from 'styles/Overview.module.css';
import {NextPage} from "next";
import Layout from "component/common/Layout";
import SubHeader from "component/common/SubHeader";
import {Col, Container, Image, Row} from "react-bootstrap";


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
                    <Container className={styles.container}>
                        <div className={styles.contentheader}>
                            <h3>GLOBAL NO 1 : TOP 2020</h3>
                            <p className={'d-none d-xl-block'}>고객의신뢰와 더불어기술과 품질의 자부심을 키워갑니다.</p>
                            <p className={'d-block d-xl-none'}>고객의신뢰와 더불어기술과 품질의<br />자부심을 키워갑니다.</p>
                        </div>
                        <div className={styles.contentbody}>
                            <div className={styles.imgbox}>
                                <Image src={'/sub/company_img.jpg'} alt={'sub-img'} />
                            </div>
                            <div className={styles.companyinfobox}>
                                <h4>
                                    <Image src={'/sub/title_icon.png'} alt={'sub-img'} />
                                    기업현황
                                </h4>
                                <Row className={'row-cols-xl-5 row-cols-2 mt-1 gy-4'}>
                                    <Col>
                                        <div className={styles.infobox}>
                                            <div className={styles.elipse}>
                                                <Image src={'/sub/company_icon01.svg'} alt={'sub-img'} />
                                            </div>
                                            <span>회사명</span>
                                            <strong>(주)중산기업</strong>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className={styles.infobox}>
                                            <div className={styles.elipse}>
                                                <Image src={'/sub/company_icon02.svg'} alt={'sub-img'} />
                                            </div>
                                            <span>대표자</span>
                                            <strong>정광수</strong>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className={styles.infobox}>
                                            <div className={styles.elipse}>
                                                <Image src={'/sub/company_icon03.svg'} alt={'sub-img'} />
                                            </div>
                                            <span>설립일</span>
                                            <strong>1998년 3월 18일</strong>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className={styles.infobox}>
                                            <div className={styles.elipse}>
                                                <Image src={'/sub/company_icon04.svg'} alt={'sub-img'} />
                                            </div>
                                            <span>자본금</span>
                                            <strong>90억원</strong>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className={styles.infobox}>
                                            <div className={styles.elipse}>
                                                <Image src={'/sub/company_icon05.svg'} alt={'sub-img'} />
                                            </div>
                                            <span>임직원수</span>
                                            <strong>100명</strong>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className={styles.infobox}>
                                            <div className={styles.elipse}>
                                                <Image src={'/sub/company_icon06.svg'} alt={'sub-img'} />
                                            </div>
                                            <span>주소 (본사/공장)</span>
                                            <strong>
                                                울산광역시 울주군<br />
                                                삼동면 암리3길 25
                                            </strong>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className={styles.infobox}>
                                            <div className={styles.elipse}>
                                                <Image src={'/sub/company_icon07.svg'} alt={'sub-img'} />
                                            </div>
                                            <span>전화번호</span>
                                            <strong>052) 254-2390~4</strong>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className={styles.infobox}>
                                            <div className={styles.elipse}>
                                                <Image src={'/sub/company_icon08.svg'} alt={'sub-img'} />
                                            </div>
                                            <span>FAX</span>
                                            <strong>052) 254-3295</strong>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className={styles.infobox}>
                                            <div className={styles.elipse}>
                                                <Image src={'/sub/company_icon09.svg'} alt={'sub-img'} />
                                            </div>
                                            <span>대지</span>
                                            <strong>27,935.52㎥</strong>
                                            <b>(8,450평)</b>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className={styles.infobox}>
                                            <div className={styles.elipse}>
                                                <Image src={'/sub/company_icon10.svg'} alt={'sub-img'} />
                                            </div>
                                            <span>건평</span>
                                            <strong>12,159.96㎥</strong>
                                            <b>(3,678평)</b>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className={styles.section2}>
                    <Container className={styles.container}>
                        <h4>
                            <Image src={'/sub/title_icon.png'} alt={'sub-img'}/>
                            사업부문
                        </h4>
                        <div className={`${styles.contentbox1} mt-2`}>
                            <strong>01</strong><span>사업분야</span>
                            <Row className={'mt-3 gy-xl-0 gy-4'}>
                                <Col xl={3} xs={12}>
                                    <div className={styles.infobox}>
                                        <p>선박엔진 부품사업</p>
                                    </div>
                                </Col>
                                <Col xl={3} xs={12}>
                                    <div className={styles.infobox}>
                                        <p>플랜트 부품 사업</p>
                                    </div>
                                </Col>
                                <Col xl={3} xs={12}>
                                    <div className={styles.infobox}>
                                        <p>사업설비 부품사업</p>
                                    </div>
                                </Col>
                                <Col xl={3} xs={12}>
                                    <div className={styles.infobox}>
                                        <p>전자제품 사업</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.contentbox1}>
                            <strong>02</strong><span>생산분야</span>
                            <Row className={'mt-3 gy-xl-0 gy-4'}>
                                <Col xl={3} xs={12}>
                                    <div className={styles.infobox}>
                                        <p>선박엔진용 Bolf & Nut 류</p>
                                    </div>
                                </Col>
                                <Col xl={3} xs={12}>
                                    <div className={styles.infobox}>
                                        <p>플랜트용 Bolf & Nut 류</p>
                                    </div>
                                </Col>
                                <Col xl={3} xs={12}>
                                    <div className={styles.infobox}>
                                        <p>압연설비 Roll부품(Ring)</p>
                                    </div>
                                </Col>
                                <Col xl={3} xs={12}>
                                    <div className={styles.infobox}>
                                        <p>주방용 TV폰</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.contentbox1}>
                            <strong className={'d-inline-block mb-3'}>03</strong><span>인증현황</span>
                            <Row className={'gy-4'}>
                                <Col xl={3} xs={12}>
                                    <div className={styles.infobox}>
                                        <p>ISO9001 (DNV인증)</p>
                                    </div>
                                </Col>
                                <Col xl={3} xs={12}>
                                    <div className={styles.infobox}>
                                        <p>ISO14001 (DNV인증)</p>
                                    </div>
                                </Col>
                                <Col xl={3} xs={12}>
                                    <div className={styles.infobox}>
                                        <p>ISO45001 (DNV인증)</p>
                                    </div>
                                </Col>
                                <Col xl={3} xs={12}>
                                    <div className={styles.infobox}>
                                        <p>ISO/TS29001 (DNV인증)</p>
                                    </div>
                                </Col>
                                <Col xl={3} xs={12}>
                                    <div className={styles.infobox}>
                                        <p>DNV HEAT TREATMENT</p>
                                    </div>
                                </Col>
                                <Col xl={3} xs={12}>
                                    <div className={styles.infobox}>
                                        <p>ABS HEAT TREATMENT</p>
                                    </div>
                                </Col>
                                <Col xl={3} xs={12}>
                                    <div className={styles.infobox}>
                                        <p>PED (CE)</p>
                                    </div>
                                </Col>
                                <Col xl={3} xs={12}>
                                    <div className={styles.infobox}>
                                        <p>GOST-R</p>
                                    </div>
                                </Col>
                                <Col xl={3} xs={12}>
                                    <div className={styles.infobox}>
                                        <p>SINGLE PPM</p>
                                    </div>
                                </Col>
                                <Col xl={3} xs={12}>
                                    <div className={styles.infobox}>
                                        <p>KEPIC-MN,SN</p>
                                    </div>
                                </Col>
                                <Col xl={3} xs={12}>
                                    <div className={styles.infobox}>
                                        <p>KHNP Certificate</p>
                                    </div>
                                </Col>
                                <Col xl={3} xs={12}>
                                    <div className={styles.infobox}>
                                        <p>Power plant Certificate</p>
                                    </div>
                                </Col>
                                <Col xl={3} xs={12}>
                                    <div className={styles.infobox}>
                                        <p>KC LNG TECH Certificate</p>
                                    </div>
                                </Col>
                                <Col xl={3} xs={12}>
                                    <div className={styles.infobox}>
                                        <p>KR Certificate</p>
                                    </div>
                                </Col>
                                <Col xl={3} xs={12}>
                                    <div className={styles.infobox}>
                                        <p>JSRS Certificate</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
        </Layout>
    )
}

export default Overview