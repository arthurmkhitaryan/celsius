import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getImageUrl } from '@/utils/getImageFullUrl';
import { strapiLanguageAdapter } from '@/utils/strapi-language-adapter';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query<Categories[] | null, { locale: string }>({
      query: ({ locale }) => ({
        url: `categories?populate[image]=*&populate[icon]=*&populate[sub_categories][populate][image]=*&filters[isFavorite][$eq]=true&locale=${strapiLanguageAdapter(locale)}`,
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
      }),
      transformResponse: (response: { data: any }) => {
        const data = response.data;
        if (!data) return null;

        return data.map((category: any) => ({
          id: category.id,
          name: category.attributes.name,
          title: category.attributes.title || null,
          description: category.attributes.description || null,
          slug: category.attributes.slug,
          image: getImageUrl(category.attributes.image),
          icon: getImageUrl(category.attributes.icon),
          subCategories:
            category.attributes.sub_categories?.data.map(
              (subCategory: any) => ({
                id: subCategory.id,
                name: subCategory.attributes.name,
                isFavorite: subCategory.attributes.isFavorite,
                products:
                  subCategory.attributes.products?.data
                    .filter((product: any) => product.attributes.isFavorite)
                    .map((product: any) => ({
                      id: product.id,
                      slug: product.attributes.slug,
                      name: product.attributes.name,
                      image: getImageUrl(product.attributes.image),
                    })) || [],
              }),
            ) || [],
        }));
      },
    }),
    getCategoryById: builder.query<
      Categories | null,
      { categoryId: string | number; locale: string }
    >({
      query: ({ categoryId, locale }) => ({
        url: `categories?populate[image]=*&populate[mobileImage]=*&populate[icon]=*&populate[sub_categories][populate][products][populate][images]=*&filters[slug][$eq]=${categoryId}&locale=${strapiLanguageAdapter(locale)}`,
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
      }),
      transformResponse: (response: { data: any }) => {
        const [data] = response.data;
        if (!data) return null;

        // Сбор всех продуктов из subCategories
        const allProducts =
          data.attributes.sub_categories?.data.flatMap((subCategory: any) =>
            subCategory.attributes.products?.data
              .filter((product: any) => product.attributes.isFavorite)
              .map((product: any) => ({
                id: product.id,
                slug: product.attributes.slug,
                name: product.attributes.name,
                description: product.attributes.description,
                image: getImageUrl(product.attributes.images.data[0]),
              })),
          ) || [];

        return {
          id: data.id,
          name: data.attributes.name,
          title: data.attributes.title || null,
          description: data.attributes.description || null,
          image: getImageUrl(data.attributes.image),
          mobileImage: getImageUrl(data.attributes.mobileImage),
          slug: data.attributes.slug,
          icon: getImageUrl(data.attributes.icon),
          products: allProducts,
          subCategories:
            data.attributes.sub_categories?.data.map((subCategory: any) => ({
              id: subCategory.id,
              name: subCategory.attributes.name,
              isFavorite: subCategory.attributes.isFavorite,
            })) || [],
        };
      },
    }),
  }),
});

export const { useGetCategoryByIdQuery, useGetAllCategoriesQuery } =
  categoriesApi;
