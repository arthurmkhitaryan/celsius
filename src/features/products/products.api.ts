import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getImageUrl } from '@/utils/getImageFullUrl';
import { strapiLanguageAdapter } from '@/utils/strapi-language-adapter';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  slug: number;
  liter: number;
  params: string;
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<
      {
        data: Product[];
        totalCount: number;
      },
      {
        locale: string;
        limit?: number;
        page?: number;
        excludeId?: number | string;
        subCategories?: string[];
        productTypes?: string[];
        role?: string;
      }
    >({
      query: ({ limit = 14, page = 1, excludeId, productTypes, subCategories, locale }) => {
        const params = new URLSearchParams();

        params.append('pagination[limit]', limit.toString());
        params.append('pagination[start]', ((page - 1) * limit).toString());

        if (excludeId) {
          params.append('filters[slug][$ne]', excludeId.toString());
        }

        let index = 0;
        productTypes?.forEach((type) =>
          params.append(`filters[$or][${index++}][productTypes][title][$eq]`, type)
        );
        subCategories?.forEach((subcategory) =>
          params.append(`filters[$or][${index++}][sub_category][name][$eq]`, subcategory)
        );

        return {
          url: `products?${params.toString()}`,
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
          },
          params: {
            'populate[images]': 'true',
            'populate[banner]': 'true',
            'populate[fullSpecification][populate][general]': 'true',
            'populate[fullSpecification][populate][details]': 'true',
            'populate[portfolio][populate][images]': 'true',
            'populate[faqs]': 'true',
            locale: strapiLanguageAdapter(locale),
          },
        };
      },
      transformResponse: (response: { data: any[]; meta: any }, meta, arg) => {
        const { role } = arg;

        return {
          data: response.data.map((item) => ({
            id: item.id,
            name: item.attributes.name,
            description: item.attributes.description,
            slug: item.attributes.slug,
            price:
              role === 'Partner' && item.attributes.partnerPrice
                ? item.attributes.partnerPrice
                : item.attributes.price,
            images: item.attributes?.images?.data.map(getImageUrl),
            banner: getImageUrl(item.attributes.banner),
            fullSpecification: {
              general: item.attributes?.fullSpecification?.general,
              details: item.attributes?.fullSpecification?.details,
            },
            portfolio: item.attributes?.portfolio?.images.data.map(getImageUrl),
            faqs: item.attributes.faqs,
            liter: item.attributes.liter,
            params: item.attributes.params,
          })),
          totalCount: response.meta?.pagination?.total || 0,
        };
      },
    }),

  }),
});

export const { useGetProductsQuery, useLazyGetProductsQuery } = productsApi;
