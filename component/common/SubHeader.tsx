import React from 'react';
import styles from '@/styles/Layout.module.css';
import {Accordion, Container, Image} from "react-bootstrap";
import Link from "next/link";



interface SubHeaderProps {
    imgsrc : string;
    title : string;
    menuitem : { id : number; menutitle : string; href : string;}[];
}

function SubHeader(props : SubHeaderProps) {
    return(
        <div className={styles.subheaderbox}>
            <div className={styles.subimgbox}>
                <Image src={props.imgsrc} alt={'sub-img'} />
                <h2>{props.title}</h2>
            </div>
            <div className={styles.submenubox} id={'submenubox'}>
                <Container>
                    <div className={styles.submenuwrap}>
                        <div className={styles.homebox}>
                            <Image src={'/sub/route_home.svg'} alt={'sub-icon'} />
                        </div>
                        <div className={styles.firstmenu}>
                            <Accordion className={styles.acc}>
                                <Accordion.Item eventKey="0" className={styles.accitem}>
                                    <Accordion.Header className={styles.accbtn}>회사소개</Accordion.Header>
                                    <Accordion.Body className={styles.accbody}>
                                        <dl>
                                            <dd>
                                                <Link href={'/company/intro'}>
                                                    회사소개
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link href={'/business/ship'}>
                                                    사업소개
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link href={''}>
                                                    품질경영
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link href={''}>
                                                    커뮤니티
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link href={''}>
                                                    문의하기
                                                </Link>
                                            </dd>
                                        </dl>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className={styles.secondmenu}>
                            <Accordion className={styles.acc}>
                            <Accordion.Item eventKey="0" className={styles.accitem}>
                                <Accordion.Header className={styles.accbtn}>{props.title}</Accordion.Header>
                                <Accordion.Body className={styles.accbody}>
                                    <dl>
                                        {props.menuitem.map((item, index) => (
                                        <dd key={index}>
                                            <Link href={item.href}>
                                                {item.menutitle}
                                            </Link>
                                        </dd>
                                        ))}
                                    </dl>
                                </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default SubHeader