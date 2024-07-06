import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products',
      transformResponse: (response: { data: any[] }) =>
        response.data.map((item) => ({
          id: item.id,
          ...item.attributes,
        })),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
