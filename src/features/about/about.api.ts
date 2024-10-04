import { strapiLanguageAdapter } from '@/utils/strapi-language-adapter';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const aboutApi = createApi({
  reducerPath: 'aboutApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  }),
  endpoints: (builder) => ({
    getAboutContent: builder.query<About, { locale: string }>({
      query: ({ locale }) => ({
        url: `/about?populate[banner]=*&populate[ourStores][populate]=OurStoresItem.image&populate[ourTeam][populate]=ourTeamItem.image&populate[whoWeAre][populate]=image&locale=${strapiLanguageAdapter(locale)}`,
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
      }),
      transformResponse: (response: { data: any }) => response.data.attributes,
    }),
  }),
});

export const { useGetAboutContentQuery } = aboutApi;
