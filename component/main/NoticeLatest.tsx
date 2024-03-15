import React from 'react';
import styles from 'styles/Main.module.css';
import {Col, Image, Row} from "react-bootstrap";
import { NoticeLatestData } from 'types/type';
import Link from "next/link";




function NoticeLatest() {
    return (
        <div className={styles.noticebox}>
        <div className={styles.noticeheader}>
            <div className={styles.leftbox}>
                <h5>공지사항</h5>
                <p>(주)중산기업의 공지사항을 안내드립니다.</p>
            </div>
            <div className={styles.rightbox}>
                <Link href={''}>
                                    <span className={styles.textspan}>
                                        MORE DETAIL
                                    </span>
                    <span className={styles.imgspan}>
                                        <Image src={'main/more_detail02.svg'} alt={'main-icon'}/>
                                    </span>
                </Link>
            </div>
        </div>
    <Row>
        {NoticeLatestData.slice(0, 4).map((item, index) => (
            <Col key={index} xl={3} xs={12}>
                <div className={styles.infobox}>
                    <span className={styles.vrspan}></span>
                    <strong>공지사항</strong>
                    <h6>{item.title}</h6>
                    <p>{item.content}</p>
                    <span className={styles.datespan}>{item.date}</span>
                </div>
            </Col>
        ))}
    </Row>
        </div>
)
}

export default NoticeLatest