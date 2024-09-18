export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  liter: number;
}

export interface ProductsState {
  products: Product[];
}
