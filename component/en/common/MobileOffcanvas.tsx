import React, {useState} from 'react';
import styles from 'styles/Layout.module.css';
import {Accordion, Button, Image, Offcanvas} from "react-bootstrap";
import Link from "next/link";

function MobileOffcanvas() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={styles.mobileoffcanvasbox}>
            <Button type={'button'} onClick={handleShow} className={styles.togglebtn}>
                <Image src={'/main/sitemap_bl.svg'} alt={'mobile-icon'} />
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header closeButton className={styles.mobileoffcanvasheader}>
                    <Offcanvas.Title>
                        <Image src={'/main/header_logo_col.png'} alt={'logo'} className={styles.normalimg} />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={styles.mobileoffcanvasbody}>
                    <div className={styles.mobilemenubox}>
                        <Accordion className={styles.mobileacc}>
                            <Accordion.Item eventKey="0" className={styles.mobileaccitem}>
                                <Accordion.Header className={styles.mobileaccheader}>회사소개</Accordion.Header>
                                <Accordion.Body className={styles.mobileaccbody}>
                                    <div className={styles.mobileaccmenubox}>
                                        <dl>
                                            <dd>
                                                <Link href={'/company/intro'}>
                                                    CEO 인사말
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link href={'/company/overview'}>
                                                    회사개요
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link href={'/company/motto'}>
                                                    사훈 및 경영방침
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link href={'/company/history'}>
                                                    연혁
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link href={'/company/organization'}>
                                                    조직도
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link href={'/company/location'}>
                                                    오시는길
                                                </Link>
                                            </dd>
                                        </dl>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1" className={styles.mobileaccitem}>
                                <Accordion.Header className={styles.mobileaccheader}>사업소개</Accordion.Header>
                                <Accordion.Body className={styles.mobileaccbody}>
                                    <div className={styles.mobileaccmenubox}>
                                        <dl>
                                            <dd>
                                                <Link href={'/business/ship'}>
                                                    선박엔진 부품사업
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link href={'/business/plant'}>
                                                    플랜트 부품사업
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link href={'/business/industry'}>
                                                    산업설비 부품산업
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link href={'/business/electron'}>
                                                    전자제품 사업분야
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link href={'/business/product'}>
                                                    제품사양
                                                </Link>
                                            </dd>
                                        </dl>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2" className={styles.mobileaccitem}>
                                <Accordion.Header className={styles.mobileaccheader}>품질경영</Accordion.Header>
                                <Accordion.Body className={styles.mobileaccbody}>
                                    <div className={styles.mobileaccmenubox}>
                                        <dl>
                                            <dd>
                                                <Link href={'/quality/qm'}>
                                                    품질경영 체계
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link href={'/quality/certification'}>
                                                    인증서
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link href={'/quality/process'}>
                                                    생산공정도
                                                </Link>
                                            </dd>
                                        </dl>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="3" className={styles.mobileaccitem}>
                                <Accordion.Header className={styles.mobileaccheader}>커뮤니티</Accordion.Header>
                                <Accordion.Body className={styles.mobileaccbody}>
                                    <div className={styles.mobileaccmenubox}>
                                        <dl>
                                            <dd>
                                                <Link href={'/board/notice'}>
                                                    회사소식
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link href={'/board/technic'}>
                                                    기술자료
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link href={'/community/catalog'}>
                                                    카탈로그
                                                </Link>
                                            </dd>
                                        </dl>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4" className={styles.mobileaccitem}>
                                <Accordion.Header className={styles.mobileaccheader}>문의하기</Accordion.Header>
                                <Accordion.Body className={styles.mobileaccbody}>
                                    <div className={styles.mobileaccmenubox}>
                                        <dl>
                                            <dd>
                                                <Link href={'/inquiry'}>
                                                    문의하기
                                                </Link>
                                            </dd>
                                        </dl>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>


                        </Accordion>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default MobileOffcanvas