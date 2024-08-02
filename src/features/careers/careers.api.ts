import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const careersApi = createApi({
  reducerPath: 'careersApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    getCareers: builder.query<Career[], void>({
      query: () => 'careers',
      transformResponse: (response: { data: any[] }) =>
        response.data.map((item) => ({
          id: item.id,
          ...item.attributes,
        })),
    }),
  }),
});

export const { useGetCareersQuery } = careersApi;
