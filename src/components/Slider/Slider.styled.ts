'use client';

import styled from 'styled-components';

export const SliderWrapper = styled.div`
    width: 100%;
`;

export const SlideContentWrapper = styled.div<{ translateX: number, isActive: boolean }>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translateX(${(props) => props.translateX}%);
    width: 33%;
    text-align: left;
    z-index: 10;
    opacity: ${(props) => (props.isActive ? 1 : 0)};
    transition: transform 0.25s ease, opacity 0.30s linear;
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
    position: relative;
`;

export const SlideTitle = styled.h2`
    color: #D9D9D9;
    font-size: 48px;
    font-weight: 600;
`;

export const SlideContent = styled.div`
    color: #D9D9D9;
    line-height: 30px;
    margin: 20px 0 40px 0;
    font-weight: 700;
    font-size: 18px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const CalculatorButton = styled.button`
    background: #ffff;
    font-weight: 600;
    color: #0044CC;
    padding: 16px 32px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
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
