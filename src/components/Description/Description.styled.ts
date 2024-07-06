'use client';

import styled from 'styled-components';
import { typographyPreset5, typographyPreset6 } from '@/styles';

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 120px;
`;

export const DescriptionTitle = styled.h2`
  ${typographyPreset5};
  color: ${({ theme }) => theme.palette.common.textDefault};
`;

export const Description = styled.p`
  ${typographyPreset6};
  color: ${({ theme }) => theme.palette.common.textDefault};
`;
