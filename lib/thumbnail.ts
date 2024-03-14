export function extractFirstImageUrl(content: string): string | null  {
    const regex = /<img.*?src="(.*?)"/;
    const match = content.match(regex);
    return match ? match[1] : null;
}