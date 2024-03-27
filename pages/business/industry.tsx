import React from 'react';
import styles from 'styles/Industry.module.css';
import {NextPage} from "next";
import Layout from "component/common/Layout";
import SubHeader from "component/common/SubHeader";
import {Col, Container, Image, Row} from "react-bootstrap";


const Industry:NextPage = () => {
    return (
        <Layout>
            <SubHeader
                imgsrc={'/sub/sub_img2.jpg'}
                title={'산업설비 부품사업'}
                menuitem={[
                    {id : 1, menutitle : '선박엔진 부품사업', href: '/business/ship'},
                    {id : 2, menutitle : '플랜트 부품사업', href: '/business/plant'},
                    {id : 3, menutitle : '산업설비 부품산업', href: '/business/industry'},
                    {id : 4, menutitle : '전자제품 사업분야', href: '/business/electron'},
                    {id : 5, menutitle : '제품사양', href: '/business/product'},
                ]}
            />
            <div className={styles.subwrap}>
                <Container className={styles.container}>
                    <div className={styles.contentheader}>
                        <h3>
                            <strong>비상발전기 , 보일러 , 제철소 압연롤 , 연륙교 철골 구조물<br />
                            기초공사용</strong> 등으로 사용되는 부품
                        </h3>
                        <Row>
                            <Col xl={6} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/industrial_parts01.jpg'} alt={'sub-img'} />
                                </div>
                            </Col>
                            <Col xl={6} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/industrial_parts02.jpg'} alt={'sub-img'} />
                                </div>
                            </Col>
                        </Row>
                        <div className={styles.textbox}>
                            <h4>Plant Parts</h4>
                            <ul>
                                <li>·고객의 요구사항에 따라 다양한 기계적물성 및 형태의 제품 제작이 가능</li>
                                <li>·합금강을 사용하여 제작</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.contentbody}>
                        <Row>
                            <Col xl={2} xs={12}>
                                <div className={styles.titlebox}>
                                    <h5>제품소개</h5>
                                </div>
                            </Col>
                            <Col xl={10} xs={12}>
                                <div className={styles.introbox}>
                                    <Row className={'gy-xl-4 gy-5'}>
                                        <Col xl={4} xs={12}>
                                            <div className={styles.infobox}>
                                                <div className={styles.imgbox}>
                                                    <Image src={'/sub/product01.png'} alt={'sub-img'} />
                                                </div>
                                                <div className={styles.textbox}>
                                                    <strong>CYLINDER COVER STUD</strong>
                                                    <span className={styles.titlespan}>MATERIAL</span>
                                                    <p>
                                                        JIS G4053(SCM435, SCM440, SNCM439) &<br />
                                                        CUSTOMER SPECIFICATION
                                                    </p>
                                                    <span className={styles.titlespan}>DIMENSION</span>
                                                    <p>
                                                        Customer specifications
                                                    </p>
                                                    <span className={styles.titlespan}>RANGE</span>
                                                    <p>
                                                        M48 ~ M120
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={4} xs={12}>
                                            <div className={styles.infobox}>
                                                <div className={styles.imgbox}>
                                                    <Image src={'/sub/product02.png'} alt={'sub-img'} />
                                                </div>
                                                <div className={styles.textbox}>
                                                    <strong>CONNECTING ROD STUD</strong>
                                                    <span className={styles.titlespan}>MATERIAL</span>
                                                    <p>
                                                        JIS G4053(SCM435, SCM440, SNCM439) &<br />
                                                        CUSTOMER SPECIFICATION
                                                    </p>
                                                    <span className={styles.titlespan}>DIMENSION</span>
                                                    <p>
                                                        Customer specifications
                                                    </p>
                                                    <span className={styles.titlespan}>RANGE</span>
                                                    <p>
                                                        1/4
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={4} xs={12}>
                                            <div className={styles.infobox}>
                                                <div className={styles.imgbox}>
                                                    <Image src={'/sub/product03.png'} alt={'sub-img'} />
                                                </div>
                                                <div className={styles.textbox}>
                                                    <strong>WELDED LOCK NUT SET</strong>
                                                    <span className={styles.titlespan}>MATERIAL</span>
                                                    <p>
                                                        JIS G4053(SCM435, SCM440, SNCM439) &<br />
                                                        CUSTOMER SPECIFICATION
                                                    </p>
                                                    <span className={styles.titlespan}>DIMENSION</span>
                                                    <p>
                                                        Customer specifications
                                                    </p>
                                                    <span className={styles.titlespan}>RANGE</span>
                                                    <p>
                                                        M48 ~ M120
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>



                                        <Col xl={4} xs={12}>
                                            <div className={styles.infobox}>
                                                <div className={styles.imgbox}>
                                                    <Image src={'/sub/product04.png'} alt={'sub-img'} />
                                                </div>
                                                <div className={styles.textbox}>
                                                    <strong>STUD & NUT</strong>
                                                    <span className={styles.titlespan}>MATERIAL</span>
                                                    <p>
                                                        B7, B7M, L7, L7M, B8, B8M, B8M CL, 2 A453-660,<br/>
                                                        INCONEL 625, 718, UNS S32750 / S32760<br/>
                                                        MONEL K-400 / K-500
                                                    </p>
                                                    <span className={styles.titlespan}>DIMENSION</span>
                                                    <p>
                                                        ASME B18.31.2,B16.5,IFI136/FIF528
                                                    </p>
                                                    <span className={styles.titlespan}>RANGE</span>
                                                    <p>
                                                        1/4
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={4} xs={12}>
                                            <div className={styles.infobox}>
                                                <div className={styles.imgbox}>
                                                    <Image src={'/sub/product05.png'} alt={'sub-img'} />
                                                </div>
                                                <div className={styles.textbox}>
                                                    <strong>STUD BOLT</strong>
                                                    <span className={styles.titlespan}>MATERIAL</span>
                                                    <p>
                                                        B16, B4B INCONEL 718, INCONEL X-750<br/>
                                                        A453-660, A193-B7, A193-B8M
                                                    </p>
                                                    <span className={styles.titlespan}>DIMENSION</span>
                                                    <p>
                                                        ASME B18.31.2,B16.5,IFI136/FIF528
                                                    </p>
                                                    <span className={styles.titlespan}>RANGE</span>
                                                    <p>
                                                        1/4
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={4} xs={12}>
                                            <div className={styles.infobox}>
                                                <div className={styles.imgbox}>
                                                    <Image src={'/sub/product06.png'} alt={'sub-img'} />
                                                </div>
                                                <div className={styles.textbox}>
                                                    <strong>WELDED LOCK NUT SET</strong>
                                                    <span className={styles.titlespan}>MATERIAL</span>
                                                    <p>
                                                        STAINLESS STEEL, STEEL CARBON
                                                    </p>
                                                    <span className={styles.titlespan}>DIMENSION</span>
                                                    <p>
                                                        ASME B18.2.1/ANSI B18.2.3.6M
                                                    </p>
                                                    <span className={styles.titlespan}>RANGE</span>
                                                    <p>
                                                        1/4&#34;(M5)~6&#34;(M150)
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col xl={4} xs={12}>
                                            <div className={styles.infobox}>
                                                <div className={styles.imgbox}>
                                                    <Image src={'/sub/product07.png'} alt={'sub-img'} />
                                                </div>
                                                <div className={styles.textbox}>
                                                    <strong>
                                                        HEAVY HEX BOLT (HEXAGON BOLT) /<br />
                                                        HEX NUT
                                                    </strong>
                                                    <span className={styles.titlespan}>MATERIAL</span>
                                                    <p>
                                                        B7, B7M, B16, B5, L7, L7M, 20CrMoVTIB4-10<br/>
                                                        A36, A307, 4.6, SS440, S45C, A325, A490 B8<br/>
                                                        CL1&2, B8M CL1&2, B8T, B8C, B6, SS317(L)<br/>
                                                        A453-660, INCONEL 625, 718, INCONEL925,<br/>
                                                        C276, UNS S32760 / S32750, Grade 2 / 5 / 7,<br/>
                                                        C65100, C63000, C61400
                                                    </p>
                                                    <span className={styles.titlespan}>DIMENSION</span>
                                                    <p>
                                                        Customer specifications
                                                    </p>
                                                    <span className={styles.titlespan}>RANGE</span>
                                                    <p>
                                                        3/8&#34;(M12)~&#34;(M75)
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={4} xs={12}>
                                            <div className={styles.infobox}>
                                                <div className={styles.imgbox}>
                                                    <Image src={'/sub/product08.png'} alt={'sub-img'} />
                                                </div>
                                                <div className={styles.textbox}>
                                                    <strong>U-BOLT/HEX NUT/INSOLATION PAD</strong>
                                                    <span className={styles.titlespan}>MATERIAL</span>
                                                    <p>
                                                        B7, B7M, B16, B5, L7, L7M, 20CrMoVTIB4-10<br/>
                                                        A36,A307, 4.6, SS440, S45C, A325, A490 B8<br/>
                                                        CL1&2, B8M CL1&2, B8T, B8C, B6, SS317(L)<br/>
                                                        A453-660, INCONEL 625/ 718, Incoloy 925,<br/>
                                                        C276, UNS S32760 / S32750 Grade 2 / 5 / 7,<br/>
                                                        C65100, C63000, C61400
                                                    </p>
                                                    <span className={styles.titlespan}>DIMENSION</span>
                                                    <p>
                                                        JIS F3022
                                                    </p>
                                                    <span className={styles.titlespan}>RANGE</span>
                                                    <p>
                                                        3/8&#34;(M6)~&#34;(M820)
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={4} xs={12}>
                                            <div className={styles.infobox}>
                                                <div className={styles.imgbox}>
                                                    <Image src={'/sub/product09.png'} alt={'sub-img'} />
                                                </div>
                                                <div className={styles.textbox}>
                                                    <strong>COUPLING BOLT</strong>
                                                    <span className={styles.titlespan}>MATERIAL</span>
                                                    <p>
                                                        JIS G4053(SCM435, SCM440, SNCM439) &<br />
                                                        CUSTOMER SPECIFICATION
                                                    </p>
                                                    <span className={styles.titlespan}>DIMENSION</span>
                                                    <p>
                                                        Customer specifications
                                                    </p>
                                                    <span className={styles.titlespan}>RANGE</span>
                                                    <p>
                                                        M50 ~ M180
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>


                                        <Col xl={4} xs={12}>
                                            <div className={styles.infobox}>
                                                <div className={styles.imgbox}>
                                                    <Image src={'/sub/product10.png'} alt={'sub-img'} />
                                                </div>
                                                <div className={styles.textbox}>
                                                    <strong>
                                                        12PT BOLT & NUT
                                                    </strong>
                                                    <span className={styles.titlespan}>MATERIAL</span>
                                                    <p>
                                                        B16, A437-B4B INCONEL 718 A453-660-A-B,<br />
                                                        B7, B8M
                                                    </p>
                                                    <span className={styles.titlespan}>DIMENSION</span>
                                                    <p>
                                                        Customer specifications
                                                    </p>
                                                    <span className={styles.titlespan}>RANGE</span>
                                                    <p>
                                                        -
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={4} xs={12}>
                                            <div className={styles.infobox}>
                                                <div className={styles.imgbox}>
                                                    <Image src={'/sub/product11.png'} alt={'sub-img'} />
                                                </div>
                                                <div className={styles.textbox}>
                                                    <strong>HEADER PLUG</strong>
                                                    <span className={styles.titlespan}>MATERIAL</span>
                                                    <p>
                                                        A105, A350-LF2, A182-F304L 316L, UNS S31803<br />
                                                        / S32750 / S32760 INCONEL 625, 718, 825
                                                    </p>
                                                    <span className={styles.titlespan}>DIMENSION</span>
                                                    <p>
                                                        ANSI B16.11
                                                    </p>
                                                    <span className={styles.titlespan}>RANGE</span>
                                                    <p>
                                                        -
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={4} xs={12}>
                                            <div className={styles.infobox}>
                                                <div className={styles.imgbox}>
                                                    <Image src={'/sub/product12.png'} alt={'sub-img'} />
                                                </div>
                                                <div className={styles.textbox}>
                                                    <strong>
                                                        ANCHOR BOLT SET<br />
                                                        (FOUNDATION BOLT)
                                                    </strong>
                                                    <span className={styles.titlespan}>MATERIAL</span>
                                                    <p>
                                                        B7, B7M, B16, B5, L7, L7M, L43, B23, A449 A36,<br/>
                                                        A307, 4, A325, F1554 Gr.36 / Gr.55.SS400 B8<br/>
                                                        CL1&2, B8M CL1&2
                                                    </p>
                                                    <span className={styles.titlespan}>DIMENSION</span>
                                                    <p>
                                                        JIS B1178
                                                    </p>
                                                    <span className={styles.titlespan}>RANGE</span>
                                                    <p>
                                                        -
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col xl={4} xs={12}>
                                            <div className={styles.infobox}>
                                                <div className={styles.imgbox}>
                                                    <Image src={'/sub/product13.png'} alt={'sub-img'} />
                                                </div>
                                                <div className={styles.textbox}>
                                                    <strong>
                                                        HEXAGON SOCKET HEAD BOLT
                                                    </strong>
                                                    <span className={styles.titlespan}>MATERIAL</span>
                                                    <p>
                                                        B16, A437-B4B, 10.9, INCONEL 718, A453-660<br/>
                                                        A,B,D, A193-B7, A193-B8M, INCONEL X-625,<br/>
                                                        MONEL K-400 / K-500, UNS S32750 / S32760
                                                    </p>
                                                    <span className={styles.titlespan}>DIMENSION</span>
                                                    <p>
                                                        Customer specifications
                                                    </p>
                                                    <span className={styles.titlespan}>RANGE</span>
                                                    <p>
                                                        -
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={4} xs={12}>
                                            <div className={styles.infobox}>
                                                <div className={styles.imgbox}>
                                                    <Image src={'/sub/product14.png'} alt={'sub-img'} />
                                                </div>
                                                <div className={styles.textbox}>
                                                    <strong>WELD STUD & FERRULE</strong>
                                                    <span className={styles.titlespan}>MATERIAL</span>
                                                    <p>
                                                        A108, SUS304L, B8 A276-316Ti, A276-316L /<br />
                                                        CERAMIC
                                                    </p>
                                                    <span className={styles.titlespan}>DIMENSION</span>
                                                    <p>
                                                        Customer specifications
                                                    </p>
                                                    <span className={styles.titlespan}>RANGE</span>
                                                    <p>
                                                        -
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={4} xs={12}>
                                            <div className={styles.infobox}>
                                                <div className={styles.imgbox}>
                                                    <Image src={'/sub/product15.png'} alt={'sub-img'} />
                                                </div>
                                                <div className={styles.textbox}>
                                                    <strong>
                                                        LOCXELL BOLT&NUT
                                                    </strong>
                                                    <span className={styles.titlespan}>MATERIAL</span>
                                                    <p>
                                                        Customer specifications
                                                    </p>
                                                    <span className={styles.titlespan}>DIMENSION</span>
                                                    <p>
                                                        Customer specifications
                                                    </p>
                                                    <span className={styles.titlespan}>RANGE</span>
                                                    <p>
                                                        -
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col xl={4} xs={12}>
                                            <div className={styles.infobox}>
                                                <div className={styles.imgbox}>
                                                    <Image src={'/sub/product16.png'} alt={'sub-img'} />
                                                </div>
                                                <div className={styles.textbox}>
                                                    <strong>LOCK NUT SPRING INSERTED TYPE</strong>
                                                    <span className={styles.titlespan}>MATERIAL</span>
                                                    <p>
                                                        STAINLESS STEEL, STEEL CARBON
                                                    </p>
                                                    <span className={styles.titlespan}>DIMENSION</span>
                                                    <p>
                                                        Customer specifications
                                                    </p>
                                                    <span className={styles.titlespan}>RANGE</span>
                                                    <p>
                                                        -
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={4} xs={12}>
                                            <div className={styles.infobox}>
                                                <div className={styles.imgbox}>
                                                    <Image src={'/sub/product17.png'} alt={'sub-img'} />
                                                </div>
                                                <div className={styles.textbox}>
                                                    <strong>
                                                        BOLT CAP (THERMOPLASTIC<br />
                                                        RUBBER, ALUMINIUM)
                                                    </strong>
                                                    <span className={styles.titlespan}>MATERIAL</span>
                                                    <p>
                                                        -
                                                    </p>
                                                    <span className={styles.titlespan}>DIMENSION</span>
                                                    <p>
                                                        Customer specifications
                                                    </p>
                                                    <span className={styles.titlespan}>RANGE</span>
                                                    <p>
                                                        1&#34; ~ 4&#34;
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>

                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </Layout>
    )
}

export default Industry