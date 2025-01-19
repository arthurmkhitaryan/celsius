import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getImageUrl } from '@/utils/getImageFullUrl';
import { strapiLanguageAdapter } from '@/utils/strapi-language-adapter';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
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
      Product[],
      {
        locale: string;
        limit?: number;
        excludeId?: number | string;
        subCategories?: string[];
        productTypes?: string[];
        role?: string;
      }
    >({
      query: ({ limit, excludeId, productTypes, subCategories, locale }) => {
        const params = new URLSearchParams();

        if (limit) {
          params.append('pagination[limit]', limit.toString());
          params.append('pagination[start]', '0');
        }

        if (excludeId) {
          params.append('filters[slug][$ne]', excludeId.toString());
        }

        if (
          (productTypes && productTypes.length) ||
          (subCategories && subCategories.length)
        ) {
          let index = 0;

          if (productTypes && productTypes.length) {
            productTypes.forEach((type) => {
              params.append(
                `filters[$or][${index}][productTypes][title][$eq]`,
                type,
              );
              index++;
            });
          }

          if (subCategories && subCategories.length) {
            subCategories.forEach((subcategory: string) => {
              params.append(
                `filters[$or][${index}][sub_category][name][$eq]`,
                subcategory,
              );
              index++;
            });
          }
        }

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
            ...params,
          },
        };
      },
      transformResponse: (response: { data: any[] }, meta, arg) => {
        const { role } = arg;

        return response.data.map((item) => ({
          id: item.id,
          name: item.attributes.name,
          description: item.attributes.description,
          price:
            role === 'Partner' && item.attributes.partnerPrice
              ? item.attributes.partnerPrice
              : item.attributes.price,
          images: item.attributes.images.data.map((img: any) =>
            getImageUrl(img),
          ),
          banner: getImageUrl(item.attributes.banner),
          fullSpecification: {
            general: item.attributes.fullSpecification.general,
            details: item.attributes.fullSpecification.details,
          },
          portfolio: item.attributes.portfolio.images.data.map((img: any) =>
            getImageUrl(img),
          ),
          faqs: item.attributes.faqs,
          liter: item.attributes.liter,
          params: item.attributes.params,
        }));
      },
    }),
  }),
});

export const { useGetProductsQuery, useLazyGetProductsQuery } = productsApi;
