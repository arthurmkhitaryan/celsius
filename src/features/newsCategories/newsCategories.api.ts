import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsCategoriesApi = createApi({
  reducerPath: 'newsCategoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  }),
  endpoints: (builder) => ({
    getNewsCategories: builder.query<NewsCategory[], void>({
      query: () => ({
        url: '/newsroom-categories?populate*',
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
