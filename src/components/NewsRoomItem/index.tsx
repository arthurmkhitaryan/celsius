'use client';

import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import MainLayout from '@/components/Layout';

// styles & images
import * as S from './NewsRoomItem.styled';
import { getImageUrl } from '@/utils/getImageFullUrl';
import { useRouter } from 'next/navigation';

interface Props {
  image: string;
  title: string;
  smallDescription: string;
  author: string;
  date: Date;
  slug: string | number;
  id: string | number;
}

export default function NewsroomItem({
  id,
  image,
  slug,
  title,
  smallDescription,
  author,
  date,
}: Props) {
  const t = useTranslations('Newsroom');
  const router = useRouter();

  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
    .format(new Date(date))
    .replaceAll('/', '.');

  return (
    <S.NewsroomWrapper>
      <MainLayout>
        <S.BannerWrapper>
          <S.BannerImage src={getImageUrl(image)} />
          <S.BannerContent>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "25px" }}>
              <S.BannerTitle>{title}</S.BannerTitle>
              <S.BannerDescription>{smallDescription}</S.BannerDescription>
            </div>
            <S.ReadFullButtonWrapper>
              <S.PostAuthor>
                {author} | {formattedDate}
              </S.PostAuthor>
              <S.ReadFullButton onClick={() => router.push(`/newsroom/${slug}`)}>
                {t('read_full_story')} {'>>'}
              </S.ReadFullButton>
            </S.ReadFullButtonWrapper>
          </S.BannerContent>
        </S.BannerWrapper>
      </MainLayout>
    </S.NewsroomWrapper>
  );
}
