'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// styles & images
import * as S from './OurPartners.styled';
import { useGetOurPartnersQuery } from '@/features/our-partners/partners.api';

function OurPartners() {
  const { data: partnersData, isLoading } = useGetOurPartnersQuery({});

  return (
    <S.OurPartnersWrapper>
      <S.OurPartnersTitle>Our Partners</S.OurPartnersTitle>
      {!isLoading && partnersData && (
        <S.OurPartnersContent>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={30}
            autoplay={{
              delay: 2000,
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
        </S.OurPartnersContent>
      )}
    </S.OurPartnersWrapper>
  );
}

export default OurPartners;
