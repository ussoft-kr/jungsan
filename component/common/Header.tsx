import styles from 'styles/Layout.module.css';
import {Button, Container, Form, Image, Nav, Navbar} from "react-bootstrap";
import Link from "next/link";
import {useEffect, useState} from "react";



function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        setIsScrolled(offset > 10);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return() => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <header className={styles.header}>
            <div className={isScrolled ? styles.headerpcboxs : styles.headerpcbox}>
            <Navbar className={'pt-3 pb-3'}>
                <Container>
                    <Navbar.Brand className={styles.logobox}>
                        <Link href={'/'}>
                            <Image src={'/main/header_logo_wh.png'} alt={'logo'} className={styles.normalimg} />
                            <Image src={'/main/header_logo_col.png'} alt={'logo'} className={styles.activeimg} />
                        </Link>
                    </Navbar.Brand>
                    <Nav className={styles.menunav}>
                        <Nav.Item className={styles.navitem}>
                            <Link href={'/company/intro'} className={'nav-link me-5'}>
                                회사소개
                            </Link>
                        </Nav.Item>
                        <Nav.Item className={styles.navitem}>
                            <Link href={'/business/ship'} className={'nav-link me-5'}>
                                사업소개
                            </Link>
                        </Nav.Item>
                        <Nav.Item className={styles.navitem}>
                            <Link href={'/quality/qm'} className={'nav-link me-5'}>
                                품질경영
                            </Link>
                        </Nav.Item>
                        <Nav.Item className={styles.navitem}>
                            <Link href={'/board/notice'} className={'nav-link me-5'}>
                                커뮤니티
                            </Link>
                        </Nav.Item>
                        <Nav.Item className={styles.navitem}>
                            <Link href={''} className={'nav-link'}>
                                문의하기
                            </Link>
                        </Nav.Item>
                    </Nav>
                    <Nav className={styles.menunav1}>
                        <Nav.Item className={styles.langitem}>
                            <span className={styles.imgspan}>
                                <Image src={'/main/language_wh.svg'} alt={'main-icon'} className={styles.normalimg} />
                                <Image src={'/main/language_bl.svg'} alt={'main-icon'} className={styles.activeimg} />
                            </span>
                            <Form.Select className={'shadow-none'}>
                                <option>KR</option>
                                <option>EN</option>
                            </Form.Select>
                        </Nav.Item>
                        <Nav.Item>
                            <Button type={'button'} className={styles.sitemapbtn}>
                                <Image src={'/main/sitemap_wh.svg'} alt={'main-icon'} className={styles.normalimg} />
                                <Image src={'/main/sitemap_bl.svg'} alt={'main-icon'} className={styles.activeimg} />
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
            </div>
        </header>
    )
}

export default Header