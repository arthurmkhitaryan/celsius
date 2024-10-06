'use client';

import styled from 'styled-components';

export const NewsroomWrapper = styled.div`
  margin: 80px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BannerWrapper = styled.div`
  display: flex;
  gap: 54px;
  padding-bottom: 80px;
  border-bottom: 2px solid #1F94D2;
  margin-bottom: 32px;
`;

export const BannerImage = styled.img`
  max-width: 564px;
  height: 420px;
  width: 100%;
  border-radius: 15px;
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;

export const BannerTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  line-height: 38.4px;
  color: #1C1C1C;
`;

export const BannerDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  color: #666666;
  max-width: 100%;
`;

export const PostAuthor = styled.div`
  color: #969696;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
`;

export const ReadFullButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  height: 100%;
`;

export const ReadFullButton = styled.button`
  max-width: 170px;
  width: 100%; 
  color: #0044CC;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  align-self: flex-end;
  background-color: transparent;
`;

export const Tabs = styled.div`
  display: flex;
`;

export const Tab = styled.button<{ active: boolean }>`
  color: #282828;
  background: transparent;
  padding: 0px 15px;
  border-right: 1px solid #DBE5EA;
  font-size: 18px;
  color: ${props => (props.active ? '#0044CC' : '#282828')};

  &:first-child {
    padding: initial;
    padding-right: 15px;
  }

  &:last-child {
    border-right: none;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`