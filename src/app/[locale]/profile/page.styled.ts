'use client';

import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  margin: 80px 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1140px;
  padding: 0 15px;
  margin-bottom: 50px;
`;

export const Sidebar = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  padding-right: 20px;
`;

export const Username = styled.h2`
  font-size: 22px;
  font-weight: 400;
  color: #1C1C1C;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #F2F6FD;
`;


export const MenuItem = styled.div.attrs<{ active: boolean }>(props => ({
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
        background-color: #F2F6FD;
        color: #1C1C1C;
    }
`;

