'use client';

import React from 'react';

// styled
import * as S from './page.styled';
import { useGetNewsByIdQuery } from '@/features/newsroom/newsroom.api';
import Image from 'next/image';
import { getImageUrl } from '@/utils/getImageFullUrl';
import Achievements from '@/components/Achievements';
import { MainWrapper } from '@/components/Header/Header.styled';
import Newsroom from '@/components/Newsroom';

interface Props {
  params: {
    id: number;
    locale: string;
  };
}

export default function NewsSingle({ params }: Props) {
  const { id, locale } = params;
  const { data, isSuccess } = useGetNewsByIdQuery({ id, locale });

  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
    .format(new Date(data?.createdAt ?? new Date()))
    .replaceAll('/', '.');

  console.log({ data });
  return (
    isSuccess && (
      <S.NewsSingleWrapper>
        <S.BannerImage
          src={getImageUrl(data?.largeImage)}
          alt={'News Banner'}
        />
        <S.ContentWrapper>
          <S.Content dangerouslySetInnerHTML={{ __html: data?.content }} />
          <S.Devider />
          <S.InfoWrapper>
            <S.AuthorName>
              {data.author} | {formattedDate}
            </S.AuthorName>
          </S.InfoWrapper>
          <S.MainWrapper>
            <Achievements className="custom" />
            <Newsroom className="custom" />
          </S.MainWrapper>
        </S.ContentWrapper>
      </S.NewsSingleWrapper>
    )
  );
}
