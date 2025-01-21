'use client';

import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0 20px 0;

  @media (max-width: 768px) {
    justify-content: space-between;
    flex-direction: column;
    padding: 20px;
    width: 100%;
  }

  .sign-in:hover {
    color: white;
  }
`;

export const HeaderLeftSide = styled.div`
  img {
    cursor: pointer;
  }
`;

export const CartButton = styled.button`
  background: transparent;
  cursor: pointer;
  outline: none;
  position: relative;
  z-index: 1000;

  span {
    position: absolute;
    background: #0044cc;
    width: 22px;
    height: 21px;
    padding: 2px;
    border-radius: 50%;
    color: white;
    font-weight: 600;
    font-size: 14px;
    top: -10px;
    right: -12px;
  }
`;

export const HeaderRightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  @media (max-width: 768px) {
    display: none; // Hide the desktop header on mobile
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  height: calc(100vh - 80px);
  background-color: white;
  z-index: 1000;
`;

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 20px;
  width: 100%;
  justify-content: space-around;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const TabletButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 30px;
`;

export const FullWidthButton = styled.div`
  width: 100%;
  font-weight: 600;

  button {
    width: 100%;
    gap: 10px;
  }
`;

export const SignInWrapper = styled.div`
  position: relative;
`;

export const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;

    :nth-child(3) {
      border-left: 1px solid #f2f6fd;
      padding-left: 10px;
      display: block;
      width: 100%;
    }
  }
`;
