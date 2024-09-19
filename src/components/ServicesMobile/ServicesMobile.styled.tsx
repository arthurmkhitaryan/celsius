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
`

export const ContentTitle = styled.h2`
  color: #0044CC;
  width: 50%;
`

export const ContentDescription = styled.p`
  color: #1C1C1C;
  width: 50%;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 10px;
`

export const ViewMoreButton = styled.button`
  padding: 12px 36px 12px 36px;
  background: #fff;
  color: #0044CC;
  display: flex;
  max-width: 160px;
  border-radius: 4px;
  align-items: center;
  gap: 10px;
  font-size: 12px;
}
`

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

export const FooterMenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  color: #fff;
  background-color: ${props => (props.isActive ? '#1F94D2' : '#0044CC')};
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
    right: 29%;
  }

  & > .animate-cooling-icon-one {
    position: absolute;
    bottom: 25%;
    right: 29%;
  }

    & > .animate-ventilation-icon-one {
    position: absolute;
    bottom: 25%;
    right: 29%;
    height: 80px;
  }

  & > .animate-cooling-icon-two {
    position: absolute;
    bottom: 0%;
    right: 10%;
  }

  & > .animate-hvac-icon-two {
    position: absolute;
    bottom: 20%;
    right: 16%;
    height: 90px
  }

  & > .animate-ventilation-icon-two {
    position: absolute;
    bottom: 20%;
    right: 10%;
    height: 160px;
  }

  & > .animate-shop-icon-one {
    position: absolute;
    bottom: 29.5%;
    right: 25%;
  }

  img {
    width: 100px;
    height: 100px;
  }
`;

