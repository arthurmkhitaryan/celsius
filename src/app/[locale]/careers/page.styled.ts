'use client';

import styled from 'styled-components';
import { typographyPreset12 } from '@/styles';
import React from 'react';

export const CareerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

export const CareerBanner = styled.div<{ $backgroundImage: string }>`
  width: 100%;
  background-image: linear-gradient(
      rgba(0, 68, 204, 0.6),
      rgba(0, 68, 204, 0.6)
    ),
    url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  max-height: 828px;
`;

export const CareerBannerContent = styled.div`
  text-align: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  color: white;
  gap: 24px;
  margin-top: 418px;
  margin-bottom: 196px;
`;

export const CareerBannerSubTitle = styled.h3`
  ${typographyPreset12};
`;

export const CareerBannerTitle = styled.h1`
  font-size: 60px;
  font-weight: 700;
  line-height: 38.4px;
`;

export const CareerBannerDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  max-width: 704px;
`;

export const TextContent = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const TextTitle = styled.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: 38.4px;
`;

export const TextDescription = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  color: rgba(79, 79, 79, 1);
`;

export const CareerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const BackgroundLogo = styled.div``;
