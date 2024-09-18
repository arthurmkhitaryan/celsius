'use client';

import styled from 'styled-components';

export const SliderWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const SlideContentWrapper = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  z-index: 10;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

export const Slide = styled.div<{
  $backgroundImage: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.$backgroundImage});
  position: relative;
`;

export const SlideTitle = styled.h2`
  color: #D9D9D9;
  font-size: 32px;
  font-weight: 600;
`;

export const SlideContent = styled.div`
  color: #D9D9D9;
  line-height: 16px;
  margin: 10px 0 20px 0;
  font-size: 12px;
  font-weight: 600;
`;

export const ButtonWrapper = styled.div`
`;

export const CalculatorButton = styled.button`
  background: #ffffff;
  font-weight: 600;
  color: #0044CC;
  padding: 12px 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 12px;
`;

export const CustomNavigationButton = styled.div<{
  $left?: boolean;
  $image: string;
}>`
  background-image: url('${({ $image }) => $image}');
  position: absolute;
  top: 95%;
  width: 44px;
  height: 44px;
  background-repeat: no-repeat;
  border-radius: 50%;
  z-index: 10;
  background-size: 20px;
  background-position: 12px 13px;
  cursor: pointer;
  transform: translateY(-50%);
  ${(props) => (props.$left ? 'left: 20px;' : 'right: 20px;')}

  &:hover {
    transition: all 0.2s ease-in;
  }
`;
