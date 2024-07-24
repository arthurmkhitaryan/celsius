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
import CareerListItem from '@/components/CareerItem';
import { careersList } from '@/app/[locale]/careers/mock';
import { useTranslations } from 'next-intl';

export default function Career() {
  const t = useTranslations('Careers');

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
          <S.TextTitle>Lorem ipsum dolor set</S.TextTitle>
          <S.TextDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </S.TextDescription>
        </S.TextContent>
        <S.BackgroundLogo>
          <CareersCV />
          <S.CareerList>
            {careersList.map((career) => (
              <CareerListItem
                key={career.id}
                title={career.title}
                address={career.address}
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
