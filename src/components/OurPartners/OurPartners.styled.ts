'use client';

import styled from 'styled-components';
import { typographyPreset5 } from '@/styles';

export const OurPartnersWrapper = styled.div`
  .swiper-slide {
    display: flex;
    align-items: center !important;
    flex-shrink: 0;
    margin-left: 60px;
    min-width: 100px;
    width: auto !important; /* Prevent issues with slide width */
  }

  .swiper-wrapper {
    display: flex;
  }
`;

export const OurPartnersTitle = styled.h2`
  ${typographyPreset5};
  color: ${({ theme }) => theme.palette.common.textDefault};

  @media (max-width: 768px) {
    font-size: 36px;
    padding-left: 50px;
    font-weight: 600;
  }
`;

export const OurPartnersContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 48px;
  height: 190px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const OurPartnersLogo = styled.img`
  width: 100%;
  max-width: 232px;

  @media (max-width: 768px) {
    width: 160px;
  }
`;
