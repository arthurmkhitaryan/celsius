'use client';

import styled from 'styled-components';
import { typographyPreset5, typographyPreset7 } from '@/styles';

// images
import BgCalc from '@/public/images/home/calculator/calc-bg.png';

export const CalculatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 72px;

  @media (max-width: 768px) {
    margin: 72px 10px 0 10px;
  }
`;

export const CalculatorContainer = styled.div`
  background: url(${BgCalc.src}) no-repeat;
  padding: 80px 134px;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: initial;
    background-position: initial;
    align-items: center;
    flex-direction: row;
    width: 100%;
    min-height: 500px;
  }
`;

export const CalculatorContent = styled.div`
  max-width: 384px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 768px) {
    text-align: left;
    gap: 16px;
    align-items: self-end;
    padding-right: 15px;
    width: 50%;
  }
`;

export const CalculatorTitle = styled.h2`
  ${typographyPreset5};
  color: ${({ theme }) => theme.palette.common.white};

  @media (max-width: 768px) {
    font-size: 24px;
    align-self: flex-start;
  }
`;

export const CalculatorDescription = styled.p`
  ${typographyPreset7};
  padding-right: 16px;
  font-weight: 200;
  color: ${({ theme }) => theme.palette.common.white};

  @media (max-width: 768px) {
    padding-right: 0;
    font-size: 12px;
    font-weight: 400;
    text-align: left;
  }
`;

export const CalculatorButtonWrapper = styled.div`
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
  }

  @media (max-width: 768px) {
    padding-right: 0;
    justify-content: right;

    button {
      width: 80%;
      font-size: 12px;
    }
  }
`;

export const Calculator = styled.div`
  border: 3px solid;
  border-image: linear-gradient(84.68deg, #1f94d2 16.99%, #0044cc 100.33%);
  border-image-slice: 1;
  border-radius: 10px;
  margin-top: -20px;
`;
