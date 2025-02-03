'use client';

import React from 'react';

// styles & images
import * as S from './page.styled';
import BannerImage from '@/public/images/career/banner.png';

// components
import MainLayout from '@/components/Layout';
import Achievements from '@/components/Achievements';
import OurPartners from '@/components/OurPartners';
import Newsroom from '@/components/Newsroom';
import CareersCV from '@/components/CareersCV';
import { useTranslations } from 'next-intl';
import { useGetCareersQuery } from '@/features/careers';
import CareerListItem from '@/components/CareerItem';

export default function Career() {
  const t = useTranslations('Careers');
  const { data } = useGetCareersQuery();

  return (
    <S.CareerWrapper>
      <S.CareerBanner $backgroundImage={BannerImage.src}>
        <S.CareerBannerContent>
          <S.CareerBannerSubTitle>
            {t('career_banner_sub_title')}
          </S.CareerBannerSubTitle>
          <S.CareerBannerTitle> {t('career_banner_title')}</S.CareerBannerTitle>
          <S.CareerBannerDescription>
            {t('career_banner_description')}
          </S.CareerBannerDescription>
        </S.CareerBannerContent>
      </S.CareerBanner>
      <MainLayout>
        <S.TextContent>
          <S.TextTitle>{t('career_title')}</S.TextTitle>
          <S.TextDescription>
            {t('career_description')}
          </S.TextDescription>
        </S.TextContent>
      </MainLayout>
      <MainLayout>
        <S.BackgroundLogo>
          <CareersCV />
          <S.CareerList>
            {data?.map((career) => (
              <CareerListItem
                key={career.id}
                title={career.name}
                address={career.address}
                content={career.content}
                postingDate={career.postingDate}
              />
            ))}
          </S.CareerList>
          <Achievements />
        </S.BackgroundLogo>
        <OurPartners />
        <Newsroom />
      </MainLayout>
    </S.CareerWrapper>
  );
}
