import React from 'react';
import styles from 'styles/Process.module.css';
import {NextPage} from "next";
import Layout from "component/common/Layout";
import SubHeader from "component/common/SubHeader";
import {Container, Image} from "react-bootstrap";


const Process:NextPage = () => {
    return (
        <Layout>
            <SubHeader
                imgsrc={'/sub/sub_img3.jpg'}
                title={'생산공정도'}
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
                            생산 과정
                        </h4>
                        <div className={styles.imgbox}>
                            <Image src={'/sub/quality_process02.png'} alt={'sub-img'}/>
                        </div>
                        <h4>
                            <Image src={'/sub/title_icon.png'} alt={'sub-img'}/>
                            제작 공정도
                        </h4>
                        <div className={styles.imgbox}>
                            <Image src={'/sub/quality_process03.png'} alt={'sub-img'}/>
                        </div>
                    </div>
                    <div className={styles.section2}>
                        <h4>
                            <Image src={'/sub/title_icon.png'} alt={'sub-img'}/>
                            제조 설비
                        </h4>
                        <div className={styles.tablebox}>
                            <table>
                                <caption>
                                    MAIN FACILITIES
                                </caption>
                                <thead>
                                <tr>
                                    <th>장비</th>
                                    <th>용량</th>
                                    <th>Q’TY</th>
                                    <th>장비</th>
                                    <th>용량</th>
                                    <th className={styles.bottomth}>Q’TY</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th>
                                        Band Saw<br/>
                                        CNC Band Saw
                                    </th>
                                    <td>400a/350/330/300a</td>
                                    <td>4</td>
                                    <th>Marking Machine</th>
                                    <td>Ø10 ~ Ø100</td>
                                    <td className={styles.bottomtd}>4</td>
                                </tr>
                                <tr>
                                    <th>CIRCULAR Saw</th>
                                    <td>P-150B/P-65B/CK3-125</td>
                                    <td>3</td>
                                    <th>Press</th>
                                    <td>200Ton/50Ton</td>
                                    <td className={styles.bottomtd}>2</td>
                                </tr>
                                <tr>
                                    <th>Chamfering M/C</th>
                                    <td>Ø10 ~ Ø100</td>
                                    <td>5</td>
                                    <th>Lathe</th>
                                    <td>Ø 19 ~ Ø 32</td>
                                    <td className={styles.bottomtd}>7</td>
                                </tr>
                                <tr>
                                    <th>Thread Rolling M/C</th>
                                    <td>100/60/50/40/30/20 Tons</td>
                                    <td>7</td>
                                    <th>CNC Lathe</th>
                                    <td>Lynx 200</td>
                                    <td className={styles.bottomtd}>27</td>
                                </tr>
                                <tr>
                                    <th>Hydraulic Bending M/C</th>
                                    <td>50/150 Tons</td>
                                    <td>2</td>
                                    <th>Bench Lathe</th>
                                    <td>-</td>
                                    <td className={styles.bottomtd}>4</td>
                                </tr>
                                <tr>
                                    <th>Friction Press</th>
                                    <td>150 Tons</td>
                                    <td>1</td>
                                    <th>Pit Furnace</th>
                                    <td>200~1,100 ℃</td>
                                    <td className={styles.bottomtd}>5</td>
                                </tr>
                                <tr>
                                    <th>Sand Blast M/C</th>
                                    <td>-</td>
                                    <td>2</td>
                                    <th>Milling M/C</th>
                                    <td>-</td>
                                    <td className={styles.bottomtd}>5</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.tablebox}>
                            <table>
                                <caption>
                                    OTHER FACILITIES
                                </caption>
                                <thead>
                                <tr>
                                    <th>장비</th>
                                    <th>용량</th>
                                    <th>Q’TY</th>
                                    <th>장비</th>
                                    <th>용량</th>
                                    <th className={styles.bottomth}>Q’TY</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th>Up-Right Drilling M/C</th>
                                    <td>W400, 2200h</td>
                                    <td>2</td>
                                    <th>Hoist</th>
                                    <td>
                                        25m, 2.8ton<br />
                                        10m, 2.8ton
                                    </td>
                                    <td className={styles.bottomtd}>6</td>
                                </tr>
                                <tr>
                                    <th>M/R Hoist</th>
                                    <td>2.8 Tons</td>
                                    <td>6</td>
                                    <th>Air Balancer</th>
                                    <td>350kg</td>
                                    <td className={styles.bottomtd}>3</td>
                                </tr>
                                <tr>
                                    <th>Air Compressor</th>
                                    <td>20kw(15hp)</td>
                                    <td>5</td>
                                    <th>Arc Welder</th>
                                    <td>-</td>
                                    <td className={styles.bottomtd}>4</td>
                                </tr>
                                <tr>
                                    <th>
                                        Automatic<br />
                                        Assembling M/C
                                    </th>
                                    <td>-</td>
                                    <td>8</td>
                                    <th>Buffing M/C</th>
                                    <td>
                                        C110 X 3000L<br />
                                        60 X 1000L
                                    </td>
                                    <td className={styles.bottomtd}>2</td>
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

export default Process