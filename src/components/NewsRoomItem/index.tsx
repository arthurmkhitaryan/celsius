'use client';

import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useGetNewsQuery } from '@/features/newsroom/newsroom.api';
import MainLayout from '@/components/Layout';

// styles & images
import * as S from './NewsRoomItem.styled';
import { getImageUrl } from '@/utils/getImageFullUrl';
import { useParams } from 'next/navigation';

export default function NewsroomItem() {
  const { locale } = useParams();
  const t = useTranslations('Newsroom');
  const { data, isLoading } = useGetNewsQuery({ locale: locale as string });
  const [bannerPost, setBannerPost] = React.useState<News>();

  useEffect(() => {
    if (data) { 
      const bannerPost = data.find((post: News) => post.isBanner);
      setBannerPost(bannerPost);
    }
  }, [data]);

  if (isLoading) return;
  
  return (
    <S.NewsroomWrapper>
      <MainLayout>
        <S.BannerWrapper>
          <S.BannerImage src={getImageUrl(bannerPost?.smallImage)} />
          <S.BannerContent>
            <S.BannerTitle>{bannerPost?.title}</S.BannerTitle>
            <S.BannerDescription>
              {bannerPost?.smallDescription}
            </S.BannerDescription>
            <S.ReadFullButtonWrapper>
            <S.PostAuthor>{bannerPost?.author} | 04.04.2024</S.PostAuthor>
            <S.ReadFullButton>{t('read_full_story')} {">>"}</S.ReadFullButton>
          </S.ReadFullButtonWrapper>
          </S.BannerContent>
        </S.BannerWrapper>
      </MainLayout>
    </S.NewsroomWrapper>
  );
}