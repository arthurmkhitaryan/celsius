import { strapiLanguageAdapter } from '@/utils/strapi-language-adapter';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsroomApi = createApi({
  reducerPath: 'newsroomApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  }),
  endpoints: (builder) => ({
    getNews: builder.query<{ data: News[], totalCount: number }, { locale: string; page: number; pageSize: number, category?: number }>({
      query: ({ locale, page, pageSize, category }) => ({
        url: `/news?populate=smallImage&populate=largeImage&populate=category&locale=${strapiLanguageAdapter(locale)}&pagination[page]=${page}&pagination[pageSize]=${pageSize}` + (category ? `&filters[category][id][$eq]=${category}` : ''),
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
      }),
      transformResponse: (response: { data: any[], meta: { pagination: { total: number } } }) => ({
        data: response.data.map((item) => ({
          id: item.id,
          slug: item.slug,
          ...item.attributes,
        })),
        totalCount: response.meta.pagination.total,
      }),
    }),

    getNewsWithBanner: builder.query<News, { locale: string }>({
      query: ({ locale }) => ({
        url: `/news?populate=smallImage&populate=largeImage&populate=category&filters[isBanner][$eq]=true&locale=${strapiLanguageAdapter(locale)}`,
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
      }),
      transformResponse: (response: { data: any[] }) => {
        const banner = response.data[0];
        return {
          id: banner.id,
          slug: banner.slug,
          ...banner.attributes,
        };
      },
    }),

    getNewsById: builder.query<News, { id: number; locale: string }>({
      query: ({ id, locale }) => ({
        url: `/news`,
        params: {
          'populate[smallImage]': 'true',
          'populate[largeImage]': 'true',
          'populate[category]': 'true',
          'filters[slug][$eq]': id,
          'locale': strapiLanguageAdapter(locale)
        },
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
      }),
      transformResponse: (response: { data: any }) => ({
        id: response.data.id,
        ...response.data.attributes,
      }),
    }),
  }),
});

export const { useGetNewsQuery, useGetNewsWithBannerQuery, useGetNewsByIdQuery } = newsroomApi;