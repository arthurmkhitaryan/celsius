'use client';

import styled from 'styled-components';
import { typographyPreset1 } from '@/styles';

export const Button = styled.button<{
  $btnStyle?: 'bordered' | 'filled';
  $width?: number;
  $py?: number;
  $px?: number;
}>`
  position: relative;
  border: ${({ theme }) => `2px solid ${theme.palette.common.mainBlue}`};
  background-color: ${({ $btnStyle, theme }) =>
    $btnStyle === 'bordered' ? 'transparent' : theme.palette.common.mainBlue};
  color: ${({ $btnStyle, theme }) =>
    $btnStyle === 'bordered' ? theme.palette.common.mainBlue : 'white'};
  width: ${({ $width }) => ($width ? `${$width}px` : '100%')};
  white-space: nowrap;
  outline: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  max-height: 100%;
  padding: ${({ $px, $py }) => `${$py}px ${$px}px`};
  ${typographyPreset1};
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 210px;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;

  img {
    position: relative;
    left: 10px;
  }

  &:hover {
    top: -2px;
      img {
        left: 12px;
      }

    ${({ $btnStyle }) =>
      $btnStyle === 'filled' &&
      `
      background-color: #0044ccf5;
      border: 2px solid #0044ccf5;
    `}
  }
`;
