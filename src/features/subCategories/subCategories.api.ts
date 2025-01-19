import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getImageUrl } from '@/utils/getImageFullUrl';
import { strapiLanguageAdapter } from '@/utils/strapi-language-adapter';

export const subCategoriesApi = createApi({
  reducerPath: 'subCategoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query<SubCategories[] | null, { locale: string }>(
      {
        query: ({ locale }) => {
          return {
            url: `subCategories?populate[image]=*&populate[icon]=*&populate[products][populate][images]=*&filters[isFavorite][$eq]=true&filters[products][isFavorite][$eq]=true&locale=${strapiLanguageAdapter(locale)}`,
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
            },
          };
        },
        transformResponse: (response: { data: any }) => {
          const data = response.data;

          if (!data) return null;
          return data.map((subCategory: any) => ({
            id: subCategory.id,
            name: subCategory.attributes.name,
            products: subCategory.attributes.products.data
              .filter((product: any) => product.attributes.isFavorite)
              .map((product: any) => ({
                id: product.id,
                slug: product.attributes.slug,
                name: product.attributes.name,
              })),
          }));
        },
      },
    ),
    getSubCategoryById: builder.query<
      SubCategories | null,
      { subCategoryId: string | number; locale: string }
    >({
      query: ({ subCategoryId, locale }) => {
        return {
          url: `categories?populate[image]=*&populate[icon]=*&populate[products][populate][images]=*&filters[slug][$eq]=${subCategoryId}&filters[isFavorite][$eq]=true&filters[products][isFavorite][$eq]=true&locale=${strapiLanguageAdapter(locale)}`,
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

export const { useGetSubCategoryByIdQuery, useGetAllCategoriesQuery } =
  subCategoriesApi;
