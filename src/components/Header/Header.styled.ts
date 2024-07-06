'use client';

import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;

  .sign-in:hover {
    color: white;
  }
`;

export const HeaderLeftSide = styled.div`
  img {
    cursor: pointer;
  }
`;

export const HeaderRightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 32px;
`;
