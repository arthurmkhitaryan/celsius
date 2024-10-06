import { strapiLanguageAdapter } from '@/utils/strapi-language-adapter';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsCategoriesApi = createApi({
  reducerPath: 'newsCategoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  }),
  endpoints: (builder) => ({
    getNewsCategories: builder.query<NewsCategory[], { locale: string }>({
      query: ({ locale }) => ({
        url: `/newsroom-categories?populate*&locale=${strapiLanguageAdapter(locale)}`,
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
      }),
      transformResponse: (response: { data: any[] }) =>
        response.data.map((item) => ({
          id: item.id,
          ...item.attributes,
        })),
    }),
  }),
});

export const { useGetNewsCategoriesQuery } = newsCategoriesApi;
