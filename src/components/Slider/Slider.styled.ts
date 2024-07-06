'use client';

import styled from 'styled-components';

export const SliderWrapper = styled.div`
  width: 100%;
`;

export const Slide = styled.div<{
  $backgroundImage: string;
  $backgroundPosition: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 800px;
  background-size: cover;
  background-position: ${(props) => props.$backgroundPosition};
  background-image: url(${(props) => props.$backgroundImage});
  margin-left: -1px;
`;

export const SlideContent = styled.div`
  text-align: center;
  color: white;
`;

export const CustomNavigationButton = styled.div<{
  $left?: boolean;
  $image: string;
}>`
  background-color: ${({ theme }) => theme.palette.common.white};
  background-image: url('${({ $image }) => $image}');
  position: absolute;
  top: 60%;
  width: 44px;
  height: 44px;
  background-repeat: no-repeat;
  border-radius: 50%;
  z-index: 10;
  background-size: 20px;
  background-position: 12px 13px;
  cursor: pointer;
  transform: translateY(-50%);
  ${(props) => (props.$left ? 'left: 50px;' : 'right: 50px;')}

  &:hover {
    transition: all 0.2s ease-in;
  }
`;
