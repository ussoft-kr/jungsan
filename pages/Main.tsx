import React, {ChangeEvent, useState} from 'react';
import {NextPage} from "next";
import styles from 'styles/Main.module.css';
import Slider from "react-slick";
import {Button, Col, Container, Form, Image, InputGroup, Row} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import VideoPlayer from "component/main/VideoPlayer";
import ProductSlider from "../component/main/ProductSlider";
import NewsLatest from "../component/main/NewsLatest";
import ApplyModal from "../component/inquiry/ApplyModal";
import axios from "axios";

const Main:NextPage = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isAgreed, setIsAgreed] = useState(false);
    const [inquiryname, setInquiryName] = useState('');
    const [inquiryemail, setInquiryEmail] = useState('');
    const [inquirycontury, setInquiryContury] = useState('');
    const [inquirycontent, setInquiryContent] = useState('');



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

    const formatPhoneNumber = (value: string): string => {
        const cleanedValue = value.replace(/\D+/g, ""); // Remove all non-digits
        const match = cleanedValue.match(/^(\d{3})(\d{3,4})(\d{4})$/);
        if (match) {
            return `${match[1]}-${match[2]}-${match[3]}`;
        }
        return value;
    };


    const handlePhoneNumberChange = (e : ChangeEvent<HTMLInputElement>) => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        setPhoneNumber(formattedPhoneNumber);
    };

    const handleAgreementChange =  (e : ChangeEvent<HTMLInputElement>) => setIsAgreed(e.target.checked);

    const handleSubmit = async (e : ChangeEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (!isAgreed) {
            alert('개인정보 수집 및 이용에 동의하셔야 합니다.');
            return;
        }

        const formData = new FormData();

        formData.append('inquiryname', inquiryname);
        formData.append('inquiryemail', inquiryemail);
        formData.append('phoneNumber', phoneNumber);
        formData.append('inquirycontury',inquirycontury);
        formData.append('inquirycontent', inquirycontent);
        formData.append('inquirystats', '이 문의는 메인페이지에서 작성되었습니다.');
        try {
            await axios.post('/api/inquiry/post', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('문의하기가 접수되었습니다.');
            window.location.reload();
        } catch (error) {
            alert('문의하기가 실패하였습니다.')
        }
    }

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
            <NewsLatest/>
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
                                                <Link href={'/business/ship'}>
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
                                                <Link href={'/business/plant'}>
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
                                                <Link href={'/business/industry'}>
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
                                                <Link href={'/business/electron'}>
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

            <div className={styles.section3}>
                <div className={styles.contentheader}>
                    <h4>생산제품</h4>
                    <p>(주)중산기업의 생산제품을 소개합니다.</p>
                </div>
                <ProductSlider/>
            </div>
            <div className={styles.section2}>
                <Container>
                    <div className={styles.headerdownbox}>
                        <Row>
                            <Col xl={6} xs={12} className={'align-self-center'}>
                                <div className={styles.titlebox}>
                                    <h3>
                                        폭넓고 다양한 기계요소의 부품을<br/>
                                        생산 공급하는 (주)중산기업
                                    </h3>
                                </div>
                            </Col>
                            <Col xl={6} xs={12}>
                                <Row className={'row-cols-3 justify-content-end'}>
                                    <Col>
                                        <div className={styles.downloadbox}>
                                            <div className={styles.imgbox}>
                                                <Image src={'main/main_catalog01.jpg'} alt={'main-img'}
                                                       className={'w-100'}/>
                                                <div className={styles.downbox}>
                                                    <Button className={styles.downbtn} type={'button'}>
                                                        <Link href={''}>
                                                        <span className={styles.textspan}>
                                                            플랜트 & 엔진
                                                        </span>
                                                            <span className={styles.imgspan}>
                                                            <Image src={'main/download.svg'} alt={'main-icon'}/>
                                                        </span>
                                                        </Link>
                                                    </Button>
                                                </div>
                                                <div className={styles.absolutebox}>
                                                    <Link href={'/data/download/jungsan ca_kr web out.pdf'} target="_blank"
                                                          rel="noopener noreferrer" download>
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
                                                    <Link href={'/data/download/LOCXELL_KOR.pdf'} target="_blank"
                                                          rel="noopener noreferrer" download>
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
                </Container>
            </div>
            <div className={styles.section4}>
                <Container>
                    <div className={styles.contentheader}>
                        <h4>
                            <strong>고객의 신뢰</strong>와 더불어<br/>
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
                                            <Link href={'/quality/certification'}>
                                                <Image src={'main/more_detail_plus.svg'} alt={'main-img'}/>
                                            </Link>
                                        </Button>
                                    </div>
                                    <Row>
                                        <Col xl={4} xs={12}>
                                            <div className={styles.imgbox}>
                                                <Image src={'main/certification_img01.jpg'} alt={'main-img'}/>
                                                <p>ISO 9001 (DNV.GL)</p>
                                            </div>
                                        </Col>
                                        <Col xl={4} xs={12}>
                                            <div className={styles.imgbox}>
                                                <Image src={'main/certification_img02.jpg'} alt={'main-img'}/>
                                                <p>ISO 14001 (DNV.GL)</p>
                                            </div>
                                        </Col>
                                        <Col xl={4} xs={12}>
                                            <div className={styles.imgbox}>
                                                <Image src={'main/certification_img03.jpg'} alt={'main-img'}/>
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
                                            <Link href={'/quality/certification'}>
                                                <Image src={'main/more_detail_plus.svg'} alt={'main-img'}/>
                                            </Link>
                                        </Button>
                                    </div>
                                    <Row>
                                        <Col xl={4} xs={12}>
                                            <div className={styles.imgbox}>
                                                <Image src={'main/confirmation_img01.jpg'} alt={'main-img'}/>
                                                <p>대통령표창장</p>
                                            </div>
                                        </Col>
                                        <Col xl={4} xs={12}>
                                            <div className={styles.imgbox}>
                                                <Image src={'main/confirmation_img02.jpg'} alt={'main-img'}/>
                                                <p>국무총리 표창장</p>
                                            </div>
                                        </Col>
                                        <Col xl={4} xs={12}>
                                            <div className={styles.imgbox}>
                                                <Image src={'main/confirmation_img03.jpg'} alt={'main-img'}/>
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
                                <VideoPlayer videoid={'https://player.vimeo.com/video/922803402?h=008b8eab25'}
                                             width={'520'} height={'300'} thumsrc={'/main/video_img.jpg'}/>
                            </div>
                        </Col>
                        <Col xl={6} xs={12}>
                            <div className={styles.inquirybox}>
                                <div className={styles.inquiryheader}>
                                    <h5>문의하기</h5>
                                    <span className={styles.linespan}></span>
                                </div>
                                <div className={styles.inquirybody}>
                                    <Form onSubmit={handleSubmit}>
                                        <InputGroup className={styles.inputbox}>
                                            <Form.Control
                                                placeholder={'성명'}
                                                type={'text'}
                                                value={inquiryname}
                                                onChange={e => setInquiryName(e.target.value)}
                                                required
                                                name={'inquiryname'}
                                            />
                                            <Form.Control
                                                placeholder={'국가'}
                                                type={'text'}
                                                value={inquirycontury}
                                                onChange={e => setInquiryContury(e.target.value)}
                                                required
                                                name={'inquirycontury'}
                                            />
                                        </InputGroup>
                                        <InputGroup className={styles.inputbox}>
                                            <Form.Control
                                                placeholder={'이메일'}
                                                type={'text'}
                                                required
                                                value={inquiryemail}
                                                onChange={e => setInquiryEmail(e.target.value)}
                                                name={'inquiryemail'}
                                            />
                                            <Form.Control
                                                placeholder={'연락처'}
                                                type={'text'}
                                                value={phoneNumber}
                                                onChange={handlePhoneNumberChange}
                                                required
                                                name={'phoneNumber'}
                                            />
                                        </InputGroup>
                                        <InputGroup className={styles.inputbox}>
                                            <Form.Control
                                                placeholder={'세부사항'}
                                                type={'text'}
                                                as={'textarea'}
                                                name={'inquirycontent'}
                                                value={inquirycontent}
                                                onChange={e => setInquiryContent(e.target.value)}
                                                required
                                            />
                                        </InputGroup>
                                        <div className={styles.applybox}>
                                            <InputGroup className={'align-items-center'}>
                                                <Form.Check
                                                    label={'개인정보 보호 방침 동의'}
                                                    type={'checkbox'}
                                                    id={'applycheck'}
                                                    checked={isAgreed}
                                                    onChange={handleAgreementChange}
                                                />
                                                <ApplyModal/>
                                            </InputGroup>
                                            <div className={styles.submitbox}>
                                                <Button type={'submit'}>문의하기</Button>
                                            </div>
                                        </div>
                                    </Form>
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