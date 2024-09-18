'use client'

import React from 'react';

// styles
import * as S from './page.styled';

// components
import MainLayout from '@/components/Layout';
import Slider from '@/components/Slider';
import Achievements from '@/components/Achievements';
import Services from '@/components/Services';
import Description from '@/components/Description';
import Calculator from '@/components/Calculator';
import Reviews from '@/components/Reviews';
import Careers from '@/components/Careers';
import OurPartners from '@/components/OurPartners';
import Newsroom from '@/components/Newsroom';
import { useClientMediaQuery } from '@/store/useClientMediaQuery';
import SliderMobile from '@/components/SliderMobile';

function Home() {
  const isTablet = useClientMediaQuery('(max-width: 768px)');

  return (
    <S.HomeWrapper>
      {isTablet ? <SliderMobile /> : <Slider /> }
      <MainLayout>
        <Achievements />
        <Services />
        <Description />
        <Calculator />
      </MainLayout>
      <Reviews />
      <Careers />
      <MainLayout>
        <OurPartners />
        <Newsroom />
      </MainLayout>
    </S.HomeWrapper>
  );
}

export default Home;
