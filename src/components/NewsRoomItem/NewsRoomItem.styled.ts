'use client';

import styled from 'styled-components';

export const NewsroomWrapper = styled.div`
  margin: 30px 0 10px 0;
  width: 100%;

  @media (max-width: 768px) {
    margin: 0;
    max-width: 80vw;
  }
`;

export const BannerWrapper = styled.div`
  display: flex;
  gap: 54px;
  padding-bottom: 50px;
  border-bottom: 2px solid #dbe5ea;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 20px;
    margin-bottom: 0;
  }
`;

export const BannerImage = styled.img`
  max-width: 380px;
  height: 228px;
  width: 100%;
  border-radius: 15px;
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export const BannerTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  line-height: 38.4px;
  color: #1c1c1c;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 30.4px;
  }
`;

export const BannerDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  color: #666666;
  max-width: 100%;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const PostAuthor = styled.div`
  color: #969696;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  display: flex;
  align-items: end;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 30.4px;
  }
`;

export const ReadFullButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const ReadFullButton = styled.button`
  max-width: 170px;
  width: 100%;
  color: #0044cc;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  align-self: flex-end;
  background-color: transparent;

  @media (max-width: 768px) {
    align-self: flex-start;
    margin-top: 10px;
  }
`;

export const Tabs = styled.div`
  display: flex;
`;

export const Tab = styled.button`
  color: #282828;
  background: transparent;
  padding: 0px 15px;
  border-right: 1px solid #dbe5ea;
  font-size: 18px;

  &:first-child {
    padding: initial;
    padding-right: 15px;
  }

  &:last-child {
    border-right: none;
  }
`;
