'use client';

import styled from 'styled-components';

export const FooterWrapper = styled.header`
  display: flex;
  flex-direction: column;
`;

export const LetsStayInTouch = styled.div`
  background-color: #eff3f7;
  width: 100%;
  padding: 78px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LetsStayInTouchContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1140px;
  width: 100%;
`;

export const LetsStayInTouchContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const LetsStayInTouchForm = styled.form`
  display: flex;
`;

export const LetsStayInTouchContentTItle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 38.4px;
  color: #0d2427;
`;

export const LetsStayInTouchContentDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  color: #797979;
`;

export const LetsStayInTouchContentInput = styled.input`
  height: 60px;
  max-width: 354px;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  color: #0d2427;
  padding: 15px 24px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  ::placeholder {
    color: #797979;
  }
`;

export const LetsStayInTouchContentButton = styled.button`
  background-color: #0044cc;
  padding: 12px 24px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  line-height: 25.2px;
  text-align: center;
  color: #ffffff;
  height: 60px;
  transition: all 0.3s;

  &:hover {
    background-color: #003193;
    transition: all 0.3s;
  }
`;

export const FooterContent = styled.div`
  background: ${({ theme }) => theme.palette.common.mainBlue};
  display: flex;
  justify-content: center;
`;

export const FooterContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  max-width: 1140px;
  width: 100%;
  padding: 48px 0;
`;

export const FooterContentHeader = styled.div`
  width: 100%;
`;

export const FooterContentFooter = styled.div`
  padding-left: 30px;
  display: flex;
  gap: 25px;
`;

export const FooterContentSections = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1fr;

  .middle {
    display: flex;
    justify-content: center;
  }

  .last {
    display: flex;
    justify-content: flex-end;
    border: none;
  }
`;

export const FooterSection = styled.div`
  border-right: 1px solid #d9d9d9;
`;

export const FooterSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const FooterSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
  font-size: 24px;
  font-weight: 500;
  line-height: 25.2px;
  text-align: left;
  color: white;
  margin-bottom: 12px;
`;

export const FooterSectionItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  text-align: left;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  color: #d9d9d9;
`;
