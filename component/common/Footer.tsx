import styles from 'styles/Layout.module.css';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import {useRouter} from "next/router";
import {signOut, useSession} from "next-auth/react";
import TopButton from "../topbutton/TopButton";


function Footer() {

    const { data: session } = useSession();
    const router = useRouter();


    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footertop}>
                    <Row>
                        <Col xl={6} xs={12}>
                            <div className={styles.leftbox}>
                                <Image src={'/main/footer_logo.png'} alt={'main-img'} />
                                <ul>
                                    <li>ISO 9001 / ISO 14001 / OHSAS 18001 / ISO/TS 29001 / KEPIC-MN, SN/ PED / GOST-R</li>
                                    <li>SPECIFICATION ASTM, ANSI, ASME, ISO, DIN, JIS, KS etc.</li>
                                    <li>1공장 : 울산광역시 울주군 삼동면 암리 3길 32</li>
                                    <li>2공장(본사) : 울산광역시 울주군 삼동면 암리 3길 25</li>
                                    <li>3공장 : 울산광역시 울주군 삼동면 암리 3길 26-8</li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={6} xs={12}>
                            <div className={styles.rightbox}>
                            <span>
                                관리부 TEL. 052-254-4290
                            </span>
                                <span>
                                관리부 FAX. 052-254-4291
                            </span>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className={styles.footerbottom}>
                    <p>
                        COPYRIGHT ⓒ JUNGSAN ENTERPRISE CO,.LTD. ALL RIGHTS RESERVED
                    </p>
                    {session
                        ?
                    <Button className={styles.logoutbtn} onClick={() => signOut()}>로그아웃</Button>
                        :
                    <>
                    </>
                    }
                </div>
            </Container>
            <TopButton />
        </footer>
    )
}

export default Footer