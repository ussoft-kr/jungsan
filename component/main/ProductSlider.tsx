import React from 'react';
import styles from "styles/Main.module.css";
import {Button,  Container, Image} from "react-bootstrap";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductSlider() {

    const productsettings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 6, // 한 번에 보여줄 슬라이드 개수
        slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 개수
        autoplay: true,
        autoplaySpeed: 100,
        arrows: false,
        margin: 10,
        fade: false, // fade 옵션을 false로 설정하거나 제거
        responsive: [

            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    return (
        <div className={styles.contentbody}>
            <Container fluid>
                <Slider {...productsettings}>
                    <div className={styles.slideitembox}>
                        <div className={styles.infobox}>
                            <Link href={''}>
                                <Image src={'main/main_product01.png'} alt={'main-img'}/>
                                <div className={styles.absolutebox}>
                                    <p>CONNECTING ROD STUD</p>
                                    <span className={styles.iconspan}>
                                                <Image src={'main/more_detail03.svg'} alt={'main-img'}/>
                                            </span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.slideitembox}>
                        <div className={styles.infobox}>
                            <Link href={''}>
                                <Image src={'main/main_product02.png'} alt={'main-img'}/>
                                <div className={styles.absolutebox}>
                                    <p>MAIN BEARING STUD</p>
                                    <span className={styles.iconspan}>
                                                <Image src={'main/more_detail03.svg'} alt={'main-img'}/>
                                            </span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.slideitembox}>
                        <div className={styles.infobox}>
                            <Link href={''}>
                                <Image src={'main/main_product03.png'} alt={'main-img'}/>
                                <div className={styles.absolutebox}>
                                    <p>
                                        HEAVY HEX BOLT<br/>
                                        (HEXAGON BOLT)<br/>
                                        HEX NUT
                                    </p>
                                    <span className={styles.iconspan}>
                                                <Image src={'main/more_detail03.svg'} alt={'main-img'}/>
                                            </span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.slideitembox}>
                        <div className={styles.infobox}>
                            <Link href={''}>
                                <Image src={'main/main_product04.png'} alt={'main-img'}/>
                                <div className={styles.absolutebox}>
                                    <p>C12PT BOLT & NUT</p>
                                    <span className={styles.iconspan}>
                                                <Image src={'main/more_detail03.svg'} alt={'main-img'}/>
                                            </span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.slideitembox}>
                        <div className={styles.infobox}>
                            <Link href={''}>
                                <Image src={'main/main_product05.png'} alt={'main-img'}/>
                                <div className={styles.absolutebox}>
                                    <p>HEADER PLUG</p>
                                    <span className={styles.iconspan}>
                                                <Image src={'main/more_detail03.svg'} alt={'main-img'}/>
                                            </span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.slideitembox}>
                        <div className={styles.infobox}>
                            <Link href={''}>
                                <Image src={'main/main_product06.png'} alt={'main-img'}/>
                                <div className={styles.absolutebox}>
                                    <p>욕실폰 (JSB-101-A)</p>
                                    <span className={styles.iconspan}>
                                                <Image src={'main/more_detail03.svg'} alt={'main-img'}/>
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </Slider>

                <div className={styles.morebox}>
                    <Button type={'button'} className={styles.morebtn}>
                        <Link href={'/business/product'}>
                            <span className={styles.textspan}>
                                MORE DETAIL
                            </span>
                            <span className={styles.imgspan}>
                                <Image src={'main/more_detail_plus.svg'} alt={'main-img'}/>
                            </span>
                        </Link>
                    </Button>
                </div>
            </Container>
        </div>
    )
}

export default ProductSlider