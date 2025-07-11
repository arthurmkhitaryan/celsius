import styled, { keyframes, css } from 'styled-components';
import { typographyPreset3 } from '@/styles';

export const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: no-wrap;
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

export const ServiceItem = styled.div<{
  serviceSingleShow?: boolean;
  isExpanded?: boolean;
}>`
  display: flex;
  flex-direction: column;
  opacity: ${({ serviceSingleShow, isExpanded }) =>
    serviceSingleShow && !isExpanded ? 0 : 1};
  z-index: ${({ serviceSingleShow, isExpanded }) =>
    serviceSingleShow && isExpanded ? 10 : serviceSingleShow ? -1 : 1};
  visibility: ${({ serviceSingleShow, isExpanded }) =>
    serviceSingleShow && !isExpanded ? 'hidden' : 'visible'};
  width: ${({ serviceSingleShow, isExpanded }) =>
    serviceSingleShow ? (isExpanded ? '100%' : '0px') : '285px'};
  position: relative;
  border-right: 1px solid #fff;
  background-attachment: fixed;
  cursor: pointer;
  transform: ${({ serviceSingleShow, isExpanded }) =>
    serviceSingleShow && isExpanded && 'scale(1)'};
  transition: all 0.5s ease-in;
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
      transform: translateX(12%) translateY(10%) rotate(185deg);
    }

    .animate-ventilation-icon-one {
      transform: translateX(0) translateY(10%);
    }

    .animate-ventilation-icon-two {
      transform: translateX(11%) translateY(0);
    }

    .animate-shop-icon-one {
      width: 135px;
      height: 70px;
      transform: rotate(-12deg);
    }

    .animate-shop-icon-two {
      transform: translateX(30%) translateY(10%) rotate(12deg);
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

export const ImageWrapper = styled.div<{
  serviceSingleShow?: boolean;
  isExpanded?: boolean;
  imageUrl?: string;
}>`
  opacity: ${({ serviceSingleShow, isExpanded }) =>
    serviceSingleShow && isExpanded ? 1 : 0.5};
  transition: opacity 0.4s ease-in;
  width: 100%;
  background: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1s ease-in-out;
  }
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
  font-size: 22px;
`;

export const ServiceIconWrapper = styled.div`
  & > .icon-wrapper {
    position: absolute;
    bottom: 26%;
    right: 15%;
    transition: all;
  }

  & > .animate-cooling-icon-one {
    position: absolute;
    bottom: 28%;
    right: 35%;
  }

  & > .animate-cooling-icon-two {
    position: absolute;
    bottom: 25%;
    right: 15%;
  }

  & > .animate-hvac-icon-one {
    position: absolute;
    bottom: 31%;
    right: 34%;
    transform: rotate(-40deg);
  }

  & > .animate-hvac-icon-two {
    position: absolute;
    bottom: 24%;
    right: 10%;
    transform: rotate(185deg);
  }

  & > .animate-ventilation-icon-one {
    position: absolute;
    bottom: 216px;
    right: 60px;
  }

  & > .animate-ventilation-icon-two {
    position: absolute;
    bottom: 24%;
    right: 0%;
  }

  & > .animate-shop-icon-one {
    position: absolute;
    bottom: 29.5%;
    right: 21%;
  }

  & > .animate-shop-icon-two {
    position: absolute;
    bottom: 24%;
    right: 18%;
    transform: rotate(8deg);
  }
`;
