import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getImageUrl } from '@/utils/getImageFullUrl';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL }),
  endpoints: (builder) => ({
    getCategoryById: builder.query<Categories | null, { categoryId: string | number }>({
      query: ({ categoryId }) => {
        return {
          url: `categories?populate[image]=*&populate[icon]=*&populate[category][populate][image]=*&filters[id][$eq]=${categoryId}`,
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
          },
        };
      },
      transformResponse: (response: { data: any }) => {
        const [data] = response.data;
        if (!data) return null;
        return {
          id: data.id,
          name: data.attributes.name,
          title: data.attributes.title,
          description: data.attributes.description,
          image: getImageUrl(data.attributes.image),
          icon: getImageUrl(data.attributes.icon),
          category: data.attributes.category.map((category: any) => ({
            name: category.name,
            description: category.description,
            image: getImageUrl(category.image)
          }))
        }
      },
    }),
  }),
});

export const { useGetCategoryByIdQuery } = categoriesApi;
