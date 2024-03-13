// pages/api/logout.js
import { NextApiRequest, NextApiResponse } from 'next';
import { signOut } from 'next-auth/react';

export default async function logout(req: NextApiRequest, res: NextApiResponse) {
    // 로그아웃 처리를 수행합니다. 이 때 `redirect: false` 옵션을 사용합니다.
    await signOut({ redirect: false });

    // 클라이언트 측에 성공 응답을 보내고, 원하는 URL로 리다이렉션하도록 지시합니다.
    res.redirect('/'); // 홈페이지나 로그인 페이지로 리다이렉션할 URL을 지정합니다.
}
