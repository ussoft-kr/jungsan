import React from 'react';
import styles from '@/styles/Main.module.css';
import {Col, Row} from "react-bootstrap";


export interface NoticeLatestProps {
    id : number;
    title : string;
    content : string;
    date : string;
}

export const NoticeLatestData:Array<NoticeLatestProps> = [
    {
        id : 1,
        title : '(주)중산기업 공지사항',
        content : '공지사항 내용이 입력됩니다.',
        date : '2023.10.05'
    },
    {
        id : 2,
        title : '(주)중산기업 공지사항',
        content : '공지사항 내용이 입력됩니다.',
        date : '2023.10.05'
    },
    {
        id : 3,
        title : '(주)중산기업 공지사항',
        content : '공지사항 내용이 입력됩니다.',
        date : '2023.10.05'
    },
    {
        id : 4,
        title : '(주)중산기업 공지사항',
        content : '공지사항 내용이 입력됩니다.',
        date : '2023.10.05'
    }
]

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