'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// styles & images
import * as S from './OurPartners.styled';
import partnerLogo1 from '@/public/images/home/our-partners/partner1.jpg';
import partnerLogo2 from '@/public/images/home/our-partners/partner2.jpg';
import partnerLogo3 from '@/public/images/home/our-partners/partner3.jpg';
import partnerLogo4 from '@/public/images/home/our-partners/partner4.jpg';
import partnerLogo5 from '@/public/images/home/our-partners/partner2.jpg';
import partnerLogo6 from '@/public/images/home/our-partners/partner3.jpg';

const ourPartnersData = [
  {
    id: 1,
    image: partnerLogo1.src,
  },
  {
    id: 2,
    image: partnerLogo2.src,
  },
  {
    id: 3,
    image: partnerLogo3.src,
  },
  {
    id: 4,
    image: partnerLogo4.src,
  },
  {
    id: 5,
    image: partnerLogo5.src,
  },
  {
    id: 6,
    image: partnerLogo6.src,
  },
];

function OurPartners() {
  return (
    <S.OurPartnersWrapper>
      <S.OurPartnersTitle>Our Partners</S.OurPartnersTitle>
      <S.OurPartnersContent>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          loop={true}
        >
          {ourPartnersData.map((item) => (
            <SwiperSlide
              key={item.id}
              style={{ display: 'flex', alignItems: 'center', height: '190px' }}
            >
              <S.OurPartnersLogo
                src={item.image}
                alt={`Partner logo ${item.id}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.OurPartnersContent>
    </S.OurPartnersWrapper>
  );
}

export default OurPartners;
