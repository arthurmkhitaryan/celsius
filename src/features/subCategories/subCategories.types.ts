interface Product {
  id: number;
  name: string;
  description: string;
  image: any;
  slug: string;
}

interface SubCategories {
  id: number;
  name: string;
  products: Product[];
}

interface SubCategoriesState {
  subCategories: SubCategories[];
}
