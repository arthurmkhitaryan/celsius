import React from 'react';
import MainLayout from '@/components/Layout';
import OrderHistoryImage from '@/public/images/order-history.png';
import CategoryImage from '@/public/images/category.jpeg';
import ImageLayerIcon from '@/public/images/product/layer.png';
import * as S from './page.styled';
import Image from 'next/image';
import Newsroom from '@/components/Newsroom';
import Achievements from '@/components/Achievements';
import { DescriptionContainer } from './page.styled';

const Category = () => {
  const products = [
    {
      id: 1,
      title: 'BreezeLESS+',
      description:
        'The all-new BreezeLESS+ offers a redefined air-conditioning experience.',
      imageUrl: OrderHistoryImage,
    },
    {
      id: 2,
      title: 'Xtreme Cool',
      description: 'Outstanding cooling performance even under extreme conditions.',
      imageUrl: OrderHistoryImage,
    },
    {
      id: 3,
      title: 'Xtreme Cool',
      description: 'Outstanding cooling performance even under extreme conditions.',
      imageUrl: OrderHistoryImage,
    },
  ];

  return (
    <>
      <S.HeaderSection>
        <S.HeaderImage>
          <Image src={CategoryImage} alt="Header Image" />
        </S.HeaderImage>
        <S.SubImage>
          <Image src={ImageLayerIcon} alt="Layer Image" />
        </S.SubImage>
        <S.Title>Heating & Cooling</S.Title>
      </S.HeaderSection>
      <MainLayout>
        <S.DescriptionContainer>
          <S.DescriptionTitle>Lorem ipsum dolor set</S.DescriptionTitle>
          <S.Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </S.Description>
        </S.DescriptionContainer>
        <S.ProductsSection>
          {products.map((product) => (
            <S.ProductCard key={product.id}>
              <S.ProductImageWrapper>
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                />
              </S.ProductImageWrapper>
              <S.ProductInfo>
                <S.ProductTitle>{product.title}</S.ProductTitle>
                <S.ProductDescription>{product.description}</S.ProductDescription>
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
