'use client';

import React from 'react';
import MainLayout from '@/components/Layout';
import * as S from './page.styled';
import Newsroom from '@/components/Newsroom';
import Achievements from '@/components/Achievements';
import { useGetCategoryByIdQuery } from '@/features/categories';
import { useParams, useRouter } from 'next/navigation';

const Category = ({ params }: { params: { categoryId: number } }) => {
  const { locale } = useParams();
  const { data } = useGetCategoryByIdQuery({
    categoryId: params.categoryId,
    locale: locale as string,
  });

  if (!data) return null;

  const router = useRouter();

  const handleRedirect = (id: number): void => {
    router.push(`/${locale}/products/${id}`);
  };

  return (
    <>
      <S.HeaderSection>
        <S.HeaderImage>
          <img src={data.image} alt="Header Image" />
        </S.HeaderImage>
        {/* <S.SubImage>
          <img src={data.icon} alt="Layer Image" />
        </S.SubImage>
        <S.Title>{data.name}</S.Title> */}
      </S.HeaderSection>
      <MainLayout>
        <S.DescriptionContainer>
          <S.DescriptionTitle>{data.title}</S.DescriptionTitle>
          <S.Description>{data.description}</S.Description>
        </S.DescriptionContainer>
        <S.ProductsSection>
          {data.products.map((product) => (
            <S.ProductCard key={product.name}>
              <S.ProductImageWrapper>
                <img src={product.image} alt={product.name} />
              </S.ProductImageWrapper>
              <S.ProductInfo>
                <S.ProductTitle>{product.name}</S.ProductTitle>
                <S.ProductDescription>
                  {product.description}
                </S.ProductDescription>
                <S.ProductButton onClick={() => handleRedirect(product.id)}>
                  See More
                </S.ProductButton>
              </S.ProductInfo>
            </S.ProductCard>
          ))}
        </S.ProductsSection>
        <Achievements />
        <Newsroom />
      </MainLayout>
    </>
  );
};

export default Category;
