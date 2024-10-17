'use client';

import React from 'react';
import Button from '@/components/shared/Button';
import { ArrowRight } from 'lucide-react';

//styles & images
import * as S from './Careers.styled';
import BackgroundImage from '@/public/images/home/careers/bg.png';
import PuzzleMobile from '@/public/images/career/puzzle-mobile.png';
import { useClientMediaQuery } from '@/store/useClientMediaQuery';

function Careers() {
  const isTablet = useClientMediaQuery('(max-width: 768px)');

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
            <Button>
              Join Our Team
              <ArrowRight size={12} />
            </Button>
          </S.CareersButtonWrapper>
        </S.CareersSectionContent>
      </S.CareersSectionContainer>
    </S.CareersSectionWrapper>
  );
}

export default Careers;
