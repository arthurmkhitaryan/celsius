import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getImageUrl } from '@/utils/getImageFullUrl';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL }),
  endpoints: (builder) => ({
    getCategoryById: builder.query<Categories | null, { categoryId: string | number }>({
      query: ({ categoryId }) => {
        return {
          url: `categories?populate[image]=*&populate[icon]=*&populate[products][populate][images]=*&filters[id][$eq]=${categoryId}`,
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
          },
        };
      },
      transformResponse: (response: { data: any }) => {
        const [data] = response.data;

        if (!data) return null;

        return {
          id: data.id,
          name: data.attributes.name,
          title: data.attributes.title,
          description: data.attributes.description,
          image: getImageUrl(data.attributes.image),
          icon: getImageUrl(data.attributes.icon),
          products: data.attributes.products.data.map((product: any) => ({
            id: product.id,
            name: product.attributes.name,
            description: product.attributes.description,
            image: getImageUrl(product.attributes.images.data[0])
          }))
        }
      },
    }),
  }),
});

export const { useGetCategoryByIdQuery } = categoriesApi;
