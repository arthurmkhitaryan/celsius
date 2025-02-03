'use client';

import React from 'react';
import * as S from './CardItem.styled';
import { useAppDispatch } from '@/store/hooks';
import { updateQuantity, removeFromCart } from '@/features/cart/cart.slice';
import { useTranslations } from 'next-intl';

interface ICardItemProps {
  id: string | number;
  name: string;
  quantity: number;
  image: string;
  price: number;
}

export const CardItem = ({
  id,
  image,
  name,
  price,
  quantity,
}: ICardItemProps) => {
  const t = useTranslations('Cart');
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id, quantity: quantity - 1 }));
    } else {
      dispatch(removeFromCart(id)); // Remove item if quantity is 0
    }
  };

  return (
    <S.CardItemWrapper>
      <S.Image src={image} alt={name} />
      <S.ProductName>{name}</S.ProductName>
      <S.ProductQuantity>
        <span>{t('qty')}:</span>
        <S.Counter>
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </S.Counter>
      </S.ProductQuantity>
      <S.ProductPrice>
        {price.toLocaleString()} <span>֏</span>
      </S.ProductPrice>
    </S.CardItemWrapper>
  );
};
