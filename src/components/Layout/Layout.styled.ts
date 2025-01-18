'use client';

import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  max-width: 1140px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 120px;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;
