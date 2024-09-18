'use client';

import React from 'react';

// styles
import * as S from './Newsroom.styled';
import { Calendar } from 'lucide-react';
import { theme } from '@/styles';

interface NewsroomItemProps {
  image: string;
  description: string;
  date: string;
}

function NewsroomItem({ date, image, description }: NewsroomItemProps) {
  return (
    <S.NewsroomItemWrapper>
      <S.NewsroomItemImage src={image} alt="Newsroom item image" />
      <S.NewsroomItemContent>
        <S.NewsroomItemLeftSide>
          <S.NewsroomItemDesc>{description}</S.NewsroomItemDesc>
        </S.NewsroomItemLeftSide>
        <S.NewsroomItemRightSide>
          <S.NewsroomItemDate>
            <Calendar size={18} color={theme.palette.common.secondaryBlue} />
            <S.NewsroomItemDateNumber>{date}</S.NewsroomItemDateNumber>
          </S.NewsroomItemDate>
        </S.NewsroomItemRightSide>
      </S.NewsroomItemContent>
    </S.NewsroomItemWrapper>
  );
}

export default NewsroomItem;
