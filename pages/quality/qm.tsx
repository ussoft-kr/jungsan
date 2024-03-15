import React from 'react';
import styles from 'styles/Qm.module.css';
import {NextPage} from "next";
import Layout from "component/common/Layout";
import SubHeader from "component/common/SubHeader";
import {Container, Image} from "react-bootstrap";

const Qm:NextPage = () => {
    return (
        <Layout>
            <SubHeader
                imgsrc={'/sub/sub_img3.jpg'}
                title={'품질경영 체계'}
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
                            QA System
                        </h4>
                        <div className={styles.systembox}>
                            <div className={styles.box}>
                                <div className={styles.elipse}>
                                    <Image src={'/sub/qa_icon1.svg'} alt={'sub-img'}/>
                                </div>
                                <div className={styles.titlebox}>
                                    <h5>업체명</h5>
                                </div>
                                <div className={styles.textbox}>
                                    <div className={styles.boxs}>
                                        <span>Jungsan Enterprise Co., Ltd.</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.elipse}>
                                    <Image src={'/sub/qa_icon2.svg'} alt={'sub-img'}/>
                                </div>
                                <div className={styles.titlebox}>
                                    <h5>품질경영 매뉴얼</h5>
                                </div>
                                <div className={styles.textbox}>
                                    <div className={styles.boxs}>
                                        <strong>문서번호</strong>
                                        <span>JSTQM-100</span>
                                    </div>
                                    <div className={styles.boxs}>
                                        <strong>재정일자</strong>
                                        <span>1998.12.30</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.elipse}>
                                    <Image src={'/sub/qa_icon3.svg'} alt={'sub-img'}/>
                                </div>
                                <div className={styles.titlebox}>
                                    <h5>품질경영 체계</h5>
                                </div>
                                <div className={styles.textbox}>
                                    <div className={styles.boxs}>
                                        <strong>개정번호</strong>
                                        <span>20</span>
                                    </div>
                                    <div className={styles.boxs}>
                                        <strong>페이지</strong>
                                        <span>4/4</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imgbox}>
                            <Image src={'/sub/quality_process01.png'} alt={'sub-img'}/>
                        </div>
                    </div>
                    <div className={styles.section2}>
                        <div className={styles.tablebox}>
                            <table>
                                <caption>
                                        <Image src={'/sub/title_icon.png'} alt={'sub-img'}/>
                                    검사 설비
                                </caption>
                                <thead>
                                <tr>
                                    <th>장비</th>
                                    <th>용량 & 정밀도</th>
                                    <th>Q’TY</th>
                                    <th>장비</th>
                                    <th>용량 & 정밀도</th>
                                    <th className={'border-end-0'}>Q’TY</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th>
                                        CHEMICAL SPECTROMETER<br />
                                        ANALYZER
                                    </th>
                                    <td>0~1008 ㎛</td>
                                    <td>1</td>
                                    <td>OVERHEAD PROJECTOR</td>
                                    <td>0 - 250 mm</td>
                                    <td className={'border-end-0'}>1</td>
                                </tr>
                                <tr>
                                    <th>UNIVERSAL TEST MACHINE</th>
                                    <td>50 Ton</td>
                                    <td>1</td>
                                    <td>PITCH MICROMETER</td>
                                    <td>0 - 175 mm</td>
                                    <td className={'border-end-0'}>9</td>
                                </tr>
                                <tr>
                                    <th>
                                        ROCKWELL HARDNESS<br />
                                        TESTER
                                    </th>
                                    <td>150 kg</td>
                                    <td>2</td>
                                    <td>INSIDE MICROMETER</td>
                                    <td>50 - 1000 mm</td>
                                    <td className={'border-end-0'}>1</td>
                                </tr>
                                <tr>
                                    <th>PROOF LOAD TESTER</th>
                                    <td>490.3 J</td>
                                    <td>1</td>
                                    <td>OUTSIDE MICROMETER</td>
                                    <td>0 - 1000 mm</td>
                                    <td className={'border-end-0'}>78</td>
                                </tr>
                                <tr>
                                    <th>
                                        PORTABLE HARDNESS<br />
                                        TESTER
                                    </th>
                                    <td>0 ℃ ~ ±300 ℃</td>
                                    <td>10</td>
                                    <td>VERNIER CALIPERS</td>
                                    <td>0 - 1500 mm</td>
                                    <td className={'border-end-0'}>42</td>
                                </tr>
                                <tr>
                                    <th>IMPACT TEST MACHINE(JIS)</th>
                                    <td>30 Kg f.m</td>
                                    <td>21</td>
                                    <td>DIGITAL MICROMETER</td>
                                    <td>0 - 300 mm</td>
                                    <td className={'border-end-0'}>3</td>
                                </tr>
                                <tr>
                                    <th>
                                        IMPACTTEST<br />
                                        MACHINE(ASTM)
                                    </th>
                                    <td>30 Kg f.m</td>
                                    <td>1</td>
                                    <td>PLUG GAUGE</td>
                                    <td>M 20 x 2.5P - M 130 x 6.0P</td>
                                    <td className={'border-end-0'}>92</td>
                                </tr>
                                <tr>
                                    <th>
                                        METALLURGICAL<br/>
                                        MICROSCOPE
                                    </th>
                                    <td>PME 3</td>
                                    <td>1</td>
                                    <td>RING GAUGE</td>
                                    <td>M 20 x 2.5P -M 72 x 4.0P</td>
                                    <td className={'border-end-0'}>52</td>
                                </tr>
                                <tr>
                                    <th>
                                        BRINELL HARDNESS<br/>
                                        TESTER
                                    </th>
                                    <td>100/150Kgf</td>
                                    <td>2</td>
                                    <td>PITCH GAUGE</td>
                                    <td>Inch, mm</td>
                                    <td className={'border-end-0'}>8</td>
                                </tr>
                                <tr>
                                    <th>
                                        SURFACE ROUGHNESS<br/>
                                        TESTER
                                    </th>
                                    <td>0~200.0 ㎛</td>
                                    <td>1</td>
                                    <td>R-GAUGE</td>
                                    <td>1 - 7, 1.1~3.0 mm</td>
                                    <td className={'border-end-0'}>5</td>
                                </tr>
                                <tr>
                                    <th>CYLINDER GAUGE</th>
                                    <td>10 - 400 mm</td>
                                    <td>14</td>
                                    <td>VIDEO METER</td>
                                    <td>X 7</td>
                                    <td className={'border-end-0'}>1</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Container>
            </div>
        </Layout>
    )
}

export default Qm