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

const slides = [
  {
    link: '/category/1',
    backgroundPosition: '0% 0%',
    title: 'VRF Systems',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.',
    translateX: 10,
  },
  {
    link: '/category/2',
    backgroundPosition: '30% 0%',
    title: 'R290 M thermal',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.',
    translateX: 40,
  },
  {
    link: '/category/3',
    backgroundPosition: '63% 0%',
    title: 'Chiller',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.',
    translateX: 40,
  },
  {
    link: '/category/4',
    backgroundPosition: '100% 0%',
    title: 'BreezeleSS+',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.',
    translateX: 75,
  },
];

function Slider() {
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
          <S.SlideContent>{slide.content}</S.SlideContent>
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
