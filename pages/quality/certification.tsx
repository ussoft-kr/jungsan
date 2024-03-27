import React from 'react';
import styles from 'styles/Certification.module.css';
import {NextPage} from "next";
import Layout from "component/common/Layout";
import SubHeader from "component/common/SubHeader";
import {Col, Container, Image, Row} from "react-bootstrap";


const Certification:NextPage = () => {
    return (
        <Layout>
            <SubHeader
                imgsrc={'/sub/sub_img3.jpg'}
                title={'인증서'}
                menuitem={[
                    {id: 1, menutitle: '품질경영 체계', href: '/quality/qm'},
                    {id: 2, menutitle: '인증서', href: '/quality/certification'},
                    {id: 3, menutitle: '생산공정도', href: '/quality/process'},
                ]}
            />
            <div className={styles.subwrap}>
                <Container>
                    <div className={styles.section1}>
                        <h4>
                            <Image src={'/sub/title_icon.png'} alt={'sub-img'}/>
                            인증서
                        </h4>
                        <Row className={'gy-5'}>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/certification01.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>ISO 9001 (DNV)</p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/certification02.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>ISO 14001 (DNV)</p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/certification03.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>ISO 45001 (DNV)</p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/certification04.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>ISO/TS 29001 (DNV)</p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/certification05.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>DNV.GL HEAT TREATMENT</p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/certification06.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>ABS HEAT TREATMENT</p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/certification07.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>GOST-R</p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/certification08.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>KHNP Certificate</p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/certification09.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>POWER PLANT</p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/certification10.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>KC LNG TECH Certificate</p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/certification11.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>KR Certificate for Inner Hole Nut</p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/certification12.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>JSRS Certificate</p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/certification13.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>
                                    Occupational health and Safety<br/>
                                    Management System (KR)
                                </p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/certification14.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>
                                    Quality Management<br/>
                                    System (KR)
                                </p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/certification15.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>KEPIC-MN,SN</p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/certification16.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>
                                    Certificate of<br/>
                                    SINGLE PPM QUALITY
                                </p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/certification17.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>
                                    Environmental Management<br/>
                                    System (KR)
                                </p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/certification18.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>
                                    Process quality certificate<br/>
                                </p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/certification19.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>
                                    KOSHIPA Certificateof Reliability<br/>
                                </p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/certification20-1.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>
                                    Origin certification exporter<br/>
                                    certificate for each item
                                </p>
                            </Col>
                        </Row>
                    </div>
                    <div className={styles.section2}>
                        <h4>
                            <Image src={'/sub/title_icon.png'} alt={'sub-img'}/>
                            확인서
                        </h4>
                        <Row className={'gy-5'}>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/confirmation01.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>대통령 표창장</p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/confirmation02.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>국무총리 표창장</p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/confirmation03.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>
                                    경영혁신형 중소기업(MAIN-BIZ)<br/>
                                    확인서
                                </p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/confirmation04.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>
                                    경영혁신형 중소기업(INNO-BIZ)<br/>
                                    확인서
                                </p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/confirmation05.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>기업부설연구소 인정서</p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/confirmation06.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>부품ㆍ소재전문기업확인서</p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/confirmation07.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>동반성장우수상</p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/confirmation08.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>모범납세자상(기획재정부장관 표창)</p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/confirmation09.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>성과공유기업 확인서</p>
                            </Col>
                            <Col xl={3} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/confirmation10.jpg'} alt={'sub-img'}/>
                                </div>
                                <p>HD현대중공업품질 품질우수협력회사 확인서</p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </Layout>
    )
}

export default Certification