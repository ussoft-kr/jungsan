import React from 'react';
import styles from '@/styles/Electron.module.css';
import {NextPage} from "next";
import Layout from "@/component/common/Layout";
import SubHeader from "@/component/common/SubHeader";
import {Col, Container, Image, Nav, Row, Tab} from "react-bootstrap";

const Electron:NextPage = () => {
    return (
        <Layout>
            <SubHeader
                imgsrc={'/sub/sub_img2.jpg'}
                title={'전자제품 부품사업'}
                menuitem={[
                    {id : 1, menutitle : '선박엔진 부품사업', href: '/business/ship'},
                    {id : 2, menutitle : '플랜트 부품사업', href: '/business/plant'},
                    {id : 3, menutitle : '산업설비 부품산업', href: '/business/industry'},
                    {id : 4, menutitle : '전자제품 사업분야', href: '/business/electron'},
                    {id : 5, menutitle : '제품사양', href: '/business/product'},
                ]}
            />
            <div className={styles.subwrap}>
                <div className={styles.contentheader}>
                    <Container>
                        <h3>
                            <strong>주방 TV, 욕실폰</strong> 전자제품 사업
                        </h3>
                        <Row>
                            <Col xl={6} xs={12}>
                                <div className={styles.infobox}>
                                    <div className={styles.imgbox}>
                                        <Image src={'/sub/kitchen.png'} alt={'sub-img'} />
                                    </div>
                                    <div className={styles.textbox}>
                                        <h4>주방 TV</h4>
                                        <p>
                                            주방에서 일을 하며 TV 시청과 라디오 청취 및<br />
                                            전화/도어폰/공동현관/경비실 통화를 할 수 있습니다.
                                        </p>
                                        <dl>
                                            <dt>제품특징</dt>
                                            <dd>· 고화질 디지털 방송을 선명한 화면으로 시청 가능합니다.</dd>
                                            <dd>· 월패드와 연동하여 방문자 확인 및 문열림을 제어할 수 있습니다.</dd>
                                            <dd>· 선명한 음질의 라디오 청취가 가능합니다.</dd>
                                            <dd>· 사진앨범/MP3/동영상 등 멀티미디어 재생기능이 있습니다.</dd>
                                            <dd>· 시간표시 및 알람 기능이 있습니다.</dd>
                                            <dd>· 풀터치스크린을 이용하여 주방 TV폰을 구동합니다.</dd>
                                        </dl>
                                    </div>
                                </div>
                            </Col>

                            <Col xl={6} xs={12}>
                                <div className={styles.infobox}>
                                    <div className={styles.imgbox}>
                                        <Image src={'/sub/bathroom.png'} alt={'sub-img'} />
                                    </div>
                                    <div className={styles.textbox}>
                                        <h4>욕실폰</h4>
                                        <p>
                                            동체감지 센서를 내장하여 욕실폰 조명이 가능하며 욕실에서<br />
                                            전화/도어폰/공동현관/경비실 통화를 할 수 있습니다.
                                        </p>
                                        <dl>
                                            <dt>제품특징</dt>
                                            <dd>· 내장된 센서로 동체를 감지하여 욕실폰 간접조명 기능을 제공합니다.</dd>
                                            <dd>· 월패드와 연동하여 도어폰/공동현관/경비실 통화를 할 수 있습니다.</dd>
                                            <dd>· 시간표시 및 통화음량 조절기능이 있습니다.</dd>
                                            <dd>· 비상시 버튼을 누르면 경비실로 비상통보가 가능합니다.</dd>
                                        </dl>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={styles.contentbody}>
                    <Container>
                        <Row>
                            <Col xl={2} xs={12}>
                                <div className={styles.titlebox}>
                                    <h5>제품소개</h5>
                                </div>
                            </Col>
                            <Col xl={10} xs={12}>
                                <div className={styles.tabbox}>
                                    <Tab.Container id="left-tabs-example" defaultActiveKey="tvtouch10.1">
                                                <Nav variant="pills">
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="tvtouch10.1">주방용 터치스크린 TV폰 10.1&#34;</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="tvphone10.1">주방용 TV폰 10.1&#34;</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="bathroomphone">욕실폰</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="bathroomradio">주방라디오폰</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="tvtouch10.1">
                                                        <div className={styles.tabcontentbox}>
                                                            <div className={styles.tabheader}>
                                                                <span className={styles.shotspan}>01</span>
                                                                <h5>주방용 터치스크린 TV폰 10.1&#34;</h5>
                                                            </div>
                                                            <div className={styles.section1}>
                                                                <h6>제품명 : JST-210 SERIES</h6>
                                                                <Image src={'/sub/electronic_products01-1.png'}
                                                                       alt={'sub-img'}/>
                                                                <span className={styles.titlespan}>제품특징</span>
                                                                <div className={styles.textbox}>
                                                                    <ul>
                                                                        <li>· 영상 및 통화 기능</li>
                                                                        <li>· 현관, 로비, 경비실, 문열림 및 전화 수신</li>
                                                                        <li>· TV 및 라디오 기능 : 다각도 TV시청 스테레오 FM 라디오 청취 자동
                                                                            채널 기능
                                                                        </li>
                                                                        <li>· 멀티미디어 기능 : 동영상, 전자앨범, MP3, 요리백과</li>
                                                                        <li>· 편리기능 : 시간 표시, 시간 알람, 리모컨, 풀터치 방식</li>
                                                                        <li>· 월패트 연동기능 RS-485(RJ-45)</li>
                                                                    </ul>
                                                                </div>
                                                                <span className={styles.titlespan}>제품사양</span>
                                                                <div className={styles.textbox}>
                                                                    <ul>
                                                                        <li>· 재질 : ABS 수지</li>
                                                                        <li>· 색상 : WHITE, BLACK(MIRROR)</li>
                                                                        <li>· 모니터사양 : 오픈타입, 윈도우타입</li>
                                                                        <li>· LCD : 10.1”TFT LCD</li>
                                                                        <li>· LED 색상 : WHITE, RED, BLUE, ORANGE</li>
                                                                        <li>· 해상도 : 1024×600</li>
                                                                        <li>· 입력전원 : AC 100~240V / 50~60Hz</li>
                                                                        <li>· 온도 : 0~40℃· 습도 : 90% 이하(상대습도)</li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li>· TV 수신방식 : NTSC-M, ATSC</li>
                                                                        <li>· TV 수신채널 : VFH 2~13CH/UHF 14~69CH/유선
                                                                            2~125CH
                                                                        </li>
                                                                        <li>· FM 라디오 : 87.0~108.0MHz</li>
                                                                        <li>· 스피커 출력 : 3W×3W 스테레오</li>
                                                                        <li>· 돌비 유무 : 유</li>
                                                                        <li>· 외형 사이즈</li>
                                                                        <li>- 본체 : 270(W)×37(H)×247(D)(mm)</li>
                                                                        <li>- 모니터 : 270(W)×13(H)×165(D)(mm)</li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <div className={styles.section2}>
                                                                <h6>제품명 : JST-211</h6>
                                                                <Image src={'/sub/electronic_products01-2.png'}
                                                                       alt={'sub-img'}/>
                                                                <span className={styles.titlespan}>제품특징</span>
                                                                <div className={styles.textbox}>
                                                                    <ul>
                                                                        <li>· 10.1형 TFT LCD(1024×600) / Screen Touch
                                                                        </li>
                                                                        <li>· 디지털 TV기능(OSD, EPG), 화면대기모드 시 시계표시 기능</li>
                                                                        <li>· 전면 시계 및 핫키(통화, 문열림) 적용</li>
                                                                        <li>· 모니터 조절 기능(모니터 전, 후, 좌, 우 조절)</li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li>· 시야각 : 좌 70˚/우 70˚/상 70˚/하 50˚</li>
                                                                        <li>· 홈오토 연동으로 방문자 확인 및 문열림 기능</li>
                                                                        <li>· 동영상, 전자앨범, MP3 Play, 디지털 라디오, 전화수신 기능</li>
                                                                        <li>· 리모컨 제어, 요리백과 기능</li>
                                                                    </ul>
                                                                </div>
                                                                <span className={styles.titlespan}>제품사양</span>
                                                                <div className={styles.textbox}>
                                                                    <ul>
                                                                        <li>· 재질 : ABS 수지</li>
                                                                        <li>· 색상 : WHITE, BLACK(MIRROR)</li>
                                                                        <li>· 모니터사양 : 오픈타입, 윈도우타입</li>
                                                                        <li>· LCD : 10.1”TFT LCD</li>
                                                                        <li>· LED 색상 : WHITE, RED, BLUE, ORANGE</li>
                                                                        <li>· 해상도 : 1024×600</li>
                                                                        <li>· 입력전원 : AC 100~240V / 50~60Hz</li>
                                                                        <li>· 온도 : 0~40℃· 습도 : 90% 이하(상대습도)</li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li>· TV 수신방식 : NTSC-M, ATSC</li>
                                                                        <li>· TV 수신채널 : VFH 2~13CH/UHF 14~69CH/유선
                                                                            2~125CH
                                                                        </li>
                                                                        <li>· FM 라디오 : 87.0~108.0MHz</li>
                                                                        <li>· 스피커 출력 : 3W×3W 스테레오</li>
                                                                        <li>· 돌비 유무 : 유</li>
                                                                        <li>· 외형 사이즈</li>
                                                                        <li>- 본체 : 270(W)×37(H)×247(D)(mm)</li>
                                                                        <li>- 모니터 : 270(W)×13(H)×165(D)(mm)</li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="tvphone10.1">
                                                        2
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="bathroomphone">
                                                        3
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="bathroomradio">
                                                        4
                                                    </Tab.Pane>
                                                </Tab.Content>

                                    </Tab.Container>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </Layout>
    )
}

export default Electron