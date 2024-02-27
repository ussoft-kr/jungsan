import React from 'react';
import styles from '@/styles/Process.module.css';
import {NextPage} from "next";
import Layout from "@/component/common/Layout";
import SubHeader from "@/component/common/SubHeader";


const Process:NextPage = () => {
    return (
        <Layout>
            <SubHeader
                imgsrc={'/sub/sub_img3.jpg'}
                title={'생산공정도'}
                menuitem={[
                    {id: 1, menutitle: '품질경영 체계', href: '/quality/qm'},
                    {id: 2, menutitle: '인증서', href: '/quality/certification'},
                    {id: 3, menutitle: '생산공정도', href: '/quality/process'},
                ]}
            />
            <div className={styles.subwrap}>

            </div>
        </Layout>
    )
}

export default Process