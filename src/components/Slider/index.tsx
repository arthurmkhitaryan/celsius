'use client';

import React, { useState } from 'react';
import * as S from './Slider.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import arrowRightMain from '@/public/images/arrow-right.svg';
import slider1 from '@/public/images/home/slider/1.jpg';
import slider2 from '@/public/images/home/slider/2.jpg';
import slider3 from '@/public/images/home/slider/3.jpg';
import slider4 from '@/public/images/home/slider/4.jpg';
import arrowLeft from '@/public/images/arrow-l.svg';
import arrowRight from '@/public/images/arrow-r.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

const slides = [
  {
    id: 1,
    link: '/products/1',
    backgroundPosition: '0% 0%',
    backgroundImage: slider1.src,
    title: 'V8',
    content: 1,
    styles: {
      top: '72%',
      left: '72%'
    },
    translateX: 10,
  },
  {
    id: 2,
    link: '/products/2',
    backgroundPosition: '30% 0%',
    backgroundImage: slider2.src,
    title: 'R290 M thermal',
    styles: {
      top: '72%',
      left: '60%'
    },
    content: 2,
    translateX: 40,
  },
  {
    id: 3,
    link: '/products/3',
    backgroundPosition: '63% 0%',
    backgroundImage: slider3.src,
    title: 'Chiller',
    styles: {
      top: '72%',
      left: '50%'
    },
    content: 3,
    translateX: 40,
  },
  {
    id: 4,
    link: '/products/4',
    backgroundPosition: '100% 0%',
    backgroundImage: slider4.src,
    styles: {
      top: '72%',
      left: '50%'
    },
    title: 'BreezeleSS+',
    content: 4,
    translateX: 75,
  },
];

function Slider() {
  const t = useTranslations('Home');
  const router = useRouter();
  const [categoryLink, setCategoryLink] = useState<string>('/products/1');
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateX, setTranslateX] = useState(slides[0].translateX);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
    setTranslateX(slides[swiper.activeIndex].translateX);
    setCategoryLink(slides[swiper.activeIndex].link);
  };

  const handleNavigate = () => {
    router.push(categoryLink);
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
        allowTouchMove={false}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <S.Slide
              $backgroundImage={slide.backgroundImage}
              $backgroundPosition={slide.backgroundPosition}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {slides.map((slide, index) => (
        <S.SlideContentWrapper
          key={index}
          first={slide.id === 1}
          translateX={translateX}
          isActive={activeIndex === index}
          style={activeIndex !== index ? { display: 'none' } :{ ...slide.styles }}
        >
          <S.SlideTitle>{slide.title}</S.SlideTitle>
          <S.SlideContent>{t(`slider.${slide.content}`)}</S.SlideContent>
          <S.ButtonWrapper>
            <S.CalculatorButton
              onClick={handleNavigate}
              second={slide.id === 2}
            >
              {t('slider.product')}
              <Image src={arrowRightMain} width={12} alt="arrow-right" />
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

export default Slider;
