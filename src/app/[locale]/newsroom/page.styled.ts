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
`;

export const BannerImage = styled.img`
  max-width: 564px;
  width: 100%;
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
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
`;

export const PostAuthor = styled.div`
  color: #969696;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
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