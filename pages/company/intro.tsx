import React from 'react';
import styles from 'styles/Intro.module.css';
import {NextPage} from "next";
import Layout from "component/common/Layout";
import SubHeader from "component/common/SubHeader";
import {Col, Container, Image, Row} from "react-bootstrap";

const Intro:NextPage = () => {
    return(
        <Layout>
            <SubHeader
                imgsrc={'/sub/sub_img1.jpg'}
                title={'CEO 인사말'}
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
                    <Row>
                        <Col xl={5} xs={12}>
                            <div className={styles.imgbox}>
                                <Image src={'/sub/ceo_img.png'} alt={'sub-img'} />
                            </div>
                        </Col>
                        <Col xl={7} xs={12} className={'align-self-center'}>
                            <div className={styles.textbox}>
                                <h3>
                                    뜨거운 열정으로<br/>
                                    발전에 발전을 거듭해온<br/>
                                    (주)중산기업입니다.
                                </h3>
                                <span className={styles.verticalspan}>CEO MESSAGE</span>
                                <p>
                                    당사는 지난 35년간의 산업용 볼트, 너트를 중심으로 한 기계요소 부품의 생산 노하우를 기반으로<br/>
                                    1998년 새로이 벤처기업으로 창업, 현 울산공장으로의 이전과 함께 중공업분야의 부품 벤처업체로<br/>
                                    발돋음 하게 되었습니다. 이에 다양한 고객의 요구에 대응하기 위한 다품종 소 LOT체제를 구비하고<br/>
                                    특수강재를 사용한 선박엔진, 발전엔진, On&Offshore Facilities, Nuclear Power, Refinery,<br/>
                                    Petrochemical, Ship building, Plant 용 볼트와 너트, 플레이트, 각종의 피팅류 등 특수부품과<br/>
                                    제철설비의 압연Roll용 Neck-Ring, 샤프트, 기타 폭넓고 다양한 기계요소의 부품을 생산 공급하고<br/>
                                    있습니다.
                                </p>
                                <p>
                                    더욱이 품질시스템의 정착을 위하여 2000년 ISO 9001 획득과 ISO 14001, 45001, TS 29001, GOST-R<br/>
                                    인증에 이어 원자력 품질시스템(KEPIC-MN)의 인증, DNV, ABS 선급 열처리 인증과 고리원전품질 등급<br/>
                                    적격업체로 인정을 받아 발전사업부문의 영역을 개척하였습니다.<br/>
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <div className={styles.bottombox}>
                        <p>
                            이러한 안정화된 품질 시스템에 힘입어 해외시장 개척을 위한 마케팅활동을 적극 추진하고 있으며 <span>보다 강화된 품질력을 바탕으로 지속적인 매출증대의 성과</span>를 올리고 있습니다.<br/>
                            이에 만족치 아니하고 국내시장에서의 경쟁력 우위의 확보와 해외의 정보망을 이용한 우수 선진제품을 국산화하기 위한 노력을 경주하고자 연구개발 부문에 있어 국내외에 고도화된 산업화와<br/>
                            기술변이의 흐름을 주시하면서 부설연구소를 통한 핵심첨단부품의 개발을 위한 역량을 펼쳐 가고 있습니다.
                        </p>
                        <p className={'mb-0'}>
                            고객과 사회로부터 존경 받는 기업 가치를 창출할 수 있도록 최선을 다하겠습니다. 항상 중산기업에 아낌없는 사랑과 관심을 가져주시는 여러분께 감사드립니다.
                        </p>
                        <div className={styles.signbox}>
                            <span>CEO 정광수</span>
                            <span>
                                <Image src={'/sub/sign.png'} alt={'sub-img'} />
                            </span>
                        </div>
                    </div>
                </Container>
            </div>
        </Layout>
    )
}

export default Intro