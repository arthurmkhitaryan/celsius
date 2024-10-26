interface GeneralSpecification {
  title: string;
}

interface DetailsSpecification {
  key: string;
  value: string;
}

interface FullSpecification {
  general: GeneralSpecification[];
  details: DetailsSpecification[];
}

interface Faqs {
  id: number;
  key: string;
  value: string;
}

interface GeneralParam {
  id: number;
  title: string;
  image: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  banner: string;
  fullSpecification: FullSpecification;
  portfolio: string[];
  faqs: Faqs[];
  code: string;
  mainProductName: string;
  params: string;
  generalParams: GeneralParam[];
}

export interface ProductState {
  product: Product[];
}
