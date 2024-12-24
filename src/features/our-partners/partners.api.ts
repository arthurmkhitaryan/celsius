import { strapiLanguageAdapter } from '@/utils/strapi-language-adapter';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const partnersApi = createApi({
  reducerPath: 'partnersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  }),
  endpoints: (builder) => ({
    getOurPartners: builder.query({
      query: () => ({
        url: '/our-partners?populate=logo',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
      }),
      transformResponse: (response: { data: any }) => {
        console.log('API Response:', response);
        return {
          data: response.data.map((item: any) => ({
            id: item.id,
            logo: item.attributes.logo.data.attributes.url,
          })),
        };
      },
    }),
  }),
});

export const { useGetOurPartnersQuery } = partnersApi;
