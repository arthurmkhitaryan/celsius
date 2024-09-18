'use client';

import styled from 'styled-components';
import { typographyPreset5, typographyPreset6 } from '@/styles';

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 120px;

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

export const DescriptionTitle = styled.h2`
  ${typographyPreset5};
  color: ${({ theme }) => theme.palette.common.textDefault};

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  ${typographyPreset6};
  color: ${({ theme }) => theme.palette.common.textDefault};

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 18px;
  }
`;
