'use client';

import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  margin: 80px 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;

  @media (max-width: 768px) {
    margin: 20px 0;
    gap: 40px;
    align-items: flex-start;
    padding: 0 20px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1140px;
  padding: 0 15px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    margin-bottom: 0;
  }
`;

export const Sidebar = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  padding-right: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    width: 100%;
    padding: 0;
  }
`;

export const Username = styled.h2`
  font-size: 22px;
  font-weight: 400;
  color: #1c1c1c;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f2f6fd;

  @media (max-width: 768px) {
    display: flex;
    white-space: nowrap;
  }
`;

export const MenuItem = styled.div.attrs<{ active: boolean }>((props) => ({
  style: {
    backgroundColor: props.active ? '#F2F6FD' : 'transparent',
    color: props.active ? '#1C1C1C' : '#666666',
  },
}))`
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 12px;

  &:hover {
    background-color: #f2f6fd;
    color: #1c1c1c;
  }
`;
