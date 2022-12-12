/* The NewsItem class has a bunch of properties that are all strings or undefined. */
export class NewsItem {
    author: string | undefined;
    description: string | undefined;
    content: string | undefined | null;
    publishedAt: string | Date | undefined;
    urlToImage: string | undefined | null;
    url: string | undefined;
    title: string | undefined;
    source: object | undefined;
}