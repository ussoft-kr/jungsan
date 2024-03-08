import React from 'react';
import styles from 'styles/Product.module.css';
import {NextPage} from "next";
import Layout from "component/common/Layout";
import SubHeader from "component/common/SubHeader";
import {Container, Image} from "react-bootstrap";

const Product: NextPage = () => {
    return (
        <Layout>
            <SubHeader
                imgsrc={'/sub/sub_img2.jpg'}
                title={'제품사양'}
                menuitem={[
                    {id: 1, menutitle: '선박엔진 부품사업', href: '/business/ship'},
                    {id: 2, menutitle: '플랜트 부품사업', href: '/business/plant'},
                    {id: 3, menutitle: '산업설비 부품산업', href: '/business/industry'},
                    {id: 4, menutitle: '전자제품 사업분야', href: '/business/electron'},
                    {id: 5, menutitle: '제품사양', href: '/business/product'},
                ]}
            />
            <div className={styles.subwrap}>
                <Container>
                    <div className={styles.contentheader}>
                        <h3>
                            <strong>고객만족 실현을 최우선</strong>으로 생각하는 제품과 서비스
                        </h3>
                    </div>
                    <div className={styles.contentbody}>
                        <div className={styles.tablebox}>
                            <table className={styles.table1}>
                                <thead>
                                <tr>
                                    <th rowSpan={2}>&nbsp;</th>
                                    <th rowSpan={2}>설명</th>
                                    <th rowSpan={2}>재료</th>
                                    <th rowSpan={2}>치수</th>
                                    <th colSpan={2} className={styles.theadth}>범위</th>
                                </tr>
                                <tr>
                                    <th>Inch</th>
                                    <th>Metric</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th rowSpan={16} className={styles.bottomth}>BOLT</th>
                                    <td>STUD BOLT</td>
                                    <td>A193,A320, A437,4449,4453,ISO 898-1</td>
                                    <td>A193,A307,A540, A564</td>
                                    <td>1/4&#34; ~ 6&#34;</td>
                                    <td className={'border-end-0'}>M6-M160</td>
                                </tr>
                                <tr>
                                    <td>HEX BOLT</td>
                                    <td>A193,A320,A437,A449,4453,ISO 898-1</td>
                                    <td>ASME B18.2.1 / ANSI B18.2.3.5M</td>
                                    <td>1/4&#34; ~ 6&#34;</td>
                                    <td className={'border-end-0'}>M5-M160</td>
                                </tr>
                                <tr>
                                    <td>HEAVY HEX BOLT</td>
                                    <td>A193,A320,A437,A449,4453,ISO 898-1</td>
                                    <td>ASME B18.2.1 / ANSI B18.2.3.6M</td>
                                    <td>3/8&#34; ~ 3&#34;</td>
                                    <td className={'border-end-0'}>M10-M48</td>
                                </tr>
                                <tr>
                                    <td>SQUARE HEAD BOLT</td>
                                    <td>A193,A307,S45C,S20C,SS400</td>
                                    <td>ASME B18.2.1</td>
                                    <td>1/4&#34; ~ 1-1/2&#34;</td>
                                    <td className={'border-end-0'}>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>FITTED BOLT</td>
                                    <td>JIS G 4053(SCM435,SCM440,545C)</td>
                                    <td>CUSTOMER SPECIFICATION</td>
                                    <td>&nbsp;</td>
                                    <td className={'border-end-0'}>M24-M60</td>
                                </tr>
                                <tr>
                                    <td>HEX SOCKET BOLT</td>
                                    <td>A193,A320,A437,A449,4453,ISO 898-1</td>
                                    <td>ASME B18.3/ANSI B18.3.1M</td>
                                    <td>NO.0 ~ 4&#34;</td>
                                    <td className={'border-end-0'}>M6-M48</td>
                                </tr>
                                <tr>
                                    <td>U-BOLT</td>
                                    <td>A193, A325A,SS400</td>
                                    <td>JIS F3022</td>
                                    <td>3/8&#34; ~ 32&#34;</td>
                                    <td className={'border-end-0'}>M12-M30</td>
                                </tr>
                                <tr>
                                    <td>ANCHOR BOLT</td>
                                    <td>A36,A307, A540, SF440,S45C,20C,SS400</td>
                                    <td>JIS B1178</td>
                                    <td>1/2&#34; ~ 5&#34;</td>
                                    <td className={'border-end-0'}>M12-M125</td>
                                </tr>
                                <tr>
                                    <td>T-HEAD BOLT</td>
                                    <td>A36, SF440,545C,S20C,SS400</td>
                                    <td>DIN7992</td>
                                    <td>1/2&#34; ~ 4&#34;</td>
                                    <td className={'border-end-0'}>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>EYE BOLT</td>
                                    <td>A489,545C,S20C,SS400</td>
                                    <td>ANSI B18.15</td>
                                    <td>1/4&#34; ~ 2-1/2&#34;</td>
                                    <td className={'border-end-0'}>M6-M120</td>
                                </tr>
                                <tr>
                                    <td>FLANGE BOLT</td>
                                    <td>A193,A320, A437,A449,A453,ISO 898-1</td>
                                    <td>ASME B18.2.1/1F1536</td>
                                    <td>1/4&#34; ~ 3/4&#34;</td>
                                    <td className={'border-end-0'}>M6-M30</td>
                                </tr>
                                <tr>
                                    <td>TENSION BOLT</td>
                                    <td>JIS G 4053(SCM435,SCM440)</td>
                                    <td>CUSTOMER SPECIFICATION</td>
                                    <td>&nbsp;</td>
                                    <td className={'border-end-0'}>M10-M30</td>
                                </tr>
                                <tr>
                                    <td>HOLD&#39;G DOWN BOLT</td>
                                    <td>JIS G4053(SCM435,SCM440)</td>
                                    <td>CUSTOMER SPECIFICATION</td>
                                    <td>&nbsp;</td>
                                    <td className={'border-end-0'}>M24-M30</td>
                                </tr>
                                <tr>
                                    <td>END CHOCK BOLT</td>
                                    <td>JIS G4053(SCM435,SCM440)</td>
                                    <td>CUSTOMER SPECIFICATION</td>
                                    <td>&nbsp;</td>
                                    <td className={'border-end-0'}>M40-M80</td>
                                </tr>
                                <tr>
                                    <td>COUPLING BOLT</td>
                                    <td>JIS G4053(SCM435, SCM440)</td>
                                    <td>CUSTOMER SPECIFICATION</td>
                                    <td>&nbsp;</td>
                                    <td className={'border-end-0'}>M50-M180</td>
                                </tr>
                                <tr>
                                    <td className={styles.bottomtd}>PISTON CROWN BOLT</td>
                                    <td className={styles.bottomtd}>JIS G4053(SCM435,5CM440, SNCM439)</td>
                                    <td className={styles.bottomtd}>CUSTOMER SPECIFICATION</td>
                                    <td className={styles.bottomtd}>&nbsp;</td>
                                    <td className={`${styles.bottomtd} border-end-0`}>M12-M30</td>
                                </tr>
                                <tr>
                                    <th rowSpan={9} className={styles.bottomth}>STUD</th>
                                    <td>CYLINDER COVER STUD</td>
                                    <td rowSpan={9} className={styles.bottomtd}>JIS G4053(SCM435,5CM440, SNCM439)</td>
                                    <td rowSpan={9} className={styles.bottomtd}>CUSTOMER SPECIFICATION</td>
                                    <td rowSpan={9} className={styles.bottomtd}>&nbsp;</td>
                                    <td className={'border-end-0'}>M48-M120</td>
                                </tr>
                                <tr>
                                    <td>MAIN BEARING STUD</td>
                                    <td className={'border-end-0'}>M48-M120</td>
                                </tr>
                                <tr>
                                    <td>CONNECTING ROD STUD</td>
                                    <td className={'border-end-0'}>M48-M120</td>
                                </tr>
                                <tr>
                                    <td>FUEL VALVE STUD</td>
                                    <td className={'border-end-0'}>M20-M48</td>
                                </tr>
                                <tr>
                                    <td>AXIAL VIBR DAMPER STUD</td>
                                    <td className={'border-end-0'}>M20-M48</td>
                                </tr>
                                <tr>
                                    <td>STARTING AIR VALVE STUD</td>
                                    <td className={'border-end-0'}>M20-M48</td>
                                </tr>
                                <tr>
                                    <td>REDUCED SHANK STUD</td>
                                    <td className={'border-end-0'}>M20-M48</td>
                                </tr>
                                <tr>
                                    <td>PISTON ROD STUD</td>
                                    <td className={'border-end-0'}>M12-M30</td>
                                </tr>
                                <tr>
                                    <td className={styles.bottomtd}>TIE-ROD</td>
                                    <td className={`${styles.bottomtd} border-end-0`}>M24-M80</td>
                                </tr>
                                <tr>
                                    <th rowSpan={7} className={styles.bottomth}>NUT</th>
                                    <td>HEX NUT</td>
                                    <td rowSpan={3}>A194,A453,A563,ISO 898-2</td>
                                    <td>ASME B18.2.2/ANSI B18.2.4.1M</td>
                                    <td rowSpan={2}>1/4&#39; ~ 6&#39;</td>
                                    <td rowSpan={2} className={'border-end-0'}>M10-M160</td>
                                </tr>
                                <tr>
                                    <td>HEAVY HEX NUT</td>
                                    <td>ASME B18.2.2/ANSI B18.2.4.6M</td>
                                </tr>
                                <tr>
                                    <td>HEX JAM NUT</td>
                                    <td>ASME B18.2.2/ANSI B18.2.4.1M</td>
                                    <td>1/4&#39; ~ 4&#39;</td>
                                    <td className={'border-end-0'}>M10-M36</td>
                                </tr>
                                <tr>
                                    <td>FITTED NUT</td>
                                    <td rowSpan={4} className={styles.bottomtd}>JIS G4053(SCM435, SCM440)</td>
                                    <td rowSpan={4} className={styles.bottomtd}>CUSTOMER SPECIFICATION</td>
                                    <td rowSpan={4} className={styles.bottomtd}>&nbsp;</td>
                                    <td className={'border-end-0'}>M20-M120</td>
                                </tr>
                                <tr>
                                    <td>COUPLING NUT</td>
                                    <td className={'border-end-0'}>M50-M180</td>
                                </tr>
                                <tr>
                                    <td>ROUND NUT</td>
                                    <td rowSpan={2} className={`${styles.bottomtd} border-end-0`}>M30-M120</td>
                                </tr>
                                <tr>
                                    <td className={styles.bottomtd}>HYDRAULIC NUT</td>
                                </tr>
                                <tr>
                                    <th rowSpan={2} className={styles.bottomth}>Etc</th>
                                    <td>PLUG</td>
                                    <td>A105,A182,A350,S45C</td>
                                    <td>ANI B16.11</td>
                                    <td>1/8&#39; ~ 4&#39;</td>
                                    <td rowSpan={2} className={`${styles.bottomtd} border-end-0`}>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td className={styles.bottomtd}>WASHER</td>
                                    <td className={styles.bottomtd}>A510, A580ASWRH,F436,545C</td>
                                    <td className={styles.bottomtd}>ASME B18.21.1/1F1532/JIS B1251</td>
                                    <td className={styles.bottomtd}>1/2&#39; ~ 3&#39;</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.tablebox}>
                            <table className={styles.table2}>
                                <caption>
                                    <Image src={'/sub/title_icon.png'} alt={'sub-img'}/>
                                    코팅
                                </caption>
                                <thead>
                                <tr>
                                    <th>종류</th>
                                    <th>사양</th>
                                    <th className={'border-end-0'}>재료</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th>HOT-DIP GALVANIZED</th>
                                    <td>ASTM 123, ASTM A153, ISO 10684</td>
                                    <td className={'border-end-0'}>
                                        IRON AND STEEL PRODUCT IRON AND<br/>
                                        STEEL HARDWARE FASTENERS
                                    </td>
                                </tr>
                                <tr>
                                    <th>ELECTRO-DEPSITER</th>
                                    <td>ASTM B633 , ASTM B766 ISO 2081, ASTM B841</td>
                                    <td className={'border-end-0'}>ZINK, CADMIUM , ZN+NI</td>
                                </tr>
                                <tr>
                                    <th>NON-ELECTRONICALLY ZINK FLAKE</th>
                                    <td>ISO 10683</td>
                                    <td className={'border-end-0'}>ZINK</td>
                                </tr>
                                <tr>
                                    <th>ZINK PHOSPHATE</th>
                                    <td>ASTM F1137, ISO 11408</td>
                                    <td className={'border-end-0'}>ZN / MN</td>
                                </tr>
                                <tr>
                                    <th className={styles.bottomth}>PTFE (Poly Tetra Fluoro Ethyene)</th>
                                    <td className={styles.bottomtd}>
                                        XYLAN 1070, 1052, 1014, 1424 XYLAR 2,<br/>
                                        SERMAGARD 1105/1280
                                    </td>
                                    <td className={`${styles.bottomtd} border-end-0`}>XYLAN</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.tablebox}>
                            <table className={styles.table3}>
                                <caption>
                                    <Image src={'/sub/title_icon.png'} alt={'sub-img'}/>
                                    스테인리스 스틸
                                </caption>
                                <thead>
                                <tr>
                                    <th>종류</th>
                                    <th className={'border-end-0'}>재료</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th>Martensitic</th>
                                    <td className={'border-end-0'}>403,410,410S, 410JI , 416, 420JI , 420J2 , 420F, 431, 440A, 440B , 440C</td>
                                </tr>
                                <tr>
                                    <th>Ferritic</th>
                                    <td className={'border-end-0'}>405, 429, 430, 430F , 434</td>
                                </tr>
                                <tr>
                                    <th className={styles.bottomth}>Austenitic</th>
                                    <td className={`${styles.bottomtd} border-end-0`}>
                                        201, 202, 301, 302, 303, 303Se, 304, 304L, 304N1, 304N2,305, 305J1 , 3095, 310S,
                                        316, 316N , 316L,<br/>
                                        316JI , 16JIL , 317, 317L , 321, 347, 384 , XM7 , XM15JI , 329JI
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.tablebox}>
                            <table className={styles.table4}>
                                <caption>
                                    <Image src={'/sub/title_icon.png'} alt={'sub-img'}/>
                                    이중 합금
                                </caption>
                                <thead>
                                <tr>
                                    <th>종류</th>
                                    <th>재료</th>
                                    <th className={'border-end-0'}>ASTM</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th>ALLOY 2205 - DUPLEX 2205</th>
                                    <td>S31803, S32205</td>
                                    <td className={'border-end-0'}>A182, A76, A479</td>
                                </tr>
                                <tr>
                                    <th className={styles.bottomth}>ALLOY 2507-25Cr</th>
                                    <td className={styles.bottomtd}>S32750, S32760</td>
                                    <td className={`${styles.bottomtd} border-end-0`}>A182, A76, A479</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.tablebox}>
                            <table className={styles.table5}>
                                <caption>
                                    <Image src={'/sub/title_icon.png'} alt={'sub-img'}/>
                                    티탄
                                </caption>
                                <thead>
                                <tr>
                                    <th>종류</th>
                                    <th>UNS</th>
                                    <th className={'border-end-0'}>ASTM</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th className={styles.bottomth}>TITAIUM Gr. 2/5/7</th>
                                    <td className={styles.bottomtd}>R50400, R56400, R52400</td>
                                    <td className={`${styles.bottomtd} border-end-0`}>B348, B265</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.tablebox}>
                            <table className={styles.table6}>
                                <caption>
                                    <Image src={'/sub/title_icon.png'} alt={'sub-img'}/>
                                    6%-MOLY
                                </caption>
                                <thead>
                                <tr>
                                    <th>종류</th>
                                    <th>UNS</th>
                                    <th className={'border-end-0'}>ASTM</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th>ALLOY 2205 - DUPLEX 2205</th>
                                    <td>N08925, N08926 , N08367</td>
                                    <td className={'border-end-0'}>ASTM B649, A182, A276, A479, B688</td>
                                </tr>
                                <tr>
                                    <th className={styles.bottomth}>ALLOY 2507-25Cr</th>
                                    <td className={styles.bottomtd}>S31254</td>
                                    <td className={`${styles.bottomtd} border-end-0`}>A182, A276 , A479</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.tablebox}>
                            <table className={styles.table7}>
                                <caption>
                                    <Image src={'/sub/title_icon.png'} alt={'sub-img'}/>
                                    니켈 합금
                                </caption>
                                <thead>
                                <tr>
                                    <th>종류</th>
                                    <th>UNS</th>
                                    <th className={'border-end-0'}>ASTM</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th>ASTM A453 Gr 660 Class A/B/C/D</th>
                                    <td>S66286</td>
                                    <td className={'border-end-0'}>ASTM B649, A182, A276, A479, B688</td>
                                </tr>
                                <tr>
                                    <th>HASTELLOY C276</th>
                                    <td>N10276</td>
                                    <td className={'border-end-0'}>B574 , B622</td>
                                </tr>
                                <tr>
                                    <th>INCOLOY A286 / 800 / 800H / 825 / 925</th>
                                    <td>S66286, No8800, N08810, N08825, NO9925</td>
                                    <td className={'border-end-0'}>A453 , B407, B408, B564, B423, B425 , B805</td>
                                </tr>
                                <tr>
                                    <th>MONEL 400 / 5500</th>
                                    <td>N04400, N05500</td>
                                    <td className={'border-end-0'}>B164 , B865</td>
                                </tr>
                                <tr>
                                    <th className={styles.bottomth}>INCONEL 625/ 718/ 750</th>
                                    <td className={styles.bottomtd}>N006625, N07718, N07750</td>
                                    <td className={`${styles.bottomtd} border-end-0`}>B446, B564 A1014 , B637</td>
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

export default Product