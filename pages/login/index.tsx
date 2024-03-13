import React, {useState} from 'react';
import styles from 'styles/Login.module.css';
import {NextPage} from "next";
import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import TopHead from "component/common/TopHead";
import {signIn, useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import { redirectIfLoggedIn } from 'hooks/loginauth';


const LoginIndex:NextPage = () => {

    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();
    const { data: session } = useSession();

    console.log("Session:", session);

    const handleUseridChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserid(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await signIn('credentials', {
            redirect: false,
            userid,
            password
        });

        if (!result?.error) {
            router.reload();  // 페이지를 리로드하여 getServerSideProps에서 리디렉션을 처리하도록 함
        } else {
            // 로그인 실패 시 처리, 예: 에러 메시지 표시
            alert('로그인 실패! 아이디나 비밀번호를 확인해 주세요.');
        }
    }


    return (
            <div className={styles.subwrap}>
                <TopHead />
                <div className={styles.loginbox}>
                    <Container fluid className={styles.containerbox}>
                        <Row>
                            <Col xl={6} xs={12} className={'d-none d-xl-block p-0'}>
                                <div className={styles.imgbox}>
                                    <Image src={'/main/header_logo_wh.png'} alt={'login-img'} />
                                    <h2>중산기업 로그인</h2>
                                </div>
                            </Col>
                            <Col xl={6} xs={12} className={'d-none d-xl-block p-0'}>
                                <div className={styles.infobox}>
                                    <div className={styles.formbox}>
                                        <h3>중산기업 로그인</h3>
                                        <Form onSubmit={handleSubmit}>
                                            <span>아이디</span>
                                            <Form.Control
                                                className={styles.loginform}
                                                placeholder={'아이디를 입력하세요'}
                                                value={userid}
                                                onChange={handleUseridChange}
                                                type={'text'}
                                            />
                                            <span>비밀번호</span>
                                            <Form.Control
                                                className={styles.passwordform}
                                                placeholder={'비밀번호를 입력하세요'}
                                                type={'password'}
                                                value={password}
                                                onChange={handlePasswordChange}
                                            />
                                            <div className={styles.submitbox}>
                                                <Button type={'submit'} className={styles.submitbtn}>로그인</Button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

    )
}

export const getServerSideProps = redirectIfLoggedIn;

export default LoginIndex