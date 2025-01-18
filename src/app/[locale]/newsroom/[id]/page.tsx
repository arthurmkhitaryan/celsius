'use client';

import React from 'react';

// styled
import * as S from './page.styled';
import { useGetNewsByIdQuery } from '@/features/newsroom/newsroom.api';
import { getImageUrl } from '@/utils/getImageFullUrl';
import Achievements from '@/components/Achievements';
import Newsroom from '@/components/Newsroom';
import OEmbedRenderer from '@/components/OEmbedRenderer';

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
          <OEmbedRenderer content={data?.content} />
          <S.Devider />
          <S.InfoWrapper>
            <S.AuthorName>
              {data.author} | {formattedDate}
            </S.AuthorName>
          </S.InfoWrapper>
          <S.MainWrapper>
            <Achievements />
            <Newsroom />
          </S.MainWrapper>
        </S.ContentWrapper>
      </S.NewsSingleWrapper>
    )
  );
}
