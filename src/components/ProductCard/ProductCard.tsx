import React from 'react';
// types
import { ProductCardProps } from './ProductCard.types';
// styles
import * as S from './ProductCard.styled';

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
}) => (
  <S.Card>
    <S.Title>{name}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Card>
);
