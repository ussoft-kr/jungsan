export interface ImageInfo {
    url: string;
    filename: string;
}

export const extractImagesFromHTML = (html: string): ImageInfo[] => {
    const imgTags = html.match(/<img [^>]*src="[^"]*"[^>]*>/gm) || [];
    return imgTags.map(img => {

        const urlMatch = img.match(/src="([^"]*)"/);
        const url = urlMatch ? urlMatch[1] : '';
        const filenameMatch = url.split('/').pop();
        const filename = filenameMatch || '';
        return { url, filename };
    });
};
