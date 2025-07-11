'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  useGetNewsQuery,
  useGetNewsWithBannerQuery,
} from '@/features/newsroom/newsroom.api';
import MainLayout from '@/components/Layout';
import { getImageUrl } from '@/utils/getImageFullUrl';
import NewsroomItem from '@/components/NewsRoomItem';
import Pagination from '@/components/Pagination';
import * as S from './page.styled';
import ProductList from '@/components/ProductList';
import { useGetNewsCategoriesQuery } from '@/features/newsCategories/newsCategories.api';
import { useParams, useRouter } from 'next/navigation';

const PAGE_SIZE = 5;

export default function Newsroom() {
  const { locale } = useParams();
  const t = useTranslations('Newsroom');
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState(0);

  const { data: newsData, isLoading: isLoadingNewsRooms } = useGetNewsQuery({
    locale: locale as string,
    page: currentPage,
    pageSize: PAGE_SIZE,
    category: activeCategory !== 0 ? activeCategory : undefined,
  });

  const { data: bannerPost, isLoading: isLoadingBannerPost } =
    useGetNewsWithBannerQuery({ locale: locale as string });

  const { data: categories, isLoading: isLoadingCategories } =
    useGetNewsCategoriesQuery({ locale: locale as string });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (activeCategory: number) => {
    setActiveCategory(activeCategory);
    setCurrentPage(1);
  };
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
    .format(new Date(bannerPost?.createdAt ?? new Date()))
    .replaceAll('/', '.');

  if (isLoadingNewsRooms || isLoadingBannerPost) return <div>Loading...</div>;

  return (
    <S.NewsroomWrapper>
      <MainLayout>
        {bannerPost && (
          <S.BannerWrapper>
            <S.BannerImage src={getImageUrl(bannerPost?.smallImage)} />
            <S.BannerContent>
              <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "25px" }}>
                <S.BannerTitle>{bannerPost?.title}</S.BannerTitle>
                <S.BannerDescription>
                  {bannerPost?.smallDescription}
                </S.BannerDescription>
              </div>
              <div style={{ width: "100%", display: "flex", justifyContent: "space-between", gap: "25px" }}>
                <S.PostAuthor>
                  {bannerPost?.author} | {formattedDate}
                </S.PostAuthor>
                <S.ReadFullButtonWrapper>
                  <S.ReadFullButton
                    onClick={() => router.push(`newsroom/${bannerPost.slug}`)}
                  >
                    {t('read')} {'>>'}
                  </S.ReadFullButton>
                </S.ReadFullButtonWrapper>
              </div>
            </S.BannerContent>
          </S.BannerWrapper>
        )}
        <S.Tabs>
          <S.Tab
            active={activeCategory === 0}
            key={'all'}
            onClick={() => handleCategoryChange(0)}
          >
            {t('all_topics')}
          </S.Tab>
          {!isLoadingCategories &&
            categories?.map((item) => (
              <S.Tab
                active={activeCategory === item.id}
                onClick={() => handleCategoryChange(item.id)}
                key={item.id}
              >
                {item.name}
              </S.Tab>
            ))}
        </S.Tabs>
        {newsData?.data?.map((itm) => (
          <NewsroomItem
            key={itm.id}
            id={itm.id}
            slug={itm.slug}
            author={itm.author}
            image={itm.smallImage}
            smallDescription={itm.smallDescription}
            title={itm.title}
            date={itm.createdAt || new Date()}
          />
        ))}
        <S.PaginationWrapper>
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            totalPages={Math.ceil((newsData?.totalCount || 0) / PAGE_SIZE)}
          />
        </S.PaginationWrapper>
        <ProductList />
      </MainLayout>
    </S.NewsroomWrapper>
  );
}
