import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactUsApi = createApi({
  reducerPath: 'contactUsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    createContactUs: builder.mutation<ContactUs, ContactUs>({
      query: (contactUsData) => ({
        url: '/contact-us',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: contactUsData,
      }),
      transformResponse: (response: { data: any }) => response.data.attributes,
    }),
  }),
});

export const { useCreateContactUsMutation } = contactUsApi;
