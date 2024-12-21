import Link from 'next/link';
import styled from 'styled-components';

export const HoverComponent = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f8f8f8;
  width: 100vw;
  max-width: 1320px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  max-height: 518px;
`;

export const HoverContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const ContentInfo = styled(Link)`
  color: #828282;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  padding-bottom: 15px;
  text-decoration: none;
  cursor: pointer;
`;

export const HoverContainer = styled.div`
  margin-top: 30px;
  padding-bottom: 15px;
`;

export const ContentHeader = styled.div`
  display: flex;
  gap: 10px;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 10px;
  margin-bottom: 10px;
  h4 {
    font-size: 24px;
    font-weight: 500;
    color: #1c1c1c;
    line-height: 26px;
  }
`;
