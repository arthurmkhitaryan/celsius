'use client';

import styled from 'styled-components';
import { typographyPreset3, typographyPreset4 } from '@/styles';

export const AchievementItemWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 380px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const AchievementItemIconWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.common.secondaryBlue};
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.palette.common.grayShadow};
  margin-bottom: 30px;

  & > div {
    padding: 30px;
    border: 5px solid ${({ theme }) => theme.palette.common.white};
    border-radius: 50%;
  }

  & > div > img {
    max-width: 50px;
    height: 48px;
  }
`;

export const AchievementItemTitle = styled.h3`
  ${typographyPreset3};
  color: ${({ theme }) => theme.palette.common.textGray};
  text-align: center;
  margin-bottom: 20px;
`;

export const AchievementItemDescription = styled.p`
  ${typographyPreset4};
  color: ${({ theme }) => theme.palette.common.textGrayLight};
  text-align: center;
  padding: 0 25px;
  display: flex;
`;
