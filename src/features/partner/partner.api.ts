import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const partnerApi = createApi({
  reducerPath: 'partnerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    createPartner: builder.mutation<Partner, Partner>({
      query: (partnerData) => ({
        url: '/partner',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: partnerData,
      }),
      transformResponse: (response: { data: any }) => response.data.attributes,
    }),
  }),
});

export const { useCreatePartnerMutation } = partnerApi;
