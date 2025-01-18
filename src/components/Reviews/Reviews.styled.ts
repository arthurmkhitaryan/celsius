'use client';

import styled from 'styled-components';
import {
  typographyPreset10,
  typographyPreset11,
  typographyPreset5,
} from '@/styles';

export const ReviewsWrapper = styled.div`
  margin: 0 auto 100px;
  max-width: 1260px;
  width: 100%;

  .top {
    margin-top: 120px !important;
  }

  .swiper-pagination-bullet {
    width: 60px;
    height: 4px;
    background: ${({ theme }) => theme.palette.common.textDefault};
    border-radius: 0;
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.palette.common.mainBlue};
  }

  .swiper-button-prev {
    left: -2px;
  }

  .swiper-button-next {
    right: -2px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    &::after {
      font-size: 24px;
    }
  }

  @media (max-width: 768px) {
    .swiper-button-prev {
      display: none;
    }

    .swiper-button-next {
      display: none;
    }
  }
`;

export const ReviewsTitle = styled.h2`
  margin: 120px 0 32px;
  padding-left: 60px;
  ${typographyPreset5};
  color: ${({ theme }) => theme.palette.common.textDefault};
`;

export const ReviewCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 108px;

  justify-items: center;
  padding: 20px 29px;
  background-color: white;
  border-radius: 8px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ReviewLogo = styled.img`
  margin: 120px 0;
  max-width: 320px;
  width: 100%;

  @media (max-width: 768px) {
    margin: 40px 0;
    max-width: 240px;
  }
`;

export const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewText = styled.p`
  color: ${({ theme }) => theme.palette.common.textDefault};
  margin-bottom: 10px;
  max-width: 700px;
  ${typographyPreset10};

  @media (max-width: 768px) {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: #1c1c1c;
  }
`;

export const CompanyName = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: #333;
  margin-bottom: 60px;
  ${typographyPreset10};

  span {
    ${typographyPreset11};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    font-weight: 400;
    color: #1c1c1c;
    line-height: 24px;

    span {
      font-size: 14px;
      color: #1c1c1c;
      line-height: 24px;
      font-weight: 600;
    }
  }
`;
