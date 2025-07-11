import styled from 'styled-components';
import { typographyPreset3 } from '@/styles';

export const ServiceHeader = styled.div`
  width: 100%;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 480px;
  }
`;

export const ServiceFooter = styled.div`
  background: transparent;
  padding: 20px 25px;
  height: 248px;
  display: flex;
  margin-top: -5px;
  border-right: 1px solid #fff;
  position: relative;
`;

export const TextContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
`;

export const ServiceAdditionalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ServiceAdditionalContent = styled.span`
  color: white;
  font-size: 11px;
  font-weight: 400;
  margin-bottom: 20px;
`;

export const ServiceAdditionalButton = styled.button`
  background: white;
  color: #0044cc;
  padding: 16px 32px 16px 32px;
  border-radius: 4px;
  font-weight: 600;
  gap: 10px;
  display: flex;
  align-items: center;
  align-self: baseline;
  z-index: 1;
`;

export const ServiceIconWrapper = styled.div`
  position: relative;
  height: 40%;
  margin: 0 30px;

  & > .icon-wrapper {
    position: relative;
    bottom: 60%;
    min-width: 180px;
    min-height: 180px;
  }

  & > .animate-hvac-icon-first {
    bottom: -20%;
    left: 0;
    position: absolute;
    min-width: 130px;
    min-height: 194px;
  }

  & > .animate-hvac-icon-second {
    position: absolute;
    right: 10%;
    min-width: 146px;
    min-height: 165px;
    top: 0%;
  }
`;

export const ServiceTitle = styled.h3`
  ${typographyPreset3};
  letter-spacing: 1px;
  color: ${({ theme }) => theme.palette.common.white};
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
