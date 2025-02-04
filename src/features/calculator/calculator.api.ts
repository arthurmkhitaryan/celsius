import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const calculatorApi = createApi({
  reducerPath: 'calculatorApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    createCalculator: builder.mutation<
      CalculatorInterface,
      CalculatorInterface
    >({
      query: (calculatorData) => ({
        url: '/calculator/create',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: calculatorData,
      }),
      transformResponse: (response: { data: any }) => response.data.attributes,
    }),
  }),
});

export const { useCreateCalculatorMutation } = calculatorApi;
