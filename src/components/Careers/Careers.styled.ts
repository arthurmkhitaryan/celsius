'use client';

import styled from 'styled-components';
import {
  typographyPreset3,
  typographyPreset5,
  typographyPreset7,
} from '@/styles';

export const CareersSectionWrapper = styled.div<{ $backgroundImage: string }>`
  width: 100%;
  max-height: 520px;
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  margin-bottom: 120px;

  @media (max-width: 768px) {
    min-height: 100vh;
    background-size: cover;
  }
`;

export const CareersSectionContainer = styled.div`
  max-width: 1140px;
  display: flex;
  width: 100%;
  justify-content: end;

  @media (max-width: 768px) {
    max-width: initial;
    justify-content: center;
    width: 70%;
  }
`;

export const CareersSectionContent = styled.div`
  color: ${({ theme }) => theme.palette.common.white};
  max-width: 488px;
  margin-right: 188px;
  padding: 105px 0 70px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-self: self-end;
    margin-right: initial;
    padding: 40px 0 20px;
  }
`;

export const CareersSubTitle = styled.h3`
  ${typographyPreset3};
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 0;
  }
`;

export const CareersTitle = styled.h2`
  ${typographyPreset5};
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 0;
  }
`;

export const CareersDescription = styled.p`
  ${typographyPreset7};
  margin-bottom: 48px;
  padding-right: 30px;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 10px;
    line-height: 15px;
  }
`;

export const CareersButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  width: 100%;

  button {
    background: ${({ theme }) => theme.palette.common.white};
    color: ${({ theme }) => theme.palette.common.mainBlue};
    padding: 16px 32px;
    gap: 10px;
    border: none;
  }

  @media (max-width: 768px) {
    align-self: baseline;
    width: auto;
    margin-top: 2px;
    button {
      font-size: 12px;
    }
  }
`;
