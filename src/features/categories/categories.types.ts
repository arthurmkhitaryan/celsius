interface Product {
  id: number;
  name: string;
  description: string;
  image: any;
  slug: string;
}

interface SubCategory {
  id: number;
  name: string;
  isFavorite: boolean;
  products: Product[];
}

interface Categories {
  id: number;
  name: string;
  title: string;
  image: any;
  icon: any;
  slug: number;
  description: string;
  products: Product[];
  subCategories: SubCategory[];
}

interface CategoriesState {
  categories: Categories[];
}
