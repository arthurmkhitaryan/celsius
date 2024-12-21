import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getImageUrl } from '@/utils/getImageFullUrl';
import { strapiLanguageAdapter } from '@/utils/strapi-language-adapter';
import { Pridi } from 'next/font/google';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query<Categories[] | null, { locale: string }>({
      query: ({ locale }) => {
        return {
          url: `categories?populate[image]=*&populate[icon]=*&populate[products][populate][images]=*&filters[isFavorite][$eq]=true&filters[products][isFavorite][$eq]=true&locale=${strapiLanguageAdapter(locale)}`,
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
          },
        };
      },
      transformResponse: (response: { data: any }) => {
        const data = response.data;

        if (!data) return null;
        console.log({ data });
        return data.map((category: any) => ({
          id: category.id,
          name: category.attributes.name,
          icon: getImageUrl(category.attributes.icon),
          products: category.attributes.products.data
            .filter((product: any) => product.attributes.isFavorite)
            .map((product: any) => ({
              id: product.id,
              slug: product.attributes.slug,
              name: product.attributes.name,
            })),
        }));
      },
    }),
    getCategoryById: builder.query<
      Categories | null,
      { categoryId: string | number; locale: string }
    >({
      query: ({ categoryId, locale }) => {
        return {
          url: `categories?populate[image]=*&populate[icon]=*&populate[products][populate][images]=*&filters[slug][$eq]=${categoryId}&filters[isFavorite][$eq]=true&filters[products][isFavorite][$eq]=true&locale=${strapiLanguageAdapter(locale)}`,
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
          products: data.attributes.products.data
            .filter((product: any) => product.attributes.isFavorite)
            .map((product: any) => ({
              id: product.id,
              name: product.attributes.name,
              description: product.attributes.description,
              image: getImageUrl(product.attributes.images.data[0]),
            })),
        };
      },
    }),
  }),
});

export const { useGetCategoryByIdQuery, useGetAllCategoriesQuery } =
  categoriesApi;
