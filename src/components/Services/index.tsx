'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import * as S from './Services.styled';
import ServicesFooterVector from '@/public/images/home/services/bottom-vector.svg';
import IconWrapper from '@/public/images/home/services/icon-wrapper.svg';
import SingleImage from '@/public/images/home/services/5.jpeg';
// ...
import CoolingMain from '@/public/images/home/services/1.jpg';
import CoolingIcon from '@/public/images/home/services/icons/cooling.svg';
import CoolingAnimateIconOne from '@/public/images/home/services/icons/cooling-1.svg';
import CoolingAnimateIconTwo from '@/public/images/home/services/icons/cooling-2.svg';
// ...
import HvacMain from '@/public/images/home/services/2.jpg';
import HvacIcon from '@/public/images/home/services/icons/hvac.svg';
import HvacAnimateIconOne from '@/public/images/home/services/icons/hvac-1.svg';
import HvacAnimateIconTwo from '@/public/images/home/services/icons/hvac-2.svg';
// ...
import VentilationMain from '@/public/images/home/services/3.jpg';
import VentilationIcon from '@/public/images/home/services/icons/ventilation.svg';
import VentilationAnimateIconOne from '@/public/images/home/services/icons/ventilation-1.svg';
import VentilationAnimateIconTwo from '@/public/images/home/services/icons/ventilaton-2.svg';
// ...
import ShopMain from '@/public/images/home/services/4.jpg';
import ShopAnimateIconOne from '@/public/images/home/services/icons/shop-1.svg';
import ServiceSingle from '@/components/ServiceSingle';

function Services() {
  const [serviceSingleShow, setServiceSingleShow] = useState(false);
  const [hideOthers, setHideOthers] = useState(false);

  const showServiceSingle = () => {
    setServiceSingleShow(true);
  };

  useEffect(() => {
    if (serviceSingleShow) {
      const timeoutId = setTimeout(() => {
        setHideOthers(true);
      }, 500);
      return () => clearTimeout(timeoutId);
    } else {
      setHideOthers(false);
    }
  }, [serviceSingleShow]);

  return (
    <S.ServicesWrapper>
        {!hideOthers && <S.ServiceItem serviceSingleShow={serviceSingleShow}>
          <S.ServiceHeader>
            <S.ImageWrapper className="image-wrapper">
              <Image src={CoolingMain} alt="Celsius Service" priority />
            </S.ImageWrapper>
          </S.ServiceHeader>
          <S.ServiceIconWrapper>
            <Image className="icon-wrapper" src={IconWrapper} alt={'Icon Wrapper'} />
            <Image className="animate-cooling-icon-one" src={CoolingAnimateIconOne} alt="icon" />
            <Image className="animate-cooling-icon-two" src={CoolingAnimateIconTwo} alt="icon" />
          </S.ServiceIconWrapper>
          <S.ServiceFooter>
            <Image src={CoolingIcon} alt="Celsius Service Icon" />
            <S.ServiceTitle>Heating & Cooling</S.ServiceTitle>
          </S.ServiceFooter>
        </S.ServiceItem>}
        {/* transition: all 0.3s ease-in; */}
        <S.ServiceItem serviceSingleShow={serviceSingleShow} isExpanded onClick={showServiceSingle}>
          <S.ServiceHeader>
            <S.ImageWrapper imageUrl={SingleImage.src} serviceSingleShow={serviceSingleShow} isExpanded className="image-wrapper" />
          </S.ServiceHeader>
          <div style={{
            width: serviceSingleShow ? "auto" : 0,
            height:serviceSingleShow ? "auto" : 0,
            visibility: serviceSingleShow? "visible": "hidden",
            transition:"all 0.5s ease-in",
          }}><ServiceSingle  /></div>

          {!serviceSingleShow && <div style={{
            width: serviceSingleShow ? "0" : "auto",
            height:serviceSingleShow ? "0" : "auto",
            visibility: serviceSingleShow? "hidden": "visible",
            transition:"all 0.5s ease-in"
          }}>                      <S.ServiceIconWrapper>
          <Image className="icon-wrapper" src={IconWrapper} alt={'Icon Wrapper'} />
          <Image className="animate-hvac-icon-one" src={HvacAnimateIconOne} alt="icon" />
          <Image className="animate-hvac-icon-two" src={HvacAnimateIconTwo} alt="icon" />
        </S.ServiceIconWrapper>
        <S.ServiceFooter>
          <Image src={HvacIcon} alt="HVAC Service Icon" />
          <S.ServiceTitle>HVAC</S.ServiceTitle>
        </S.ServiceFooter>
        
        </div>}




        </S.ServiceItem>

        {!hideOthers && <S.ServiceItem serviceSingleShow={serviceSingleShow}>
            <S.ServiceHeader>
              <S.ImageWrapper className="image-wrapper">
                <Image src={VentilationMain} alt="Ventilation Service" priority />
              </S.ImageWrapper>
            </S.ServiceHeader>
            <S.ServiceIconWrapper>
              <Image className="icon-wrapper" src={IconWrapper} alt={'Icon Wrapper'} />
              <Image className="animate-ventilation-icon-one" src={VentilationAnimateIconOne} alt="icon" />
              <Image className="animate-ventilation-icon-two" src={VentilationAnimateIconTwo} alt="icon" />
            </S.ServiceIconWrapper>
            <S.ServiceFooter>
              <Image src={VentilationIcon} alt="Ventilation Service Icon" />
              <S.ServiceTitle>Ventilation</S.ServiceTitle>
            </S.ServiceFooter>
          </S.ServiceItem>}

          {!hideOthers && <S.ServiceItem serviceSingleShow={serviceSingleShow}>
            <S.ServiceHeader>
              <S.ImageWrapper className="image-wrapper">
                <Image src={ShopMain} alt="Shop Service" priority />
              </S.ImageWrapper>
            </S.ServiceHeader>
            <S.ServiceIconWrapper>
              <Image className="icon-wrapper" src={IconWrapper} alt={'Icon Wrapper'} />
              <Image className="animate-shop-icon-one" src={ShopAnimateIconOne} alt="icon" />
            </S.ServiceIconWrapper>
            <S.ServiceFooter>
              <Image src={VentilationIcon} alt="Shop Service Icon" />
              <S.ServiceTitle>Shop</S.ServiceTitle>
            </S.ServiceFooter>
          </S.ServiceItem> }

      <Image className="footer" src={ServicesFooterVector} alt="ServicesFooterVector" />
    </S.ServicesWrapper>
  );
}

export default Services;
