'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// styles & images
import * as S from './OurPartners.styled';
import { useGetOurPartnersQuery } from '@/features/our-partners/partners.api';
import { useTranslations } from 'next-intl';

function OurPartners() {
  const t = useTranslations('Our_Partners');
  const { data: partnersData, isLoading } = useGetOurPartnersQuery({});

  return (
    <S.OurPartnersWrapper>
      <S.OurPartnersTitle>{t('title')}</S.OurPartnersTitle>
      {!isLoading && partnersData && (
        <S.OuterWrapper>
          <S.InnerWrapper>
            <S.NavigationButton className="swiper-button-prev" />
            <S.NavigationButton className="swiper-button-next" />
            <Swiper
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              modules={[Autoplay, Navigation]}
              slidesPerView={5}
              spaceBetween={30}
              autoplay={{
                delay: 2000,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              loop={true}
            >
              {partnersData.data.map((item: any) => (
                <SwiperSlide
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '190px',
                  }}
                >
                  <S.OurPartnersLogo
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.logo}`}
                    alt={`Partner logo ${item.id}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </S.InnerWrapper>
        </S.OuterWrapper>
      )}
    </S.OurPartnersWrapper>
  );
}

export default OurPartners;
