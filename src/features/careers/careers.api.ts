import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const careersApi = createApi({
  reducerPath: 'careersApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    createCareer: builder.mutation<any, FormData>({
      query: (formData) => ({
        url: '/careers',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
          // Content-Type is omitted because `FormData` sets it automatically
        },
        body: formData,
      }),
      transformResponse: (response: { data: any }) => response.data,
    }),
    getCareers: builder.query<Career[], void>({
      query: () => 'careers',
      transformResponse: (response: { data: any[] }) =>
        response.data.map((item) => ({
          id: item.id,
          ...item.attributes,
        })),
    }),
    sendCV: builder.mutation<any, File>({
      query: (attachment) => {
        const formData = new FormData();
        formData.append('attachment', attachment);

        return {
          url: '/careers/send-cv',
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
          },
          body: formData,
        };
      },
      transformResponse: (response: { data: any }) => response,
    }),
  }),
});

export const {
  useGetCareersQuery,
  useSendCVMutation,
  useCreateCareerMutation,
} = careersApi;
