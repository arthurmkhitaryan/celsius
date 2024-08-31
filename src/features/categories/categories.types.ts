interface Product {
  name: string;
  description: string;
  image: any;
}

interface Categories {
  id: number;
  name: string;
  title: string;
  image: any;
  icon: any;
  description: string;
  products: Product[];
}

interface CategoriesState {
  categories: Categories[];
}
