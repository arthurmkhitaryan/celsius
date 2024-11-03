'use client'
import React, { useState } from 'react';
import * as S from './Slider.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import arrowRightMain from '@/public/images/arrow-right.svg';
import slider from '@/public/images/home/slider/slider.png';
import arrowLeft from '@/public/images/arrow-l.svg';
import arrowRight from '@/public/images/arrow-r.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

const slides = [
  {
    id: 1,
    link: '/category/1',
    backgroundPosition: '0% 0%',
    title: 'VRF Systems',
    content: 1,
    translateX: 10,
  },
  {
    id: 2,
    link: '/category/2',
    backgroundPosition: '30% 0%',
    title: 'R290 M thermal',
    content: 2,
    translateX: 40,
  },
  {
    id: 3,
    link: '/category/3',
    backgroundPosition: '63% 0%',
    title: 'Chiller',
    content: 3,
    translateX: 40,
  },
  {
    id: 4,
    link: '/category/4',
    backgroundPosition: '100% 0%',
    title: 'BreezeleSS+',
    content: 4,
    translateX: 75,
  },
];

function Slider() {
  const t = useTranslations('Home')
  const router = useRouter()
  const [categoryLink, setCategoryLink] = useState<string>('/category/1');
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateX, setTranslateX] = useState(slides[0].translateX);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
    setTranslateX(slides[swiper.activeIndex].translateX);
    setCategoryLink(slides[swiper.activeIndex].link)
  };

  const handleNavigate = () => {
    router.push(categoryLink)
  }

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
              $backgroundImage={slider.src}
              $backgroundPosition={slide.backgroundPosition}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {slides.map((slide, index) => (
        <S.SlideContentWrapper
          key={index}
          translateX={translateX}
          isActive={activeIndex === index}
        >
          <S.SlideTitle>{slide.title}</S.SlideTitle>
          <S.SlideContent>{t(`slider.${slide.content}`)}</S.SlideContent>
          <S.ButtonWrapper>
            <S.CalculatorButton onClick={handleNavigate}>
              Go to category <Image src={arrowRightMain} width={12} alt="arrow-right" />
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
