'use client';

import styled from 'styled-components';
import { typographyPreset5 } from '@/styles';

export const OurPartnersWrapper = styled.div``;

export const OurPartnersTitle = styled.h2`
  ${typographyPreset5};
  color: ${({ theme }) => theme.palette.common.textDefault};
`;

export const OurPartnersContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 48px;
`;

export const OurPartnersLogo = styled.img`
  width: 100%;
  max-width: 232px;
`;
