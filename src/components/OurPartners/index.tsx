'use client';

import React from 'react';

// styles & images
import * as S from './OurPartners.styled';
import partnerLogo1 from '@/public/images/home/our-partners/partner1.jpg';
import partnerLogo2 from '@/public/images/home/our-partners/partner2.jpg';
import partnerLogo3 from '@/public/images/home/our-partners/partner3.jpg';
import partnerLogo4 from '@/public/images/home/our-partners/partner4.jpg';

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
];

function OurPartners() {
  return (
    <S.OurPartnersWrapper>
      <S.OurPartnersTitle>Our Partners</S.OurPartnersTitle>
      <S.OurPartnersContent>
        {ourPartnersData.map((item) => (
          <S.OurPartnersLogo
            key={item.id}
            src={item.image}
            alt="Our Partners logo"
          />
        ))}
      </S.OurPartnersContent>
    </S.OurPartnersWrapper>
  );
}

export default OurPartners;
