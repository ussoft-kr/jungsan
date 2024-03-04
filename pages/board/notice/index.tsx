import React, {useEffect, useState} from 'react';
import styles from '@/styles/Board.module.css';
import {NextPage} from "next";
import Layout from "@/component/common/Layout";
import SubHeader from "@/component/common/SubHeader";
import BoardSearch from "@/component/board/BoardSearch";
import {Button, Container, Form} from "react-bootstrap";
import Link from "next/link";
import axios from "axios";


export interface NoticeTypes {
    id: number;
    title: string;
    content: string;
    attachments: { id: number; filePath: string; fileName: string; }[];
    postedAt: Date;
}

const NoticeIndex:NextPage = () => {

    const [notices, setNotices] = useState<NoticeTypes[]>([]); // Notice[] 타입으로 초기화
    const [checkedState, setCheckedState] = useState<{ [key: number]: boolean }>({});



    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const response = await axios.get('/api/notice/noticelist');
                setNotices(response.data);
            } catch (error) {
                console.log('목록을 불러오는데 실패하였습니다', error);
            }
        };
        fetchNotices();
    }, []);

    const handleCheck = (id: number, checked: boolean) => {
        setCheckedState(prevState => ({
            ...prevState,
            [id]: checked
        }));
    };

    const handleDeleteChecked = async () => {
        const isConfirmed = window.confirm("정말 삭제하겠습니까? 삭제된 데이터들은 복구가 불가능합니다.");

        if (!isConfirmed) {
            // 사용자가 '아니오'를 클릭한 경우, 함수 실행 종료
            return;
        }

        // 체크된 ID들을 숫자 배열로 변환
        const checkedIds: number[] = Object.entries(checkedState).reduce((acc: number[], [id, isChecked]) => {
            if (isChecked) acc.push(Number(id));
            return acc;
        }, []);

        try {
            // DELETE 요청을 /api/notice/delete로 보내고, 체크된 게시물 ID들을 body에 포함
            const response = await axios.delete('/api/notice/noticedelete', {
                data: { ids: checkedIds }, // axios.delete 메서드에서 body 데이터는 `data` 키를 사용하여 전달
            });

            // 삭제된 항목들을 상태에서 제거
            setNotices(prevNotices => prevNotices.filter(notice => !checkedIds.includes(notice.id)));

            // 체크 상태 초기화
            setCheckedState({});

            window.alert("삭제되었습니다.");
            // 성공적으로 삭제 후 필요한 상태 업데이트나 UI 반영
        } catch (error) {
            console.error('Failed to delete checked notices', error);
            window.alert("삭제에 실패했습니다."); // 실패 알림
        }
    };






    return (
        <Layout>
            <SubHeader
                imgsrc={'/sub/sub_img4.jpg'}
                title={'공지사항'}
                menuitem={[
                    {id: 1, menutitle: '공지사항', href: '/community/notice'},
                    {id: 2, menutitle: '기술자료', href: '/community/technic'},
                    {id: 3, menutitle: '카탈로그', href: '/community/catalog'},
                    {id: 4, menutitle: '회사소식', href: '/community/video'},
                ]}
            />
            <div className={styles.subwrap}>
                <Container>
                    <BoardSearch />
                    <div className={styles.boardtablebox}>
                        <table>
                            <caption>전체 <span>10</span>건</caption>
                            <thead>
                            <tr>
                                <th>

                                </th>
                                <th>No</th>
                                <th>제목</th>
                                <th>첨부파일</th>
                                <th>작성일</th>
                            </tr>
                            </thead>
                            <tbody>
                            {notices.map((item, index) => (
                                <tr key={item.id}>
                                    <td className={styles.allcheck}>
                                        <Form.Check
                                            type={'checkbox'}
                                            checked={checkedState[item.id] || false}
                                            onChange={(e) => handleCheck(item.id, e.target.checked)}
                                        />
                                    </td>
                                    <td className={styles.numtd}>
                                        {item.id}
                                    </td>
                                    <td className={styles.titletd}>
                                        <Link href={`/board/notice/${item.id}`}>
                                            {item.title}
                                        </Link>
                                    </td>
                                    <td className={styles.atttd}>
                                        {item.attachments.length > 0 ? '첨부파일 있음' : '없음'}
                                    </td>
                                    <td className={styles.datetd}>
                                        {new Date(item.postedAt).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                            </tbody>

                        </table>
                    </div>
                    <div className={styles.buttonbox}>
                        <Button type={'button'}>
                            <Link href={'/board/notice/write'}>
                                글쓰기
                            </Link>
                        </Button>
                        <Button type={'button'} onClick={handleDeleteChecked}>삭제</Button>
                    </div>
                </Container>
            </div>
        </Layout>
    )
}

export default NoticeIndex