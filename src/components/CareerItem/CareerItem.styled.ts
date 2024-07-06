'use client';

import styled from 'styled-components';

export const CareerItemContainer = styled.div`
  padding: 32px 32px 26px;
  border: 2px solid ${({ theme }) => theme.palette.common.mainBlue};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.palette.common.hoverBlueLight};
  }
`;

export const CareerItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CareerItemTitle = styled.h3`
  font-size: 28px;
  font-weight: 500;
  line-height: 25.2px;
  color: #1c1c1c;
  margin-bottom: -5px;
`;
export const CareerItemInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const CareerAddress = styled.p`
  color: #828282;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
`;

export const CareerItemPostDate = styled.p`
  color: #828282;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
`;
