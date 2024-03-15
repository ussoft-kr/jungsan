import React, {useEffect, useState} from 'react';
import styles from 'styles/Main.module.css';
import {Col, Container, Image, Row} from "react-bootstrap";
import {NoticeTypes} from "types/type";
import axios from "axios";
import Link from "next/link";


function NewsLatest() {

    const [notices, setNotices] = useState<NoticeTypes[]>([]);


    useEffect(() => {
        const fetchLatestNotices = async () => {
            try {
                const response = await axios.get('/api/latest/newslatest');
                setNotices(response.data.notices);
            } catch (error) {
                console.error('최신글 불러오기 실패', error);
            }
        };

        fetchLatestNotices().then();
    }, []);




    return (
        <div className={styles.newslatestwrap}>
            <Container>
                <div className={styles.contentheader}>
                    <h4>회사소식</h4>
                    <p>(주)중산기업이 새로운 소식을 전해드립니다.</p>
                    <span className={styles.morespan}>

                    </span>
                </div>
                <div className={styles.contentbody}>
                    <Row className={'align-items-center'}>
                        <Row>
                            <Col xl={6} xs={12} className={styles.leftcol}>
                                <div className={styles.latesttable}>
                                    <table>
                                        <tbody>
                                        {notices.slice(0, 1).map((item, index) => (
                                            <tr key={index}>
                                                <td className={styles.infotd}>
                                                    <Link href={`/board/notice/${item.id}`}>
                                                    <div className={styles.thumbnailtd}>
                                                        <Image src={item.thumbnail || '/sub/logo_no-thumbnail.jpg'} alt="Thumbnail" />
                                                    </div>
                                                    <div className={styles.infobox}>
                                                            <strong>{item.title}</strong>
                                                            <p></p>
                                                            <span>{new Date(item.postedAt).toLocaleDateString()}</span>
                                                    </div>
                                                </Link>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </Col>
                            <Col xl={6} xs={12} className={styles.rightcol}>
                                <div className={styles.latesttable}>
                                    <table>
                                        <tbody>
                                        {notices.slice(1, 4).map((item, index) => (
                                            <tr key={index}>
                                                <td className={styles.thumbnailtd}>
                                                    <Image src={item.thumbnail || '/sub/logo_no-thumbnail.jpg'} alt="Thumbnail" />
                                                </td>
                                                <td className={styles.infotd}>
                                                    <div className={styles.infobox}>
                                                        <Link href={`/board/notice/${item.id}`}>
                                                            <strong>{item.title}</strong>
                                                            <p></p>
                                                            <span>{new Date(item.postedAt).toLocaleDateString()}</span>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </Col>
                        </Row>

                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default NewsLatest