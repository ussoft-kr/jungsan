import React from 'react';
import styles from 'styles/Main.module.css';
import {Col, Row} from "react-bootstrap";
import { NoticeLatestData } from 'types/type';




function NoticeLatest() {
    return(
        <Row>
            {NoticeLatestData.slice(0,4).map((item, index) => (
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
    )
}

export default NoticeLatest