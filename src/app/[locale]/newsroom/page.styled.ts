'use client';

import styled from 'styled-components';

export const NewsroomWrapper = styled.div`
  margin: 80px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin: 30px 0;
    padding: 30px;
  }
`;

export const BannerWrapper = styled.div`
  display: flex;
  gap: 54px;
  padding-bottom: 80px;
  border-bottom: 2px solid #1f94d2;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding-bottom: 30px;
  }
`;

export const BannerImage = styled.img`
  max-width: 564px;
  height: 420px;
  width: 100%;
  border-radius: 15px;
  object-fit: cover;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 20px;
    gap: 12px;
  }
`;

export const BannerTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  line-height: 38.4px;
  color: #1c1c1c;

  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 30.4px;
  }
`;

export const BannerDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  color: #666666;
  overflow: hidden;
  height: 245px;

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
  white-space: nowrap;
    
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
  }
`;

export const ReadFullButton = styled.button`
  width: 100%;
  color: #0044cc;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  align-self: flex-end;
    white-space: nowrap;
    padding-bottom: 5px;
  background-color: transparent;

  @media (max-width: 768px) {
    align-self: start;
    text-align: left;
    justify-content: flex-start;  
  }
`;

export const Tabs = styled.div`
  display: flex;
`;

export const Tab = styled.button<{ active: boolean }>`
  color: #282828;
  background: transparent;
  padding: 0px 15px;
  border-right: 1px solid #dbe5ea;
  font-size: 18px;
  color: ${(props) => (props.active ? '#0044CC' : '#282828')};

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
`;
