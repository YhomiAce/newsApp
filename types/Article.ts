export interface Article {
  source: Source;
  author: any;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content: string;
}

export interface Source {
  id: any;
  name: string;
}

export interface NewsResponse {
  articles: Article[];
}
