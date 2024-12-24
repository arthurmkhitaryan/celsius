'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// styles & images
import * as S from './OurPartners.styled';
import { useGetOurPartnersQuery } from '@/features/our-partners/partners.api';

function OurPartners() {
  const { data, isLoading } = useGetOurPartnersQuery({});

  return (
    <S.OurPartnersWrapper>
      <S.OurPartnersTitle>Our Partners</S.OurPartnersTitle>
      {!isLoading && (
        <S.OurPartnersContent>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            loopFillGroupWithBlank={true}
          >
            {data?.data.map((item: any) => (
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
