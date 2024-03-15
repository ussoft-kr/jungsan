import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Image} from "react-bootstrap";

function Test() {
    const [thumbnailUrl, setThumbnailUrl] = useState('');


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

    useEffect(() => {
        async function loadThumbnail() {
            // 비메오 영상 URL을 고정값으로 설정합니다.
            const fixedVideoUrl = "https://vimeo.com/922803402?h=008b8eab25";
            // fetchVimeoThumbnail 함수를 호출하여 썸네일 URL을 가져옵니다.
            const url = await fetchVimeoThumbnail(fixedVideoUrl);
            // 상태에 썸네일 URL을 저장합니다.
            setThumbnailUrl(url);
        }

        loadThumbnail();
    }, []);

    return (
        <div>
            {thumbnailUrl ? (
                <Image src={thumbnailUrl} alt="Video Thumbnail" />
            ) : (
                <p>Loading thumbnail...</p>
            )}
        </div>
    );
}

export default Test;
