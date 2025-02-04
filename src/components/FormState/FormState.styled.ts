'use client';

import styled from 'styled-components';

export const FormStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  width: 460px;
  z-index: 2000;
`;

export const IconSection = styled.div<{ $isError: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background: ${({ $isError }) => ($isError ? '#E34C5F' : '#32DB66')};
`;

export const Button = styled.button<{ $isError: boolean }>`
  margin-top: 20px;
  outline: none;
  border: none;
  padding: 16px 64px;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  line-height: 14px;
  background: ${({ $isError }) => ($isError ? '#E34C5F' : '#32DB66')};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 0 32px;
  gap: 4px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const Title = styled.h3<{ $withText: boolean }>`
  font-size: ${({ $withText }) => ($withText ? '24px' : '32px')};
  font-weight: 700;
  color: #0d2427;
`;

export const Description = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #9f9f9f;
  text-align: center;
  max-width: 324px;
`;
