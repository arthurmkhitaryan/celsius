'use client';

import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useGetNewsQuery } from '@/features/newsroom/newsroom.api';
import MainLayout from '@/components/Layout';

// styles & images
import * as S from './page.styled';
import { getImageUrl } from '@/utils/getImageFullUrl';
import { Tab, Tabs } from '@nextui-org/react';
import { useGetNewsCategoriesQuery } from '@/features/newsCategories/newsCategories.api';
import ProductList from '@/components/ProductList';

export default function Newsroom() {
  const t = useTranslations('Newsroom');
  const { data, isLoading } = useGetNewsQuery();
  const { data: categories, isLoading: isLoadingCategories } = useGetNewsCategoriesQuery();
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
            <S.PostAuthor>{bannerPost?.author}</S.PostAuthor>
            <S.ReadFullButton>{t('read_full_story')} {">>"}</S.ReadFullButton>
          </S.BannerContent>
        </S.BannerWrapper>
        <S.Tabs>
          <S.Tab key={'all'}>All Topics</S.Tab>
          {!isLoadingCategories && categories?.map((item) => (
            <S.Tab key={item.id}>{item.name}</S.Tab>
          ))}
        </S.Tabs>
        <ProductList />
      </MainLayout>
    </S.NewsroomWrapper>
  );
}
