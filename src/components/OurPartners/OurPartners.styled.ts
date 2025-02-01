'use client';

import styled from 'styled-components';
import { typographyPreset5 } from '@/styles';

export const OurPartnersWrapper = styled.div`
  position: relative;
  max-width: 1260px;
`;

export const OurPartnersTitle = styled.h2`
  ${typographyPreset5};
  color: ${({ theme }) => theme.palette.common.textDefault};
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 36px;
    padding-left: 50px;
    font-weight: 600;
  }
`;

export const OuterWrapper = styled.div`
  position: relative;
`;

export const InnerWrapper = styled.div`
  overflow: hidden; /* Keeps the slider content confined */
  border-radius: 8px; /* Optional: Add a border radius for aesthetic */
`;

export const NavigationButton = styled.div`
  z-index: 100;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 60%;

  &.swiper-button-prev {
    left: -70px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &.swiper-button-next {
    right: -70px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &::after {
    font-size: 24px;
    color: #1c1c1c;
  }
`;

export const OurPartnersLogo = styled.img`
  width: 100%;
  max-width: 232px;

  @media (max-width: 768px) {
    width: 160px;
  }
`;
