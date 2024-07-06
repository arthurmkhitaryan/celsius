'use client';

import React from 'react';
import * as S from './Slider.styled';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper modules
import { Navigation } from 'swiper/modules';

// Import images
import slider from '@/public/images/home/slider/slider.png';

import arrowLeft from '@/public/images/arrow-l.svg';
import arrowRight from '@/public/images/arrow-r.svg';

const slides = [
  {
    backgroundPosition: '0% 0%',
    content: 'Slide 1 Content',
  },
  {
    backgroundPosition: '30% 0%',
    content: 'Slide 2 Content',
  },
  {
    backgroundPosition: '63% 0%',
    content: 'Slide 3 Content',
  },
  {
    backgroundPosition: '100% 0%',
    content: 'Slide 4 Content',
  },
];

function Slider() {
  return (
    <S.SliderWrapper>
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        slidesPerGroup={1}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        pagination={{ clickable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <S.Slide
              $backgroundImage={slider.src}
              $backgroundPosition={slide.backgroundPosition}
            >
              <S.SlideContent>{slide.content}</S.SlideContent>
            </S.Slide>
          </SwiperSlide>
        ))}
      </Swiper>
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
