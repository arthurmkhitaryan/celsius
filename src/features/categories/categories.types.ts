interface Category {
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
  category: Category[];
}

interface CategoriesState {
  categories: Categories[];
}
