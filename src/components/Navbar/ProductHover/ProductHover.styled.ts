import styled from 'styled-components';

export const HoverComponent = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  width: 100vw;
  max-width: 1320px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  height: 100vh;
  max-height: 518px;
`;

export const HoverContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around; 
`;

export const ContentInfo = styled.p`
    color: #828282;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    padding-bottom: 15px;
`;

export const HoverContainer = styled.div``

export const ContentHeader = styled.div`
    display: flex;
    gap: 10px;
    border-bottom: 1px solid #D9D9D9;
    padding-bottom: 10px;
    margin-bottom: 10px;
    h4 {
        font-size: 24px;
        font-weight: 500;
        color: #1C1C1C;
        line-height: 26px;
    }
`