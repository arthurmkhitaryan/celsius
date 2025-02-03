'use client';

import React from 'react';
import Button from '@/components/shared/Button';
import arrowRightMain from '@/public/images/arrow-right.svg';

//styles & images
import * as S from './Careers.styled';
import BackgroundImage from '@/public/images/home/careers/bg.png';
import PuzzleMobile from '@/public/images/career/puzzle-mobile.png';
import { useClientMediaQuery } from '@/store/useClientMediaQuery';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

function Careers() {
  const t = useTranslations('Home');
  const isTablet = useClientMediaQuery('(max-width: 768px)');

  const { locale } = useParams();
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/${locale}/careers`);
  };

  return (
    <S.CareersSectionWrapper
      $backgroundImage={isTablet ? PuzzleMobile.src : BackgroundImage.src}
    >
      <S.CareersSectionContainer>
        <S.CareersSectionContent>
          <S.CareersSubTitle>
            {t('careers.sub_title') ? t('careers.sub_title') : ''}
          </S.CareersSubTitle>
          <S.CareersTitle>{t('careers.title')}</S.CareersTitle>
          <S.CareersDescription>
            {t('careers.description')}
            <br />
            <br />
            {t('careers.description2')}
          </S.CareersDescription>
          <S.CareersButtonWrapper>
            <Button onClick={handleRedirect}>
              {t('careers.join')}
              <Image src={arrowRightMain} width={12} alt="arrow-right" />
            </Button>
          </S.CareersButtonWrapper>
        </S.CareersSectionContent>
      </S.CareersSectionContainer>
    </S.CareersSectionWrapper>
  );
}

export default Careers;
