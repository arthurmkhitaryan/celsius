export const getImageUrl = (image: any) => {
  return `${process.env.NEXT_PUBLIC_STRAPI_URL}${image?.data?.attributes?.url}`;
};
