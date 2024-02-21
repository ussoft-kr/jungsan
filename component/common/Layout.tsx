import styles from '@/styles/Layout.module.css';
import {PropsWithChildren} from "react";
import TopHead from "@/component/common/TopHead";
import Header from "@/component/common/Header";
import Footer from "@/component/common/Footer";

function Layout({children} : PropsWithChildren) {
    return (
        <div className={styles.Wrap}>
            <TopHead />
            <Header />
            <div className={styles.ContentWrap}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout