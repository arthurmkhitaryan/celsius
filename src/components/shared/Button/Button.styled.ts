'use client';

import styled from 'styled-components';
import { typographyPreset1 } from '@/styles';

export const Button = styled.button<{
  $btnStyle?: 'bordered' | 'filled';
  $width?: number;
  $py?: number;
  $px?: number;
}>`
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
  max-width: 100%;
  max-height: 100%;
  padding: ${({ $px, $py }) => `${$py}px ${$px}px`};
  ${typographyPreset1};
  transition: all 0.3s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ $btnStyle, theme }) =>
      $btnStyle === 'bordered'
        ? theme.palette.common.mainBlue
        : theme.palette.common.hoverBlue};
    color: ${({ $btnStyle, theme }) =>
      $btnStyle === 'bordered' ? 'white' : theme.palette.common.mainBlue};
    transition: all 0.3s ease-in;
  }
`;
