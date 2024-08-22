'use client'

import React from 'react';
import MainLayout from '@/components/Layout';
import * as S from './page.styled';
import Newsroom from '@/components/Newsroom';
import Achievements from '@/components/Achievements';
import { useGetCategoryByIdQuery } from '@/features/categories';

const Category = ({ params }: { params: { categoryId: number } }) => {
  const { data } = useGetCategoryByIdQuery({ categoryId: params.categoryId });

  if (!data) return null;

  console.log(433333, data);

  return (
    <>
      <S.HeaderSection>
        <S.HeaderImage>
          <img src={data.image}  alt="Header Image" />
        </S.HeaderImage>
        <S.SubImage>
          <img src={data.icon} alt="Layer Image" />
        </S.SubImage>
        <S.Title>{data.name}</S.Title>
      </S.HeaderSection>
      <MainLayout>
        <S.DescriptionContainer>
          <S.DescriptionTitle>{data.title}</S.DescriptionTitle>
          <S.Description>
            {data.description}
          </S.Description>
        </S.DescriptionContainer>
        <S.ProductsSection>
          {data.category.map((category) => (
            <S.ProductCard key={category.name}>
              <S.ProductImageWrapper>
                <img
                  src={category.image}
                  alt={category.name}
                />
              </S.ProductImageWrapper>
              <S.ProductInfo>
                <S.ProductTitle>{category.name}</S.ProductTitle>
                <S.ProductDescription>{category.description}</S.ProductDescription>
                <S.ProductButton>See More</S.ProductButton>
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
