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

function Careers() {
  const isTablet = useClientMediaQuery('(max-width: 768px)');

  const { locale } = useParams();
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/${locale}/careers`)
  }

  return (
    <S.CareersSectionWrapper $backgroundImage={isTablet ? PuzzleMobile.src : BackgroundImage.src}>
      <S.CareersSectionContainer>
        <S.CareersSectionContent>
          <S.CareersSubTitle>Elevate your career at Celsius.</S.CareersSubTitle>
          <S.CareersTitle>Careers</S.CareersTitle>
          <S.CareersDescription>
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            }
          </S.CareersDescription>
          <S.CareersButtonWrapper>
            <Button onClick={handleRedirect}>
              Join Our Team
              <Image src={arrowRightMain} width={12} alt="arrow-right" />
            </Button>
          </S.CareersButtonWrapper>
        </S.CareersSectionContent>
      </S.CareersSectionContainer>
    </S.CareersSectionWrapper>
  );
}

export default Careers;
