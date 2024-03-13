import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';

const LogoutPage = () => {
    const [loggedOut, setLoggedOut] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (!loggedOut) {
            signOut({ redirect: false }).then(() => {
                alert('로그아웃되었습니다.');
                setLoggedOut(true);
                window.location.href = '/'; // 페이지를 리로드하고 홈으로 이동
            });
        }
    }, [loggedOut, router]);

    return null; // 로그아웃 처리 중 화면에는 아무것도 표시하지 않음
};

export default LogoutPage;
