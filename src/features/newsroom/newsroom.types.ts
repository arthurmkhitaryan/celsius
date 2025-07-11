interface News {
  id: number;
  title: string;
  smallDescription: string;
  isBanner: boolean;
  author: string;
  smallImage: any;
  largeImage: any;
  slug: number | string;
  content: string;
  category: NewsCategory;
  publishedAt: Date;
  createdAt?: Date;
}

interface NewsCategory {
  id: number;
  name: string;
}
