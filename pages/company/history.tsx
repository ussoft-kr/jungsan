import React, {useRef, useState} from 'react';
import styles from 'styles/History.module.css';
import {NextPage} from "next";
import Layout from "component/common/Layout";
import SubHeader from "component/common/SubHeader";
import {Button, Col, Container, Row} from "react-bootstrap";

const History:NextPage = () => {

    const [activeYear, setActiveYear] = useState<string>('2023');
    const indicatorRef = useRef<HTMLDivElement>(null);


    const handleButtonClick = (year: string, event: React.MouseEvent<HTMLButtonElement>) => {
        setActiveYear(year);
        const button = event.currentTarget;
        const buttonBox = button.parentNode;

        const infobox = document.querySelector(`.${styles.infobox}[data-year='${year}']`);


        // infobox가 존재하면 그 위치로 스크롤
        if (infobox) {
            // getBoundingClientRect를 사용해 뷰포트에 상대적인 위치를 구함
            const infoboxRect = infobox.getBoundingClientRect();

            // window.scrollBy를 사용하여 스크롤
            // smooth 스크롤 효과를 주기 위해 behavior: 'smooth' 옵션을 사용
            window.scrollBy({
                top: infoboxRect.top - 300, // 스크롤 위치를 조정, 여기 값을 변경. 예: 상단 여백을 주고 싶다면 값을 더 줄임.
                behavior: 'smooth' // 부드러운 스크롤 효과
            });
        }


        // buttonBox가 Element 타입인지 확인
        if (buttonBox instanceof Element) {
            const buttonBoxRect = buttonBox.getBoundingClientRect();
            const buttonRect = button.getBoundingClientRect();
            const additionalOffset = year !== '2023' ? 20 : 0;
            const topPosition = buttonRect.top - buttonBoxRect.top + buttonBox.scrollTop + additionalOffset;

            if (indicatorRef.current) {
                indicatorRef.current.style.top = `${topPosition}px`;
            }
        }

    };



    return (
        <Layout>
            <SubHeader
                imgsrc={'/sub/sub_img1.jpg'}
                title={'연혁'}
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
                        <div className={styles.contentheader}>
                            <h3>(주)중산이 걸어온 길</h3>
                            <p>
                                뜨거운 열정으로 발전에 발전을 거듭해온 (주)중산기업입니다.<br/>
                                대한민국을 넘어 세계로 발전해 나가며 사회에 기여하고 인정받는 기업이 되겠습니다.
                            </p>
                        </div>
                        <div className={styles.contentbody}>
                            <Row>
                                <Col xl={3} xs={12}>
                                    <div className={styles.buttonbox}>
                                        <div ref={indicatorRef} className={styles.indicator}></div>
                                        <Button
                                            type={'button'}
                                            className={activeYear === '2023' ? styles.activebtn : styles.disbtn}
                                            onClick={(event) => handleButtonClick('2023', event)}>
                                            2023
                                        </Button>
                                        <Button
                                            type={'button'}
                                            className={activeYear === '2022' ? styles.activebtn : styles.disbtn}
                                            onClick={(event) => handleButtonClick('2022', event)}
                                        >
                                            2022
                                        </Button>
                                        <Button
                                            type={'button'}
                                            className={activeYear === '2021' ? styles.activebtn : styles.disbtn}
                                            onClick={(event) => handleButtonClick('2021', event)}
                                        >
                                            2021
                                        </Button>
                                        <Button
                                            type={'button'}
                                            className={activeYear === '2020' ? styles.activebtn : styles.disbtn}
                                            onClick={(event) => handleButtonClick('2020', event)}
                                        >
                                            2020
                                        </Button>
                                        <Button
                                            type={'button'}
                                            className={activeYear === '2018' ? styles.activebtn : styles.disbtn}
                                            onClick={(event) => handleButtonClick('2018', event)}
                                        >
                                            2018
                                        </Button>
                                        <Button
                                            type={'button'}
                                            className={activeYear === '2017' ? styles.activebtn : styles.disbtn}
                                            onClick={(event) => handleButtonClick('2017', event)}
                                        >
                                            2017
                                        </Button>
                                        <Button
                                            type={'button'}
                                            className={activeYear === '2016' ? styles.activebtn : styles.disbtn}
                                            onClick={(event) => handleButtonClick('2016', event)}
                                        >
                                            2016
                                        </Button>
                                        <Button
                                            type={'button'}
                                            className={activeYear === '2015' ? styles.activebtn : styles.disbtn}
                                            onClick={(event) => handleButtonClick('2015', event)}
                                        >
                                            2015
                                        </Button>
                                        <Button
                                            type={'button'}
                                            className={activeYear === '2014' ? styles.activebtn : styles.disbtn}
                                            onClick={(event) => handleButtonClick('2014', event)}
                                        >
                                            2014
                                        </Button>
                                        <Button
                                            type={'button'}
                                            className={activeYear === '2013' ? styles.activebtn : styles.disbtn}
                                            onClick={(event) => handleButtonClick('2013', event)}
                                        >
                                            2013
                                        </Button>
                                        <Button
                                            type={'button'}
                                            className={activeYear === '2012' ? styles.activebtn : styles.disbtn}
                                            onClick={(event) => handleButtonClick('2012', event)}
                                        >
                                            2012
                                        </Button>
                                        <Button
                                            type={'button'}
                                            className={activeYear === '2011' ? styles.activebtn : styles.disbtn}
                                            onClick={(event) => handleButtonClick('2011', event)}
                                        >
                                            2011
                                        </Button>
                                        <Button
                                            type={'button'}
                                            className={activeYear === '2010' ? styles.activebtn : styles.disbtn}
                                            onClick={(event) => handleButtonClick('2010', event)}
                                        >
                                            2010
                                        </Button>
                                        <Button
                                            type={'button'}
                                            className={activeYear === '2009' ? styles.activebtn : styles.disbtn}
                                            onClick={(event) => handleButtonClick('2009', event)}
                                        >
                                            2009
                                        </Button>
                                        <Button
                                            type={'button'}
                                            className={activeYear === '2008' ? styles.activebtn : styles.disbtn}
                                            onClick={(event) => handleButtonClick('2008', event)}
                                        >
                                            2008
                                        </Button>
                                        <Button
                                            type={'button'}
                                            className={activeYear === '2007' ? styles.activebtn : styles.disbtn}
                                            onClick={(event) => handleButtonClick('2007', event)}
                                        >
                                            2007
                                        </Button>
                                        <Button
                                            type={'button'}
                                            className={activeYear === '2006' ? styles.activebtn : styles.disbtn}
                                            onClick={(event) => handleButtonClick('2006', event)}
                                        >
                                            2006
                                        </Button>
                                        <Button
                                            type={'button'}
                                            className={activeYear === '2004' ? styles.activebtn : styles.disbtn}
                                            onClick={(event) => handleButtonClick('2004', event)}
                                        >
                                            2004
                                        </Button>
                                        <Button
                                            type={'button'}
                                            className={activeYear === '2002' ? styles.activebtn : styles.disbtn}
                                            onClick={(event) => handleButtonClick('2002', event)}
                                        >
                                            2002
                                        </Button>
                                        <Button
                                            type={'button'}
                                            className={activeYear === '2001' ? styles.activebtn : styles.disbtn}
                                            onClick={(event) => handleButtonClick('2001', event)}
                                        >
                                            2001
                                        </Button>
                                        <Button
                                            type={'button'}
                                            className={activeYear === '2000' ? styles.activebtn : styles.disbtn}
                                            onClick={(event) => handleButtonClick('2000', event)}
                                        >
                                            2000
                                        </Button>
                                        <Button
                                            type={'button'}
                                            className={activeYear === '1999' ? styles.activebtn : styles.disbtn}
                                            onClick={(event) => handleButtonClick('1999', event)}
                                        >
                                            1999
                                        </Button>
                                        <Button
                                            type={'button'}
                                            className={activeYear === '1998' ? styles.activebtn : styles.disbtn}
                                            onClick={(event) => handleButtonClick('1998', event)}
                                        >
                                            1998
                                        </Button>
                                        <Button
                                            type={'button'}
                                            className={activeYear === '1983' ? styles.activebtn : styles.disbtn}
                                            onClick={(event) => handleButtonClick('1983', event)}
                                        >
                                            1983
                                        </Button>
                                    </div>
                                </Col>
                                <Col xl={9} xs={12}>
                                    <div className={styles.textbox}>
                                        <div className={styles.infobox} data-year={'2023'}>
                                            <div
                                                className={activeYear === '2023' ? styles.activetitlebox : styles.titlebox}>
                                                <h2>2023</h2>
                                            </div>
                                            <div className={styles.txtbox}>
                                                <ul>
                                                    <li>· 「글로벌 강소기업 1,000+」 지정(중소벤처기업부)</li>
                                                    <li>· 성과공유기업 선정(중소벤처기업부)</li>
                                                    <li>· TWO-스타기업 선정(울산테크노파크)</li>
                                                    <li>· 이백만불 수출의 탑 수상</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={styles.infobox} data-year={'2022'}>
                                            <div
                                                className={activeYear === '2022' ? styles.activetitlebox : styles.titlebox}>
                                                <h2>2022</h2>
                                            </div>
                                            <div className={styles.txtbox}>
                                                <ul>
                                                    <li>· 동반성장 우수상</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={styles.infobox} data-year={'2021'}>
                                            <div
                                                className={activeYear === '2021' ? styles.activetitlebox : styles.titlebox}>
                                                <h2>2021</h2>
                                            </div>
                                            <div className={styles.txtbox}>
                                                <ul>
                                                    <li>· UFSO (울산부유식 해상풍력공급망 지역협회) 참여 기업 등록</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={styles.infobox} data-year={'2020'}>
                                            <div
                                                className={activeYear === '2020' ? styles.activetitlebox : styles.titlebox}>
                                                <h2>2020</h2>
                                            </div>
                                            <div className={styles.txtbox}>
                                                <ul>
                                                    <li>· MODEC(일본) FPSO 기자재 공급사 등록 / NASCO 조선(미국) 특수 볼트 & 너트 공급사 등록
                                                    </li>
                                                    <li>· KNPC(쿠웨이트) 공급사 등록 / SAM 미연방 조달청 공급사 등록</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={styles.infobox} data-year={'2018'}>
                                            <div
                                                className={activeYear === '2018' ? styles.activetitlebox : styles.titlebox}>
                                                <h2>2018</h2>
                                            </div>
                                            <div className={styles.txtbox}>
                                                <ul>
                                                    <li>· ORPIC 벤더 승인</li>
                                                    <li>· SAOC 벤더 승인</li>
                                                    <li>· PED(CE) 인증</li>
                                                    <li>· GOST-R 인증</li>
                                                    <li>· 대우중공업LNG Part 공급사 등록 (솔리더스 화물창용 풀림방지너트 국산화 개발 참여)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={styles.infobox} data-year={'2017'}>
                                            <div
                                                className={activeYear === '2017' ? styles.activetitlebox : styles.titlebox}>
                                                <h2>2017</h2>
                                            </div>
                                            <div className={styles.txtbox}>
                                                <ul>
                                                    <li>· ABS 열처리 공장 승인</li>
                                                    <li>· DNV 열처리 공장 승인</li>
                                                    <li>· DNV ISO/TS 29001 인증</li>
                                                    <li>· 삼성중공업 Inner Hole Nut 승인</li>
                                                    <li>· KC LNG TECH 인증(KC1-M-2017-0101)</li>
                                                    <li>· JSRS 인증</li>
                                                    <li>· 조선해양산업발전 표창장 수상(산업통상자원부)</li>
                                                    <li>· 삼성중공업LNG Part 공급사 등록 (KC-1 Project 참여 / 풀림방지너트 공급)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={styles.infobox} data-year={'2016'}>
                                            <div
                                                className={activeYear === '2016' ? styles.activetitlebox : styles.titlebox}>
                                                <h2>2016</h2>
                                            </div>
                                            <div className={styles.txtbox}>
                                                <ul>
                                                    <li>· 한국생산성 대상 미래경영부분 산업통상자원부장관상 수상</li>
                                                    <li>· 품질, 환경, 안전보건시스템 인증 획득 (한국 선급)</li>
                                                    <li>· 기자재 공급 유자격 등록 획득</li>
                                                    <li className={styles.leftli}>(한국남부발전, 한국동서발전, 한국중부발전, 한국서부발전,
                                                        한국남동발전)
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={styles.infobox} data-year={'2015'}>
                                            <div
                                                className={activeYear === '2015' ? styles.activetitlebox : styles.titlebox}>
                                                <h2>2015</h2>
                                            </div>
                                            <div className={styles.txtbox}>
                                                <ul>
                                                    <li>· 대한전기협회 품질 SYSTEM 인증 (KEPIC:DN-662)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={styles.infobox} data-year={'2014'}>
                                            <div
                                                className={activeYear === '2014' ? styles.activetitlebox : styles.titlebox}>
                                                <h2>2014</h2>
                                            </div>
                                            <div className={styles.txtbox}>
                                                <ul>
                                                    <li>· 싱글 PPM 2종 추가 인증 획득 (TIE ROD / HYD. NUT)</li>
                                                    <li className={styles.leftli}>(중소기업청: 제1-16-2-2265호)</li>
                                                    <li>· 유망기업지정(울산테크노파크)</li>
                                                    <li>· 경영혁신형 중소기업(MAIN-BIZ)인증</li>
                                                    <li>· 생산성경영체제인증(PMS)LEVEL.4</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={styles.infobox} data-year={'2013'}>
                                            <div
                                                className={activeYear === '2013' ? styles.activetitlebox : styles.titlebox}>
                                                <h2>2013</h2>
                                            </div>
                                            <div className={styles.txtbox}>
                                                <ul>
                                                    <li>· 백만불 수출의 탑 수상</li>
                                                    <li>· INNOBIZ (중소기업기술혁신협회-20085772)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={styles.infobox} data-year={'2012'}>
                                            <div
                                                className={activeYear === '2012' ? styles.activetitlebox : styles.titlebox}>
                                                <h2>2012</h2>
                                            </div>
                                            <div className={styles.txtbox}>
                                                <ul>
                                                    <li>· 특허등록(매립형 모니터 장치 : 특허제10-1137458)</li>
                                                    <li>· 특허등록(매립형 화상표시 장치 : 특허제10-1034854)</li>
                                                    <li>· OHSAS 18001:2007 안전보건경영시스템 인증(MSA인증원)</li>
                                                    <li>· ISO 14001:2004 환경경영시스템 인증(MSA인증원)</li>
                                                    <li>· 품목별 원산지인증수출자 인증(대구세관 : 120-200094)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={styles.infobox} data-year={'2011'}>
                                            <div
                                                className={activeYear === '2011' ? styles.activetitlebox : styles.titlebox}>
                                                <h2>2011</h2>
                                            </div>
                                            <div className={styles.txtbox}>
                                                <ul>
                                                    <li>· 싱글PPM 단체상 대통령상 수상(제179550호)</li>
                                                    <li>· 특허등록(주방용 듀얼모니터형 TV도어폰장치 및 그 작동방법 특허제10-1027478호)</li>
                                                    <li>· 부품.소재전문기업(지식경제부 : 제8213호)</li>
                                                    <li>· 울산 글로벌 IP스타기업지정(제2011-7호)</li>
                                                    <li>· 특허등록(고속 자동 유압프레스 : 특허제10-1049936호)</li>
                                                    <li>· 유사디자인등록(듀얼모니터가 부착된 주방용 도어폰 :</li>
                                                    <li className={styles.leftli}>등록제30-0620566호의 유사제1,2,3호)</li>
                                                    <li>· 디자인등록(듀얼모니터가 부착된 주방용 도어폰 : 등록제30-30-0620566호)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={styles.infobox} data-year={'2010'}>
                                            <div
                                                className={activeYear === '2010' ? styles.activetitlebox : styles.titlebox}>
                                                <h2>2010</h2>
                                            </div>
                                            <div className={styles.txtbox}>
                                                <ul>
                                                    <li>· 무재해 10배 인증</li>
                                                    <li>· 부산지방 국세청장상 수상</li>
                                                    <li>· 싱글PPM품질 인증 -2품목 획득(중소기업청 : 제1-16-2-1796호)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={styles.infobox} data-year={'2009'}>
                                            <div
                                                className={activeYear === '2009' ? styles.activetitlebox : styles.titlebox}>
                                                <h2>2009</h2>
                                            </div>
                                            <div className={styles.txtbox}>
                                                <ul>
                                                    <li>· 제2공장 준공</li>
                                                    <li>· 두산엔진㈜ 3C부문 최우수 협력사 수상</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={styles.infobox} data-year={'2008'}>
                                            <div
                                                className={activeYear === '2008' ? styles.activetitlebox : styles.titlebox}>
                                                <h2>2008</h2>
                                            </div>
                                            <div className={styles.txtbox}>
                                                <ul>
                                                    <li>· 기술혁신형 중소기업(INNO-BIZ)인증 획득(제8021-0803호)</li>
                                                    <li>· 싱글PPM 단체상 국무총리상 수상(제145877호)</li>
                                                    <li>· 글로벌스탠다드경영대상 품질경영부문 최우수상(KMAR)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={styles.infobox} data-year={'2007'}>
                                            <div
                                                className={activeYear === '2007' ? styles.activetitlebox : styles.titlebox}>
                                                <h2>2007</h2>
                                            </div>
                                            <div className={styles.txtbox}>
                                                <ul>
                                                    <li>· 싱글PPM품질 인증 획득(중소기업청: 제1-16-2-1464호)</li>
                                                    <li>· 모범납세자상 수상(제0144)</li>
                                                    <li>· 두산엔진(주) 우수품질상 수상(QS-0702-18)</li>
                                                    <li>· 두산중공업(주) 우수협력사인증(SRM07-024)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={styles.infobox} data-year={'2006'}>
                                            <div
                                                className={activeYear === '2006' ? styles.activetitlebox : styles.titlebox}>
                                                <h2>2006</h2>
                                            </div>
                                            <div className={styles.txtbox}>
                                                <ul>
                                                    <li>· ISO9001 : 2000 품질시스템 인증(ORI 인증원)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={styles.infobox} data-year={'2004'}>
                                            <div
                                                className={activeYear === '2004' ? styles.activetitlebox : styles.titlebox}>
                                                <h2>2004</h2>
                                            </div>
                                            <div className={styles.txtbox}>
                                                <ul>
                                                    <li>· CLEAN 사업장 선정(한국산업안전공단 제7479호)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={styles.infobox} data-year={'2002'}>
                                            <div
                                                className={activeYear === '2002' ? styles.activetitlebox : styles.titlebox}>
                                                <h2>2002</h2>
                                            </div>
                                            <div className={styles.txtbox}>
                                                <ul>
                                                    <li>· 수출 유망중소기업 지정(제2002-089호)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={styles.infobox} data-year={'2001'}>
                                            <div
                                                className={activeYear === '2001' ? styles.activetitlebox : styles.titlebox}>
                                                <h2>2001</h2>
                                            </div>
                                            <div className={styles.txtbox}>
                                                <ul>
                                                    <li>· 현대중공업(주) 품질우수업체 표창 (제2001026)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={styles.infobox} data-year={'2000'}>
                                            <div
                                                className={activeYear === '2000' ? styles.activetitlebox : styles.titlebox}>
                                                <h2>2000</h2>
                                            </div>
                                            <div className={styles.txtbox}>
                                                <ul>
                                                    <li>· ISO 9001 품질시스템 인증(EQA 인증원)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={styles.infobox} data-year={'1999'}>
                                            <div
                                                className={activeYear === '1999' ? styles.activetitlebox : styles.titlebox}>
                                                <h2>1999</h2>
                                            </div>
                                            <div className={styles.txtbox}>
                                                <ul>
                                                    <li>· 기업부설연구소 설립/인증(제931206)</li>
                                                    <li>· 벤처기업 인증(제99122421-189호)</li>
                                                    <li>· 한국무역협회 회원 등록(12087828)</li>
                                                    <li>· 수출지원 대상업체 지정(제99-35호)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={styles.infobox} data-year={'1998'}>
                                            <div
                                                className={activeYear === '1998' ? styles.activetitlebox : styles.titlebox}>
                                                <h2>1998</h2>
                                            </div>
                                            <div className={styles.txtbox}>
                                                <ul>
                                                    <li>· 법인설립</li>
                                                    <li>· 현대중공업(주) 회원사 등록(UZ077)</li>
                                                    <li>· 두산중공업(주) 협력업체 인증(제2001-079호)</li>
                                                    <li>· 두산엔진(주) 협력사 등록(290715)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={styles.infobox} data-year={'1983'}>
                                            <div
                                                className={activeYear === '1983' ? styles.activetitlebox : styles.titlebox}>
                                                <h2>1983</h2>
                                            </div>
                                            <div className={styles.txtbox}>
                                                <ul>
                                                    <li>· 1983년 3월 최초 회사 설립</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
        </Layout>
    )
}

export default History