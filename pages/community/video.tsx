import React, {useState} from 'react';
import styles from 'styles/Video.module.css';
import {NextPage} from "next";
import Layout from "component/common/Layout";
import SubHeader from "component/common/SubHeader";
import {Container, Image} from "react-bootstrap";

const Video:NextPage = () => {

    const [videoVisible, setVideoVisible] = useState(false);

    const handleImageClick = () => {
        setVideoVisible(true);
    }

    return (
        <Layout>
            <SubHeader
                imgsrc={'/sub/sub_img4.jpg'}
                title={'회사소식'}
                menuitem={[
                    {id: 1, menutitle: '공지사항', href: '/board/notice'},
                    {id: 2, menutitle: '기술자료', href: '/board/technic'},
                    {id: 3, menutitle: '카탈로그', href: '/community/catalog'},
                    {id: 4, menutitle: '회사소식', href: '/community/video'},
                ]}
            />
            <div className={styles.subwrap}>
                <div className={styles.section1}>
                    <Container>
                        <h3>
                            <span>뜨거운 열정으로 발전에 발전을 거듭</span>해온 (주)중산기업입니다.<br />
                            대한민국을 넘어 세계로 발전해 나가며 <span>사회에 기여하고 인정받는 기업</span>이 되겠습니다.
                        </h3>
                    </Container>
                </div>
                <div className={styles.section2}>
                    <Container>
                        {!videoVisible && (
                            <Image src={'/sub/video.jpg'} alt={'sub-img'} onClick={handleImageClick} />
                        )}
                        {videoVisible && (
                            <video controls autoPlay>
                                <source src={'/data/download/video.mp4'} type={'video/mp4'}/>
                            </video>
                        )}
                    </Container>
                </div>
            </div>
        </Layout>
    )
}

export default Video