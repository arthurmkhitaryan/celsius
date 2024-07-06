'use client';

import styled from 'styled-components';
import { typographyPreset2 } from '@/styles';

export const LanguageWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const LanguageSelect = styled.select`
  ${typographyPreset2};
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 40px;
  background-position-y: 12px;
  padding: 1rem;
  cursor: pointer;
  padding-left: 0;
  padding-right: -6px;
  select::-ms-expand {
    display: none;
  }
`;

export const LanguageOption = styled.option``;
