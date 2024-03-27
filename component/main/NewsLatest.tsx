import React, {useEffect, useState} from 'react';
import styles from 'styles/Main.module.css';
import {Col, Container, Image, Row} from "react-bootstrap";
import {NoticeTypes} from "types/type";
import axios from "axios";
import Link from "next/link";


function NewsLatest() {

    const [notices, setNotices] = useState<NoticeTypes[]>([]);
    const [thumbnailUrl, setThumbnailUrl] = useState('');


    async function fetchVimeoThumbnail(videoUrl: string): Promise<string> {
        try {
            // API 엔드포인트로 요청을 보냅니다. videoUrl을 쿼리 파라미터로 포함시킵니다.
            const response = await axios.get(`/api/vimeo/thumbnail?url=${encodeURIComponent(videoUrl)}`);
            // 응답에서 썸네일 URL을 추출합니다.
            const thumbnailUrl = response.data.thumbnailUrl;
            return thumbnailUrl;
        } catch (error) {
            console.error('Error fetching Vimeo thumbnail:', error);
            return '';
        }
    }



    useEffect(() => {
        const fetchLatestNotices = async () => {
            try {
                const response = await axios.get('/api/latest/newslatest');
                const fetchedNotices = response.data.notices;

                const noticesWithThumbnailPromises = fetchedNotices.map(async (notice : NoticeTypes) => {
                    if (notice.text) {
                        try {
                            const thumbnailUrl = await fetchVimeoThumbnail(notice.text);
                            return { ...notice, thumbnail: thumbnailUrl };
                        } catch (error) {
                            console.error('Thumbnail fetch error:', error);
                            return { ...notice, thumbnail: '' }; // 실패 시 기본 썸네일 또는 빈 문자열 설정
                        }
                    } else {
                        return notice;
                    }
                });

                const noticesWithThumbnailsResults = await Promise.allSettled(noticesWithThumbnailPromises);
                const noticesWithThumbnails = noticesWithThumbnailsResults.map(result => result.status === 'fulfilled' ? result.value : null).filter(notice => notice !== null);

                setNotices(noticesWithThumbnails);
            } catch (error) {
                console.error('Failed to fetch latest notices:', error);
            }
        };

        fetchLatestNotices();
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
                    <Row className={styles.newsrow}>
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
                                                    <Image src={item.thumbnail || item.text || '/sub/logo_no-thumbnail.jpg'} alt="Thumbnail" />
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
                </div>
            </Container>
        </div>
    )
}

export default NewsLatest