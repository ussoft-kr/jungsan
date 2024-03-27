import React, {ChangeEvent, useState} from 'react';
import styles from 'styles/Inquiry.module.css';
import {NextPage} from "next";
import Layout from "component/common/Layout";
import SubHeader from "component/common/SubHeader";
import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import ApplyModal from "component/inquiry/ApplyModal";
import axios from "axios";




const Inquiry:NextPage = () => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [isAgreed, setIsAgreed] = useState(false);
    const [inquiryname, setInquiryName] = useState('');
    const [inquiryemail, setInquiryEmail] = useState('');
    const [inquirycontury, setInquiryContury] = useState('');
    const [inquirybusiness, setInquiryBusiness] = useState('');
    const [inquirycontent, setInquiryContent] = useState('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

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


    // 파일 선택 이벤트 핸들러
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null; // 사용자가 선택한 첫 번째 파일

        if (file) {
            if (file.size > 10 * 1024 * 1024) {
                alert('파일 용량이 너무 큽니다. 최대 10MB까지 가능합니다.');
                e.target.value = '';
                return;
            }
        }

        setSelectedFile(file);
    };

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
        formData.append('inquirybusiness', inquirybusiness);
        formData.append('inquirycontent', inquirycontent);
        formData.append('inquirystats', '이 문의는 문의하기 페이지에서 작성되었습니다.');
        if (selectedFile) {
            formData.append('file', selectedFile);
        }
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

    const handleAgreementChange =  (e : ChangeEvent<HTMLInputElement>) => setIsAgreed(e.target.checked);

    return (
        <Layout>
            <SubHeader
                imgsrc={'/sub/sub_img5.jpg'}
                title={'문의하기'}
                menuitem={[
                    {id: 1, menutitle: '문의하기', href: '/inquiry'},
                ]}
            />
            <div className={styles.subwrap}>
                <Container className={styles.container}>
                    <div className={styles.contentheader}>
                        <h3 className={'d-none d-xl-block d-lg-block d-md-block d-sm-block'}>(주)중산기업은 <span>고객 만족을 위한 원활한 소통</span>을 진행합니다.</h3>
                        <h3 className={'d-block d-xl-none d-lg-none d-md-none d-sm-none'}>(주)중산기업은 <span>고객 만족을 위한 <br />원활한 소통</span>을 진행합니다.</h3>
                    </div>
                    <div className={styles.inquiryinfobox}>
                        <ul>
                            <li>
                                <span className={styles.imgspan}>
                                    <Image src={'/sub/inquiry_address.svg'} alt={'sub-icon'}/>
                                </span>
                                <span className={styles.textspan}>44956 울산광역시 울주군 삼동면 암리 3길 25</span>
                            </li>
                            <li>
                                <span className={styles.imgspan}>
                                    <Image src={'/sub/inquiry_tel.svg'} alt={'sub-icon'}/>
                                </span>
                                <span className={styles.textspan}>+82-(0)52-254-3290~4</span>
                            </li>
                            <li>
                                <span className={styles.imgspan}>
                                    <Image src={'/sub/inquiry_fax.svg'} alt={'sub-icon'}/>
                                </span>
                                <span className={styles.textspan}>+82-(0)52-254-3295</span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.inquirybox}>
                        <Form onSubmit={handleSubmit}>
                            <Row className={'gy-5'}>
                                <Col xl={12} xs={12}>
                                    <div className={styles.formbox}>
                                        <label htmlFor={'inquiryname'}>성함</label>
                                        <Form.Control
                                            type={'text'}
                                            name={'inquiryname'}
                                            placeholder={'성함을 입력해주세요'}
                                            value={inquiryname}
                                            onChange={e => setInquiryName(e.target.value)}
                                            required
                                        />
                                    </div>
                                </Col>
                                <Col xl={6} xs={12}>
                                    <div className={styles.formbox}>
                                        <label htmlFor={'inquiryemail'}>이메일</label>
                                        <Form.Control
                                            type={'text'}
                                            name={'inquiryemail'}
                                            placeholder={'이메일을 입력해주세요'}
                                            required
                                            value={inquiryemail}
                                            onChange={e => setInquiryEmail(e.target.value)}
                                        />
                                    </div>
                                </Col>
                                <Col xl={6} xs={12}>
                                    <div className={styles.formbox}>
                                        <label htmlFor={'inquirytel'}>연락처</label>
                                        <Form.Control
                                            type={'text'}
                                            name={'phoneNumber'}
                                            placeholder={'연락처를 입력해주세요'}
                                            value={phoneNumber}
                                            onChange={handlePhoneNumberChange}
                                            required
                                        />
                                    </div>
                                </Col>
                                <Col xl={6} xs={12}>
                                    <div className={styles.formbox}>
                                        <label htmlFor={'inquirycontury'}>국가명</label>
                                        <Form.Control
                                            type={'text'}
                                            name={'inquirycontury'}
                                            placeholder={'국가명을 입력해주세요'}
                                            value={inquirycontury}
                                            onChange={e => setInquiryContury(e.target.value)}
                                            required
                                        />
                                    </div>
                                </Col>
                                <Col xl={6} xs={12}>
                                    <div className={styles.formbox}>
                                        <label htmlFor={'inquirybusiness'}>사업분야</label>
                                        <Form.Control
                                            type={'text'}
                                            name={'inquirybusiness'}
                                            placeholder={'사업분야를 입력해주세요'}
                                            value={inquirybusiness}
                                            onChange={e => setInquiryBusiness(e.target.value)}
                                            required
                                        />
                                    </div>
                                </Col>
                                <Col xl={12} xs={12}>
                                    <div className={styles.formbox}>
                                        <label htmlFor={'inquirycontent'}>문의사항</label>
                                        <Form.Control
                                            as={'textarea'}
                                            placeholder={'문의사항을 입력해주세요'}
                                            name={'inquirycontent'}
                                            value={inquirycontent}
                                            onChange={e => setInquiryContent(e.target.value)}
                                            required
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <div className={styles.filebox}>
                                <Form.Group >
                                    <Form.Label htmlFor={'inquiryfile'}>첨부파일</Form.Label>
                                    <Form.Control type="file" id={'inquiryfile'} onChange={handleFileChange} />
                                </Form.Group>
                            </div>
                            <div className={styles.applybox}>
                                <div className={styles.checkbox}>
                                    <Form.Check
                                        type={'checkbox'}
                                        label={'개인정보수집 및 이용에 동의합니다.'}
                                        id={'applycheck'}
                                        checked={isAgreed}
                                        onChange={handleAgreementChange}
                                    />
                                </div>
                                <div className={styles.applyview}>
                                    <ApplyModal />
                                </div>
                            </div>
                            <div className={styles.submitbox}>
                                <Button type={'submit'}>문의등록</Button>
                            </div>
                        </Form>
                    </div>
                </Container>
            </div>
        </Layout>
    )
}

export default Inquiry