'use client';

import React, { useState } from 'react';
import * as S from './SliderMobile.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import mobileSliderOne from '@/public/images/home/slider-mobile/mobile-slider-1.png';
import mobileSliderTwo from '@/public/images/home/slider-mobile/mobile-slider-2.png';
import mobileSliderThree from '@/public/images/home/slider-mobile/mobile-slider-3.png';
import mobileSliderFour from '@/public/images/home/slider-mobile/mobile-slider-4.png';
import arrowLeft from '@/public/images/home/slider-mobile/arrow-l.svg';
import arrowRight from '@/public/images/home/slider-mobile/arrow-r.svg';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

const slides = [
  {
    link: '/products/1',
    image: mobileSliderOne,
    title: 'V8',
    content: 1,
  },
  {
    link: '/products/2',
    image: mobileSliderTwo,
    title: 'R290 M thermal',
    content: 2,
  },
  {
    link: '/products/3',
    image: mobileSliderThree,
    title: 'Chiller',
    content: 3,
  },
  {
    link: '/products/4',
    image: mobileSliderFour,
    title: 'BreezeleSS+',
    content: 4,
  },
];

function SliderMobile() {
  const t = useTranslations('Home');
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleNavigateProduct = (link: string) => {
    console.log({ link });
    router.push(link);
  };

  return (
    <S.SliderWrapper>
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        slidesPerGroup={1}
        onSlideChange={handleSlideChange}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        pagination={{ clickable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <S.Slide $backgroundImage={slide.image.src} />
          </SwiperSlide>
        ))}
      </Swiper>
      {slides.map((slide, index) => (
        <S.SlideContentWrapper key={index} isActive={activeIndex === index}>
          <S.SlideTitle>{slide.title}</S.SlideTitle>
          <S.SlideContent>{t(`slider.${slide.content}`)}</S.SlideContent>
          <S.ButtonWrapper>
            <S.CalculatorButton
              onClick={() => handleNavigateProduct(slide.link)}
            >
              {t('slider.product')}
              <ArrowRight size={18} />
            </S.CalculatorButton>
          </S.ButtonWrapper>
        </S.SlideContentWrapper>
      ))}
      <S.CustomNavigationButton
        className="custom-prev"
        $left={true}
        $image={arrowLeft.src}
      />
      <S.CustomNavigationButton
        className="custom-next"
        $image={arrowRight.src}
      />
    </S.SliderWrapper>
  );
}

export default SliderMobile;
