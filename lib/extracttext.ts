// lib/extractText.ts
// 비메오 비디오 URL을 추출하고 변환하는 함수
export function extractVimeoUrl(content: string): string | null {
    const regex = /<iframe.*?src="https:\/\/player\.vimeo\.com\/video\/(\d+).*?"/;
    const match = content.match(regex);
    if (match && match[1]) {
        // match[1]에는 비메오 비디오의 ID가 포함
        return `https://vimeo.com/${match[1]}`;
    }
    return null;
}
