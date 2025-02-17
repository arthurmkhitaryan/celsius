'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// styles & images
import * as S from './Reviews.styled';
import review1 from '@/public/images/home/reviews/review1.png';
import review2 from '@/public/images/home/reviews/review2.png';
import review3 from '@/public/images/home/reviews/review3.png';
import { useTranslations } from 'next-intl';

function Reviews({ classNameTitle }: { classNameTitle?: string }) {
  const t = useTranslations('Home');

  const reviews = [
    {
      id: 1,
      logo: review2.src,
      text: t('reviews.acba.description'),
      company: t('reviews.acba.name'),

    },
    {
      id: 2,
      logo: review3.src,
      text: t('reviews.lion.description'),
      company: t('reviews.lion.name'),
    },
    {
      id: 3,
      logo: review1.src,
      text: t('reviews.vivaro.description'),
      company: t('reviews.vivaro.name'),
    },
  ];
  return (
    <S.ReviewsWrapper>
      <S.ReviewsTitle className={classNameTitle}>Reviews</S.ReviewsTitle>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <S.ReviewCard>
              <S.ReviewLogo src={review.logo} alt="Company logo" />
              <S.ReviewContent>
                <S.ReviewText>{review.text}</S.ReviewText>
                <S.CompanyName>
                  <span>{review.company}</span>
                </S.CompanyName>
              </S.ReviewContent>
            </S.ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.ReviewsWrapper>
  );
}

export default Reviews;
