import { strapiLanguageAdapter } from '@/utils/strapi-language-adapter';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsroomApi = createApi({
  reducerPath: 'newsroomApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  }),
  endpoints: (builder) => ({
    getNews: builder.query<News[], { locale: string }>({
      query: ({ locale }) => ({
        url: `/news?populate=smallImage&populate=largeImage&populate=category&locale=${strapiLanguageAdapter(locale)}`,
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

export const { useGetNewsQuery } = newsroomApi;
