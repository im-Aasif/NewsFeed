export class NewsResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}

export class ArticleSource {
    id: string;
    name: string;
}

export class Article {
    source: ArticleSource;
    author?: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
    content: string;
}
