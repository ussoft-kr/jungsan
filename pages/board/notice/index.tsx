import React, {useEffect, useState} from 'react';
import styles from 'styles/Board.module.css';
import {NextPage} from "next";
import Layout from "component/common/Layout";
import SubHeader from "component/common/SubHeader";
import BoardSearch from "component/board/BoardSearch";
import {Button, Container, Form, Image} from "react-bootstrap";
import Link from "next/link";
import axios from "axios";
import {useRouter} from "next/router";
import Pagenation from "component/board/Pagenation";
import {NoticeTypes} from "types/type";
import {useSession} from "next-auth/react";
import  { extractFirstImageUrl } from 'lib/thumbnail';





const NoticeIndex:NextPage = () => {

    const [notices, setNotices] = useState<NoticeTypes[]>([]); // Notice[] 타입으로 초기화
    const [checkedState, setCheckedState] = useState<{ [key: number]: boolean }>({});
    const [totalNotices, setTotalNotices] = useState(0);
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // 한 페이지에 표시할 항목 수
    const totalPages = Math.ceil(totalNotices / itemsPerPage); // 총 페이지 수 계산

    const { data: session } = useSession();

    useEffect(() => {
        fetchNotices();
    }, [router.query.search]);

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






    const fetchNotices = async (page: number = currentPage) => {
        // 현재 페이지 번호와 검색 쿼리를 기반으로 쿼리 파라미터를 구성합니다.
        const searchQuery = router.query.search;
        const queryParam = `${searchQuery ? `search=${encodeURIComponent(searchQuery as string)}&` : ''}page=${page}`;
        try {
            const response = await axios.get(`/api/notice/noticelist?${queryParam}`);
            setNotices(response.data.notices);
            setTotalNotices(response.data.total);
            // 페이지 변경 후 URL의 페이지 쿼리 파라미터 업데이트 (선택적)
            router.push(`/board/notice?${queryParam}`, undefined, { shallow: true });
        } catch (error) {
            console.error('목록을 불러오는데 실패하였습니다', error);
        }
    };

    const handleSearch = (searchTerm: string) => {
        // URL을 업데이트하여 검색어를 반영
        router.push(`/board/notice?search=${encodeURIComponent(searchTerm)}`);
    };

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

        if (checkedIds.length === 0) {
            window.alert("게시물을 체크 하신 후 삭제버튼을 클릭 하시기 바랍니다.");
            return; // 함수 종료
        }

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

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        fetchNotices(pageNumber);
    };



    return (
        <Layout>
            <SubHeader
                imgsrc={'/sub/sub_img4.jpg'}
                title={'회사소식'}
                menuitem={[
                    {id: 1, menutitle: '회사소식', href: '/board/notice'},
                    {id: 2, menutitle: '기술자료', href: '/board/technic'},
                    {id: 3, menutitle: '카탈로그', href: '/community/catalog'},
                ]}
            />
            <div className={styles.subwrap}>
                <Container className={styles.container}>
                    <BoardSearch onSearch={handleSearch} />
                    <div className={styles.boardwebzinebox}>
                        <table>
                            <caption>전체 <span>{totalNotices}</span>건</caption>
                            <tbody>
                            {notices.map((item, index) => (
                            <tr key={index}>

                                <td className={styles.thumbnailtd}>
                                    {session ?
                                    <Form.Check
                                        type={'checkbox'}
                                        checked={checkedState[item.id] || false}
                                        onChange={(e) => handleCheck(item.id, e.target.checked)}
                                        className={styles.checkdelete}
                                    />
                                        : <></>
                                    }
                                    <Image src={extractFirstImageUrl(item.content) || '/sub/logo_no-thumbnail.jpg'} alt="Thumbnail" />
                                </td>
                                <td className={styles.infotd}>
                                        <div className={styles.detailbox}>
                                            <Link href={`/board/notice/${item.id}`}>
                                                <span className={styles.idspan}>No.{item.id}</span>
                                                <strong className={styles.titlestrong}>{item.title}</strong>
                                                <span className={styles.datespan}>{new Date(item.postedAt).toLocaleDateString()}</span>
                                            </Link>
                                        </div>
                                </td>
                            </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    {session
                        ?
                        <div className={styles.buttonbox}>
                            <Button type={'button'} className={styles.writebtn}>
                                <Link href={'/board/notice/write'}>
                                    글쓰기
                                </Link>
                            </Button>
                            <Button type={'button'} onClick={handleDeleteChecked}
                                    className={styles.deletebtn}>선택삭제</Button>
                        </div>
                        :

                        <>
                        </>
                    }
                    <Pagenation currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
                </Container>
            </div>
        </Layout>
    )
}

export default NoticeIndex