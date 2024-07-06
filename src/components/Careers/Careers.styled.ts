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
`;

export const CareersSectionContainer = styled.div`
  max-width: 1140px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const CareersSectionContent = styled.div`
  color: ${({ theme }) => theme.palette.common.white};
  max-width: 348px;
  margin-right: 188px;
  padding: 155px 0 70px;
`;

export const CareersSubTitle = styled.h3`
  ${typographyPreset3};
  margin-bottom: 16px;
`;

export const CareersTitle = styled.h2`
  ${typographyPreset5};
  margin-bottom: 32px;
`;

export const CareersDescription = styled.p`
  ${typographyPreset7};
  margin-bottom: 48px;
  padding-right: 30px;
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

    &:hover {
      background: #e9e9e9;
    }

    svg {
      fill: ${({ theme }) => theme.palette.common.mainBlue};
    }
  }
`;
