import React from 'react';
import {NextPage} from "next";
import styles from 'styles/Main.module.css';
import Slider from "react-slick";
import {Button, Col, Container, Form, Image, InputGroup, Row} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import NoticeLatest from "component/main/NoticeLatest";
import VideoPlayer from "component/main/VideoPlayer";

const Main:NextPage = () => {
    const settings = {
        dots: false,
        infinite : true,
        speed : 1000,
        slidesToShow : 1,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed : 5000,
        arrows: false,
        fade: true,
    };
    return (
        <div className={styles.mainwrap}>
            <div className={styles.mainslide}>
                <Slider {...settings}>
                    <div className={styles.slideitem}>
                        <div className={styles.imgbox}>
                            <Image src={'/main/main_img1.jpg'} alt={'main-img'}/>
                        </div>
                        <div className={styles.textbox}>
                            <h3>JUNGSAN</h3>
                            <strong>Bolt &amp; Nut Group</strong>
                            <p>혁신과 고객감동으로 세계적 창조기업으로!</p>
                        </div>
                    </div>
                    <div className={styles.slideitem}>
                        <div className={styles.imgbox}>
                            <Image src={'/main/main_img2.jpg'} alt={'main-img'}/>
                        </div>
                        <div className={styles.textbox}>
                            <h3>JUNGSAN</h3>
                            <strong>Bolt &amp; Nut Group</strong>
                            <p>혁신과 고객감동으로 세계적 창조기업으로!</p>
                        </div>
                    </div>
                    <div className={styles.slideitem}>
                        <div className={styles.imgbox}>
                            <Image src={'/main/main_img3.jpg'} alt={'main-img'}/>
                        </div>
                        <div className={styles.textbox}>
                            <h3>JUNGSAN</h3>
                            <strong>Bolt &amp; Nut Group</strong>
                            <p>혁신과 고객감동으로 세계적 창조기업으로!</p>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className={styles.section1}>
                <Container>
                <div className={styles.contentheader}>
                    <h4>사업분야</h4>
                    <p>고객의 성공 파트너 (주)중산기업이 최고의 서비스를 제공하겠습니다.</p>
                </div>
                <div className={styles.contentbody}>
                    <Row>
                        <Col xl={3} xs={12}>
                            <div className={styles.infobox}>
                                <div className={styles.imgbox}>
                                    <Image src={'main/main_business01.png'} alt={'main-img'}/>
                                    <div className={styles.absolutebox}>
                                        <div className={styles.morebox}>
                                            <Link href={''}>
                                                <span className={styles.imgspan}>
                                                    <Image src={'main/more_detail01.svg'} alt={'main-img'}/>
                                                </span>
                                                <span className={styles.textspan}>MORE DETAIL</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.textbox}>
                                    <span>Marine Engine Parts</span>
                                    <p>선박엔진 부품 사업</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} xs={12}>
                            <div className={styles.infobox}>
                                <div className={styles.imgbox}>
                                    <Image src={'main/main_business02.png'} alt={'main-img'}/>
                                <div className={styles.absolutebox}>
                                    <div className={styles.morebox}>
                                        <Link href={''}>
                                                <span className={styles.imgspan}>
                                                    <Image src={'main/more_detail01.svg'} alt={'main-img'}/>
                                                </span>
                                            <span className={styles.textspan}>MORE DETAIL</span>
                                        </Link>
                                    </div>
                                </div>
                                </div>
                                <div className={styles.textbox}>
                                    <span>Plant Parts</span>
                                    <p>플랜트 부품 사업</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} xs={12}>
                            <div className={styles.infobox}>
                                <div className={styles.imgbox}>
                                    <Image src={'main/main_business03.png'} alt={'main-img'}/>
                                    <div className={styles.absolutebox}>
                                        <div className={styles.morebox}>
                                            <Link href={''}>
                                                <span className={styles.imgspan}>
                                                    <Image src={'main/more_detail01.svg'} alt={'main-img'}/>
                                                </span>
                                                <span className={styles.textspan}>MORE DETAIL</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.textbox}>
                                    <span>Industrial Parts</span>
                                    <p>산업설비 부품사업</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} xs={12}>
                            <div className={styles.infobox}>
                                <div className={styles.imgbox}>
                                    <Image src={'main/main_business04.png'} alt={'main-img'}/>
                                    <div className={styles.absolutebox}>
                                        <div className={styles.morebox}>
                                            <Link href={''}>
                                                <span className={styles.imgspan}>
                                                    <Image src={'main/more_detail01.svg'} alt={'main-img'}/>
                                                </span>
                                                <span className={styles.textspan}>MORE DETAIL</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.textbox}>
                                    <span>Electronics Business Sector</span>
                                    <p>전자제품 사업 분야</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                </Container>
            </div>
            <div className={styles.section2}>
                <Container>
                    <div className={styles.headerdownbox}>
                        <Row>
                            <Col xl={6} xs={12} className={'align-self-center'}>
                                <div className={styles.titlebox}>
                                    <h3>
                                        폭넓고 다양한 기계요소의 부품을<br />
                                        생산 공급하는 (주)중산기업
                                    </h3>
                                </div>
                            </Col>
                            <Col xl={6} xs={12}>
                                <Row className={'row-cols-3'}>
                                    <Col>
                                        <div className={styles.downloadbox}>
                                            <div className={styles.imgbox}>
                                                <Image src={'main/main_catalog01.jpg'} alt={'main-img'}
                                                       className={'w-100'}/>
                                                <div className={styles.downbox}>
                                                    <Button className={styles.downbtn} type={'button'}>
                                                        <Link href={''}>
                                                        <span className={styles.textspan}>
                                                            플랜트
                                                        </span>
                                                            <span className={styles.imgspan}>
                                                            <Image src={'main/download.svg'} alt={'main-icon'}/>
                                                        </span>
                                                        </Link>
                                                    </Button>
                                                </div>
                                                <div className={styles.absolutebox}>
                                                    <Link href={''}>
                                                        <span className={styles.imgspan}>
                                                        <Image src={'main/download.svg'} alt={'main-icon'}/>
                                                        </span>
                                                        <span>DOWN LOAD</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className={styles.downloadbox}>
                                            <div className={styles.imgbox}>
                                                <Image src={'main/main_catalog02.jpg'} alt={'main-img'}
                                                       className={'w-100'}/>
                                                <div className={styles.downbox}>
                                                    <Button className={styles.downbtn} type={'button'}>
                                                        <Link href={''}>
                                                        <span className={styles.textspan}>
                                                            엔진
                                                        </span>
                                                            <span className={styles.imgspan}>
                                                            <Image src={'main/download.svg'} alt={'main-icon'}/>
                                                        </span>
                                                        </Link>
                                                    </Button>
                                                </div>
                                                <div className={styles.absolutebox}>
                                                    <Link href={''}>
                                                       <span className={styles.imgspan}>
                                                        <Image src={'main/download.svg'} alt={'main-icon'}/>
                                                        </span>
                                                        <span>DOWN LOAD</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className={styles.downloadbox}>
                                        <div className={styles.imgbox}>
                                                <Image src={'main/main_catalog03.jpg'} alt={'main-img'}
                                                       className={'w-100'}/>
                                                <div className={styles.downbox}>
                                                    <Button className={styles.downbtn} type={'button'}>
                                                        <Link href={''}>
                                                        <span className={styles.textspan}>
                                                            풀림방지솔루션
                                                        </span>
                                                            <span className={styles.imgspan}>
                                                            <Image src={'main/download.svg'} alt={'main-icon'}/>
                                                        </span>
                                                        </Link>
                                                    </Button>
                                                </div>
                                                <div className={styles.absolutebox}>
                                                    <Link href={''}>
                                                       <span className={styles.imgspan}>
                                                        <Image src={'main/download.svg'} alt={'main-icon'}/>
                                                        </span>
                                                        <span>DOWN LOAD</span>
                                                    </Link>
                                                </div>
                                        </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <div className={styles.noticebox}>
                        <div className={styles.noticeheader}>
                            <div className={styles.leftbox}>
                                <h5>공지사항</h5>
                                <p>(주)중산기업의 공지사항을 안내드립니다.</p>
                            </div>
                            <div className={styles.rightbox}>
                                <Link href={''}>
                                    <span className={styles.textspan}>
                                        MORE DETAIL
                                    </span>
                                    <span className={styles.imgspan}>
                                        <Image src={'main/more_detail02.svg'} alt={'main-icon'}/>
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <NoticeLatest/>
                    </div>
                </Container>
            </div>
            <div className={styles.section3}>
                <div className={styles.contentheader}>
                    <h4>생산제품</h4>
                    <p>(주)중산기업의 생산제품을 소개합니다.</p>
                </div>
                <div className={styles.contentbody}>
                    <Container fluid>
                        <Row className={'row-cols-xl-6'}>
                            <Col>
                                <div className={styles.infobox}>
                                    <Link href={''}>
                                        <Image src={'main/main_product01.png'} alt={'main-img'} />
                                        <div className={styles.absolutebox}>
                                            <p>CONNECTING ROD STUD</p>
                                            <span className={styles.iconspan}>
                                                <Image src={'main/more_detail03.svg'} alt={'main-img'} />
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </Col>

                            <Col>
                                <div className={styles.infobox}>
                                    <Link href={''}>
                                        <Image src={'main/main_product02.png'} alt={'main-img'} />
                                        <div className={styles.absolutebox}>
                                            <p>MAIN BEARING STUD</p>
                                            <span className={styles.iconspan}>
                                                <Image src={'main/more_detail03.svg'} alt={'main-img'} />
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </Col>

                            <Col>
                                <div className={styles.infobox}>
                                    <Link href={''}>
                                        <Image src={'main/main_product03.png'} alt={'main-img'} />
                                        <div className={styles.absolutebox}>
                                            <p>
                                                HEAVY HEX BOLT<br/>
                                                (HEXAGON BOLT)<br/>
                                                HEX NUT
                                            </p>
                                            <span className={styles.iconspan}>
                                                <Image src={'main/more_detail03.svg'} alt={'main-img'} />
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </Col>

                            <Col>
                                <div className={styles.infobox}>
                                    <Link href={''}>
                                        <Image src={'main/main_product04.png'} alt={'main-img'} />
                                        <div className={styles.absolutebox}>
                                            <p>C12PT BOLT & NUT</p>
                                            <span className={styles.iconspan}>
                                                <Image src={'main/more_detail03.svg'} alt={'main-img'} />
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </Col>

                            <Col>
                                <div className={styles.infobox}>
                                    <Link href={''}>
                                        <Image src={'main/main_product05.png'} alt={'main-img'} />
                                        <div className={styles.absolutebox}>
                                            <p>HEADER PLUG</p>
                                            <span className={styles.iconspan}>
                                                <Image src={'main/more_detail03.svg'} alt={'main-img'} />
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </Col>

                            <Col>
                                <div className={styles.infobox}>
                                    <Link href={''}>
                                        <Image src={'main/main_product06.png'} alt={'main-img'} />
                                        <div className={styles.absolutebox}>
                                            <p>욕실폰 (JSB-101-A)</p>
                                            <span className={styles.iconspan}>
                                                <Image src={'main/more_detail03.svg'} alt={'main-img'} />
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </Col>

                        </Row>
                        <div className={styles.morebox}>
                            <Button type={'button'} className={styles.morebtn}>
                                <Link href={''}>
                                    <span className={styles.textspan}>
                                        MORE DETAIL
                                    </span>
                                    <span className={styles.imgspan}>
                                        <Image src={'main/more_detail_plus.svg'} alt={'main-img'} />
                                    </span>
                                </Link>
                            </Button>
                        </div>
                    </Container>
                </div>
            </div>
            <div className={styles.section4}>
                <Container>
                    <div className={styles.contentheader}>
                        <h4>
                            <strong>고객의 신뢰</strong>와 더불어<br />
                            <strong>기술과 품질의 자부심</strong>을 키워갑니다.
                        </h4>
                    </div>
                    <div className={styles.contentbody}>
                        <Row>
                            <Col xl={6} xs={12}>
                                <div className={styles.infobox}>
                                    <div className={styles.infoheader}>
                                        <h5>인증서</h5>
                                        <Button type={'button'} className={styles.morebtn}>
                                            <Link href={''}>
                                                <Image src={'main/more_detail_plus.svg'} alt={'main-img'} />
                                            </Link>
                                        </Button>
                                    </div>
                                    <Row>
                                        <Col xl={4} xs={12}>
                                            <div className={styles.imgbox}>
                                                <Image src={'main/certification_img01.jpg'} alt={'main-img'} />
                                                <p>ISO 9001 (DNV.GL)</p>
                                            </div>
                                        </Col>
                                        <Col xl={4} xs={12}>
                                            <div className={styles.imgbox}>
                                                <Image src={'main/certification_img02.jpg'} alt={'main-img'} />
                                                <p>ISO 14001 (DNV.GL)</p>
                                            </div>
                                        </Col>
                                        <Col xl={4} xs={12}>
                                            <div className={styles.imgbox}>
                                                <Image src={'main/certification_img03.jpg'} alt={'main-img'} />
                                                <p>ISO 45001 (DNV.GL)</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xl={6} xs={12}>
                                <div className={styles.infobox}>
                                    <div className={styles.infoheader}>
                                        <h5>확인서</h5>
                                        <Button type={'button'} className={styles.morebtn}>
                                            <Link href={''}>
                                                <Image src={'main/more_detail_plus.svg'} alt={'main-img'} />
                                            </Link>
                                        </Button>
                                    </div>
                                    <Row>
                                        <Col xl={4} xs={12}>
                                            <div className={styles.imgbox}>
                                                <Image src={'main/confirmation_img01.jpg'} alt={'main-img'} />
                                                <p>대통령표창장</p>
                                            </div>
                                        </Col>
                                        <Col xl={4} xs={12}>
                                            <div className={styles.imgbox}>
                                                <Image src={'main/confirmation_img02.jpg'} alt={'main-img'} />
                                                <p>국무총리 표창장</p>
                                            </div>
                                        </Col>
                                        <Col xl={4} xs={12}>
                                            <div className={styles.imgbox}>
                                                <Image src={'main/confirmation_img03.jpg'} alt={'main-img'} />
                                                <p>기업부설연구소인정서</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <div className={styles.section5}>
                <Container>
                    <Row>
                        <Col xl={6} xs={12}>
                            <div className={styles.infobox}>
                                <h4>JUNGSAN ENTERPRISE CO.,Ltd.</h4>
                                <p>(주)중산기업은 언제나 최선을 다합니다.</p>
                                <VideoPlayer videoid={'2L14cQ6XXL8'} width={'520'} height={'300'} thumsrc={'/main/video_img.jpg'} />
                            </div>
                        </Col>
                        <Col xl={6} xs={12}>
                            <div className={styles.inquirybox}>
                                <div className={styles.inquiryheader}>
                                    <h5>문의하기</h5>
                                    <span className={styles.linespan}></span>
                                </div>
                                <div className={styles.inquirybody}>
                                    <InputGroup className={styles.inputbox}>
                                        <Form.Control placeholder={'성명'} type={'text'} />
                                        <Form.Control placeholder={'국가'} type={'text'} />
                                    </InputGroup>
                                    <InputGroup className={styles.inputbox}>
                                        <Form.Control placeholder={'이메일'} type={'text'} />
                                        <Form.Control placeholder={'사업영역 및 연락처'} type={'text'} />
                                    </InputGroup>
                                    <InputGroup className={styles.inputbox}>
                                        <Form.Control placeholder={'세부사항'} type={'text'} as={'textarea'}/>
                                    </InputGroup>
                                    <div className={styles.applybox}>
                                        <InputGroup>
                                            <Form.Check label={'개인정보 보호 방침 동의'} type={'checkbox'} id={'applycheck'} />
                                            <Button type={'button'} className={styles.applybtn}>약관보기</Button>
                                        </InputGroup>
                                        <div className={styles.submitbox}>
                                            <Button type={'submit'}>문의하기</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Main