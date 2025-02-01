import styled from 'styled-components';

export const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ServiceItem = styled.div`
  background: white;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: center;
  cursor: pointer;
`;

export const ServiceHeader = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ImageContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 10px;
  margin: 40px 10px 10px 20px;

  img {
    width: 53px;
    height: 53px;
  }
`;

export const ContentTitle = styled.h2`
  color: #0044cc;
  width: 50%;
`;

export const ContentDescription = styled.p`
  color: #1c1c1c;
  width: 50%;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 10px;
`;

export const ViewMoreButton = styled.button`
  padding: 12px 36px 12px 36px;
  background: #fff;
  color: #0044cc;
  display: flex;
  max-width: 160px;
  border-radius: 4px;
  align-items: center;
  gap: 10px;
  font-size: 12px;
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  object-position: 0 3%;
`;

export const ServiceFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: #f5f5f5;
`;

export const ServiceTitle = styled.h3`
  margin-top: 10px;
  font-size: 1.4rem;
  color: #333;
  font-weight: bold;
`;

export const FooterMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: white;
  flex-direction: column;
  text-align: center;
`;

export const FooterMenuItem = styled.div<{ isActive: boolean }>`
  padding: 10px;
  cursor: pointer;
  color: #fff;
  background-color: ${(props) => (props.isActive ? '#1F94D2' : '#0044CC')};
  border-bottom: 2px solid #fff;
  padding: 16px 10px 16px 10px;
  font-size: 16px;
`;

export const ServiceIconWrapper = styled.div`
  position: relative;

  & > .icon-wrapper {
    position: absolute;
    bottom: 26%;
    right: 22%;
  }

  & > .animate-hvac-icon-one {
    position: absolute;
    bottom: 25%;
    right: 31%;
  }

  & > .animate-cooling-icon-one {
    position: absolute;
    bottom: 25%;
    right: 29%;
    width: 80px;
  }

  & > .animate-ventilation-icon-one {
    position: absolute;
    bottom: 25%;
    right: 23%;
    width: 121px;
  }

  & > .animate-cooling-icon-two {
    position: absolute;
    bottom: -10px;
    right: 16%;
    width: 80px;
  }

  & > .animate-hvac-icon-two {
    position: absolute;
    bottom: -9px;
    right: 15%;
    height: 86px;
    transform: rotateZ(-176deg);
  }

  & > .animate-ventilation-icon-two {
    position: absolute;
    bottom: 20%;
    right: 10%;
    height: 105px;
    width: 126px;
  }

  & > .animate-shop-icon-one {
    position: absolute;
    bottom: 29.5%;
    right: 25%;
  }

  .animate-shop-icon-two {
    position: absolute;
    bottom: 29.5%;
    right: 20%;
    width: 42px;
  }

  img {
    width: 100px;
    height: 100px;
  }
`;
