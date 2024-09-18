'use client';

import styled from 'styled-components';
import { typographyPreset3, typographyPreset5 } from '@/styles';

export const NewsroomWrapper = styled.div`
  margin: 120px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NewsroomTitle = styled.h2`
  ${typographyPreset5};
  color: ${({ theme }) => theme.palette.common.textDefault};

  @media (max-width: 768px) {
      font-size: 24px;
      margin: 20px 20px 0 20px;
  }
`;

export const NewsroomContent = styled.div``;

export const SeeAllButton = styled.button`
  ${typographyPreset3};
  background: transparent;
  color: ${({ theme }) => theme.palette.common.mainBlue};
  margin-top: 28px;
  display: flex;
  align-items: center;
  gap: 5px;
  align-self: flex-end;
`;

export const NewsroomList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 48px;

  @media (max-width: 768px) {
      flex-direction: column;
      gap: 20px;
      margin-top: 20px;
  }
`;
