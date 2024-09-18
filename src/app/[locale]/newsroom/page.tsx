'use client';

import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useGetNewsQuery } from '@/features/newsroom/newsroom.api';
import MainLayout from '@/components/Layout';

// styles & images
import * as S from './page.styled';
import { getImageUrl } from '@/utils/getImageFullUrl';
import { Button, Tab, Tabs } from '@nextui-org/react';

export default function Newsroom() {
  const t = useTranslations('Newsroom');
  const { data, isLoading } = useGetNewsQuery();
  const [bannerPost, setBannerPost] = React.useState<News>();

  useEffect(() => {
    if (data) {
      const bannerPost = data.find((post: News) => post.isBanner);
      setBannerPost(bannerPost);
    }
  }, [data]);

  if (isLoading) return;
  console.log({ data });
  return (
    <S.NewsroomWrapper>
      <MainLayout>
        <S.BannerWrapper>
          <S.BannerImage src={getImageUrl(bannerPost?.smallImage.data.attributes.url)} />
          <S.BannerContent>
            <S.BannerTitle>{bannerPost?.title}</S.BannerTitle>
            <S.BannerDescription>
              {bannerPost?.smallDescription}
            </S.BannerDescription>
            <S.PostAuthor>{bannerPost?.author}</S.PostAuthor>
            <S.ReadFullButton>{t('read_full_story')} {">>"}</S.ReadFullButton>
          </S.BannerContent>
        </S.BannerWrapper>
        <Tabs variant={'bordered'} aria-label="News Categories">
          <Tab key="photos" title="Photos"/>
          <Tab key="music" title="Music"/>
          <Tab key="videos" title="Videos"/>
        </Tabs>
      </MainLayout>
    </S.NewsroomWrapper>
  );
}
