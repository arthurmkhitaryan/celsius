'use client';

import styled from 'styled-components';
import { typographyPreset6 } from '@/styles';

export const NewsroomItemWrapper = styled.div`
  box-shadow: 4px 4px 20px 0 #1f94d233;
  max-width: 366px;
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) => theme.palette.common.hoverBlueLight};
  }
`;

export const NewsroomItemImage = styled.img`
  max-height: 200px;
`;

export const NewsroomItemContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NewsroomItemLeftSide = styled.div``;

export const NewsroomItemDesc = styled.p`
  ${typographyPreset6};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  max-width: 170px;
  text-overflow: ellipsis;
`;

export const NewsroomItemRightSide = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const NewsroomItemDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`;

export const NewsroomItemDateNumber = styled.span`
  ${typographyPreset6};
`;
