'use client';

import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.common.mainBlue};
  border-radius: 10px;
  padding: 48px 64px 48px 64px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 32px;
  font-weight: 500;
  line-height: 38.4px;
`;

export const ContactsSections = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 44px;

  button {
    background-color: ${({ theme }) => theme.palette.common.white};
    color: ${({ theme }) => theme.palette.common.mainBlue};

    &:hover {
      background-color: transperant;
    }
  }
`;

export const ContactsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  color: ${({ theme }) => theme.palette.common.white};
`;

export const ContactSectionValue = styled.h4`
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
`;
