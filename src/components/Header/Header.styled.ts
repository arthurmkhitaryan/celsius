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

export const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 36px;
`;

export const TotalPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 56px;

  p {
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    color: #1c1c1c;
  }
`;

export const Price = styled.span`
  color: #0044cc;
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;

  span {
    margin-left: 2px;
    font-size: 16px;
    font-weight: 600;
  }
`;

export const OrderButton = styled.button`
  padding: 16px 46px;
  margin-top: 18px;
  background: #0044cc;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  text-transform: uppercase;
  box-shadow:
    0px 5px 15px rgba(37, 44, 97, 0.15),
    /* First shadow */ 0px 2px 4px rgba(136, 144, 194, 0.2); /* Second shadow */
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
