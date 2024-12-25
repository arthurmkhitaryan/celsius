'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// styles & images
import * as S from './Reviews.styled';
import review1 from '@/public/images/home/reviews/review1.jpg';

const reviews = [
  {
    id: 1,
    logo: review1.src,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at justo nec elit varius efficitur. Vestibulum euismod cursus cursus. Praesent aliquam libero vitae turpis volutpat vestibulum.',
    company: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    logo: review1.src,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at justo nec elit varius efficitur. Vestibulum euismod cursus cursus. Praesent aliquam libero vitae turpis volutpat vestibulum.',
    company: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    logo: review1.src,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at justo nec elit varius efficitur. Vestibulum euismod cursus cursus. Praesent aliquam libero vitae turpis volutpat vestibulum.',
    company: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

function Reviews({ classNameTitle }: { classNameTitle?: string }) {
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
                <S.ReviewText>
                  {review.text}
                  <br />
                  {review.text}
                </S.ReviewText>
                <S.CompanyName>
                  <span>Company Name</span> - {review.company}
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
