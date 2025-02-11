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
    margin-top: 20px;
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
    padding: 16px 32px 16px 20px;
  border-radius: 4px;
  font-weight: 600;
  gap: 10px;
  display: flex;
  align-items: center;
  align-self: baseline;
  z-index: 1;
  white-space: nowrap;
`;

export const ServiceIconWrapper = styled.div`
  position: relative;
  height: 40%;
    margin: 0 22px;

  & > .icon-wrapper {
    position: relative;
    bottom: 60%;
    min-width: 150px;
    min-height: 180px;
  }

  & > .animate-hvac-icon-first {
      bottom: -11%;
      left: -12%;
    position: absolute;
  }

  & > .animate-hvac-icon-two {
      bottom: -72%;
      left: 52%;
    position: absolute;
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
