
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const videoUrl = req.query.url as string;
    // 수정된 정규표현식으로 비디오 ID 추출
    const regex = /vimeo\.com\/(\d+)/;
    const matches = videoUrl.match(regex);

    if (matches && matches[1]) {
        const videoId = matches[1];
        const oEmbedUrl = `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`;

        try {
            const response = await axios.get(oEmbedUrl);
            const thumbnailUrl = response.data.thumbnail_url;

            res.status(200).json({ thumbnailUrl });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error fetching Vimeo thumbnail');
        }
    } else {
        res.status(400).send('Invalid Vimeo video URL');
    }
}

