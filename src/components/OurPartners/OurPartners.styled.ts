'use client';

import styled from 'styled-components';
import { typographyPreset5 } from '@/styles';

export const OurPartnersWrapper = styled.div`
  .swiper-slide {
    display: flex;
    align-items: center !important;
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
    flex-wrap: wrap;
    gap: 10px;

    & > * {
      flex: 1 1 45%;
      max-width: 45%;
      margin: 10px;
    }
  }
`;

export const OurPartnersLogo = styled.img`
  width: 100%;
  max-width: 232px;

  @media (max-width: 768px) {
    width: 160px;
  }
`;
