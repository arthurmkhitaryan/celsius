'use client';

import React from 'react';

// styles
import * as S from './Newsroom.styled';
import { Calendar } from 'lucide-react';
import { theme } from '@/styles';

interface NewsroomItemProps {
  image: string;
  description: string;
  date: Date;
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
            <S.NewsroomItemDateNumber>
              {new Date(date)
                .toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                })
                .replace(/\//g, ',')}
            </S.NewsroomItemDateNumber>
          </S.NewsroomItemDate>
        </S.NewsroomItemRightSide>
      </S.NewsroomItemContent>
    </S.NewsroomItemWrapper>
  );
}

export default NewsroomItem;
