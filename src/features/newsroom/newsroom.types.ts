interface News {
  id: number;
  title: string;
  smallDescription: string;
  isBanner: boolean;
  author: string;
  smallImage: any;
  largeImage: any;
  content: string;
  category: NewsCategory;
  createdAt: Date;
}

interface NewsCategory {
  id: number;
  name: string;
}
