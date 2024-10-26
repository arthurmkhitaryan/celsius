import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '@/features/product/product.types';
import { getImageUrl } from '@/utils/getImageFullUrl';
import { strapiLanguageAdapter } from '@/utils/strapi-language-adapter';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL }),
  endpoints: (builder) => ({
    getProduct: builder.query<Product, { id: string | number, role?: string, locale: string }>({
      query: ({ id, locale }) => ({
        url: 'products',
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
          'populate[generalParams][populate][image]': 'true',
          'filters[slug][$eq]': id,
          'locale': strapiLanguageAdapter(locale)
        }
      }),
      transformResponse: (response: { data: any[] },  meta, arg) => {
        const { role } = arg;

        console.log(1223, response.data[0]);
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
          code: item.attributes.code,
          mainProductName: item.attributes.mainProductName,
          params: item.attributes.params,
          ...(item.attributes.generalParams && {
            generalParams: item.attributes.generalParams.map((generalParam: any) => ({
              title: generalParam.title,
              image: getImageUrl(generalParam.image),
            })),
          }),
        }))[0];
      },
    }),
  }),
});

export const { useGetProductQuery } = productApi;
