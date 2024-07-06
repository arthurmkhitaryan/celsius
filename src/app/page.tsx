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

function Home() {
  return (
    <S.HomeWrapper>
      <Slider />
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
