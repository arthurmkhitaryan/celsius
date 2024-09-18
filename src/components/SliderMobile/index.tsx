'use client'
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

const slides = [
  {
    image: mobileSliderOne,
    title: 'VRF Systems',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.',
  },
  {
    image: mobileSliderTwo,
    title: 'R290 M thermal',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.',
  },
  {
    image: mobileSliderThree,
    title: 'Chiller',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.',
  },
  {
    image: mobileSliderFour,
    title: 'BreezeleSS+',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.',
  },
];

function SliderMobile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateX, setTranslateX] = useState(slides[0].translateX);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
    setTranslateX(slides[swiper.activeIndex].translateX);
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
            <S.Slide
              $backgroundImage={slide.image.src}
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
          <S.SlideContent>{slide.content}</S.SlideContent>
          <S.ButtonWrapper>
            <S.CalculatorButton>
              Go to calculator <ArrowRight size={18} />
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
