import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getImageUrl } from '@/utils/getImageFullUrl';
import { strapiLanguageAdapter } from '@/utils/strapi-language-adapter';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  liter: number;
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], { locale: string, limit?: number; excludeId?: number | string, productTypes?: string[], role?: string }>({
      query: ({ limit, excludeId, productTypes, locale }) => {
        const params = new URLSearchParams();
        if (limit) {
          params.append('limit', limit.toString());
          params.append('pagination[start]', "0");
        }
        if (excludeId) {
          params.append('filters[slug][$ne]', excludeId.toString());
        }

        if (productTypes && productTypes.length) {
          productTypes.forEach((type, index) => {
            params.append(`filters[$or][${index}][productTypes][title][$eq]`, type);
          });
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
            'locale': strapiLanguageAdapter(locale),
            ...params,
          }
        };
      },
      transformResponse: (response: { data: any[] },  meta, arg) => {
        const { role } = arg;

        return response.data.map((item) => ({
          id: item.id,
          name: item.attributes.name,
          description: item.attributes.description,
          price: role === 'Partner' && item.attributes.partnerPrice ? item.attributes.partnerPrice : item.attributes.price,
          images: item.attributes.images.data.map((img: any) => getImageUrl(img)),
          banner: getImageUrl(item.attributes.banner),
          fullSpecification: {
            general: item.attributes.fullSpecification.general,
            details: item.attributes.fullSpecification.details,
          },
          portfolio: item.attributes.portfolio.images.data.map((img: any) => getImageUrl(img)),
          faqs: item.attributes.faqs,
          liter: item.attributes.liter,
        }));
      },
    }),
  }),
});

export const { useGetProductsQuery, useLazyGetProductsQuery } = productsApi;
