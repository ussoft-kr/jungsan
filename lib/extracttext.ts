// lib/extractText.ts
export function extractText(content: string): string {
    const regex = /<p>(.*?)<\/p>/gs;
    // Array.from()을 사용하여 IterableIterator를 배열로 변환
    const matches = Array.from(content.matchAll(regex));
    const texts = matches.map(match => match[1].trim()).filter(text => text);

    return texts.join(' ');
}
