'use client';

import styled from 'styled-components';
import { typographyPreset3 } from '@/styles';

export const ServicesWrapper = styled.div`
  display: flex;
  margin: 72px 0 0;
  position: relative;
  max-width: 1140px;
  overflow: hidden;
  background: linear-gradient(84.68deg, #1f94d2 16.99%, #0044cc 100.33%);

  & > .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-bottom: -1px;
  }
`;

export const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 285px;
  width: 100%;
  gap: 0;
  position: relative;
  border-right: 1px solid #fff;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  transform: translateX(0) translateY(0);

  .animate-cooling-icon-one,
  .animate-cooling-icon-two,
  .animate-hvac-icon-one,
  .animate-hvac-icon-two,
  .animate-ventilation-icon-one,
  .animate-ventilation-icon-two,
  .animate-shop-icon-one {
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    .animate-cooling-icon-one {
      transform: translateX(-12%) translateY(-6%);
    }

    .animate-cooling-icon-two {
      transform: translateX(12%) translateY(18%);
    }

    .animate-hvac-icon-one {
      transform: translateX(-11%) translateY(0);
    }

    .animate-hvac-icon-two {
      transform: translateX(12%) translateY(10%);
    }

    .animate-ventilation-icon-one {
      transform: translateX(0) translateY(10%);
    }

    .animate-ventilation-icon-two {
      width: 112px;
      height: 112px;
      transform: translateX(-11%) translateY(0);
    }

    .animate-shop-icon-one {
      width: 135px;
      height: 70px;
      transform: rotate(-12deg);
    }
  }
`;

export const ServiceHeader = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .image-wrapper {
    height: 485px;
    img {
      height: 485px;
    }
  }

  &:hover {
    & > .image-wrapper {
      opacity: 1;
      transition: opacity 0.3s ease-in;
    }
  }
`;

export const ImageWrapper = styled.div`
  opacity: 0.5;
  transition: opacity 0.3s ease-in;
`;

export const ServiceFooter = styled.div`
  background: transparent;
  padding: 20px;
  height: 248px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: -5px;
`;

export const ServiceTitle = styled.h3`
  ${typographyPreset3};
  letter-spacing: 1px;
  color: ${({ theme }) => theme.palette.common.white};
`;

export const ServiceIconWrapper = styled.div`
  & > .icon-wrapper {
    position: absolute;
    bottom: 26%;
    right: 15%;
  }

  & > .animate-cooling-icon-one {
    position: absolute;
    bottom: 25%;
    right: 42%;
  }

  & > .animate-cooling-icon-two {
    position: absolute;
    bottom: 28%;
    right: 10%;
  }

  & > .animate-hvac-icon-one {
    position: absolute;
    bottom: 25%;
    right: 34%;
  }

  & > .animate-hvac-icon-two {
    position: absolute;
    bottom: 22%;
    right: 11%;
  }

  & > .animate-ventilation-icon-one {
    position: absolute;
    bottom: 172px;
    right: 70px;
  }

  & > .animate-ventilation-icon-two {
    position: absolute;
    bottom: 33.5%;
    right: 2%;
  }

  & > .animate-shop-icon-one {
    position: absolute;
    bottom: 29.5%;
    right: 21%;
  }
`;
