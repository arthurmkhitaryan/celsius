import styled from 'styled-components';

export const CardItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 58px;
`;

export const Image = styled.img`
  max-width: 180px;
  width: 100%;
`;

export const ProductName = styled.h4`
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  color: #1c1c1c;
`;

export const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  span {
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    color: #0d2427;
  }
`;

export const Counter = styled.div`
  border: 1px solid #e6e8e9;
  display: flex;
  border-radius: 8px;
  align-items: center;

  span {
    font-size: 20px;
    line-height: 30px;
    font-weight: 500;
    padding: 5px 12px;
  }

  button {
    background: transparent;
    outline: none;
    border: none;
    font-size: 22px;
    line-height: 30px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 32px;
    max-width: 32px;
    width: 100%;
    height: 100%;
    color: #0d2427;
    padding: 5px 12px;
  }
`;
export const ProductPrice = styled.p`
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  color: #1c1c1c;
  position: relative;

  span {
    font-size: 12px;
    position: absolute;
    bottom: -2px;
    left: 80px;
    font-weight: 700;
  }
`;
