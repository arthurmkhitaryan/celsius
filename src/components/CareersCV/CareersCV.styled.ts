'use client';

import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.common.mainBlue};
  border-radius: 10px;
  padding: 48px 64px 48px 64px;

  @media (max-width: 768px) {
    padding: 24px 32px;
    margin: 30px 16px;

    button {
      margin-top: 16px;
      align-self: center;
      padding: 14px 0;
      width: 100%;
    }
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 32px;
  font-weight: 500;
  line-height: 38.4px;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 36px;
    text-align: center;
  }
`;

export const ContactsSections = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 44px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 24px;
  }

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

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
  }
`;

export const ContactSectionValue = styled.h4`
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 14px;
  }
`;
