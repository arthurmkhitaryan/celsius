'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import * as S from './Services.styled';
import ServicesFooterVector from '@/public/images/home/services/bottom-vector.svg';
import IconWrapper from '@/public/images/home/services/icon-wrapper.svg';
import SingleImage from '@/public/images/home/services/5.jpeg';
import SingleImageVentilation from '@/public/images/home/services/6.jpeg';
import SingleImageShop from '@/public/images/home/services/7.jpeg';
import SingleImageHeating from '@/public/images/home/services/8.jpeg';
// ...
import CoolingIcon from '@/public/images/home/services/icons/cooling.svg';
import CoolingAnimateIconOne from '@/public/images/home/services/icons/cooling-1.svg';
import CoolingAnimateIconTwo from '@/public/images/home/services/icons/cooling-2.svg';
// ...
import HvacIcon from '@/public/images/home/services/icons/hvac.svg';
import HvacAnimateIconOne from '@/public/images/home/services/icons/hvac-1.svg';
import HvacAnimateIconTwo from '@/public/images/home/services/icons/hvac-2.svg';
// ...
import VentilationIcon from '@/public/images/home/services/icons/ventilation.svg';
import VentilationAnimateIconOne from '@/public/images/home/services/icons/ventilation-1.svg';
import VentilationAnimateIconTwo from '@/public/images/home/services/icons/ventilaton-2.svg';
// ...
import ShopAnimateIconOne from '@/public/images/home/services/icons/shop-1.svg';
import ServiceSingle from '@/components/ServiceSingle';
import ServiceSingleHeating from '@/components/ServiceSingleHeating';
import ServiceSingleVentilation from '@/components/ServiceSingleVentilation';
import ServiceSingleShop from '@/components/ServiceSingleShop';
import ShopIcon from '@/public/images/home/services/icons/shop-icon.svg';

function Services() {
  const [serviceSingleShow, setServiceSingleShow] = useState<string>('');
  const [hideOthers, setHideOthers] = useState(false);

  const showServiceSingle = (name: string) => {
    setServiceSingleShow(prev => prev === name ? '' : name);
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

  const isServiceVisible = (type: string) => serviceSingleShow === type;

  return (
    <S.ServicesWrapper>
        {(!hideOthers || isServiceVisible('heating')) && <S.ServiceItem isExpanded serviceSingleShow={isServiceVisible('heating')} onClick={() => showServiceSingle('heating')}>
          <S.ServiceHeader>
            <S.ImageWrapper style={{ backgroundPosition: isServiceVisible('heating') ? 'center' : '70%' }} imageUrl={SingleImageHeating.src} serviceSingleShow={isServiceVisible('heating')} isExpanded className="image-wrapper" />
          </S.ServiceHeader>
          <div style={{
            width: isServiceVisible('heating') ? "auto" : 0,
            height:isServiceVisible('heating') ? "auto" : 0,
            visibility: isServiceVisible('heating')? "visible": "hidden",
            transition:"all 0.5s ease-in",
          }}><ServiceSingleHeating  /></div>
          {!serviceSingleShow && <><S.ServiceIconWrapper>
            <Image className="icon-wrapper" src={IconWrapper} alt={'Icon Wrapper'} />
            <Image className="animate-cooling-icon-one" src={CoolingAnimateIconOne} alt="icon" />
            <Image className="animate-cooling-icon-two" src={CoolingAnimateIconTwo} alt="icon" />
          </S.ServiceIconWrapper>
          <S.ServiceFooter>
            <Image src={CoolingIcon} alt="Celsius Service Icon" />
            <S.ServiceTitle>Heating & Cooling</S.ServiceTitle>
          </S.ServiceFooter></>}
        </S.ServiceItem>}

        {(!hideOthers || isServiceVisible('hvac')) && <S.ServiceItem serviceSingleShow={isServiceVisible('hvac')} isExpanded onClick={() => showServiceSingle('hvac')}>
          <S.ServiceHeader>
            <S.ImageWrapper imageUrl={SingleImage.src} serviceSingleShow={isServiceVisible('hvac')} isExpanded className="image-wrapper" />
          </S.ServiceHeader>
          <div style={{
            width: isServiceVisible('hvac') ? "auto" : 0,
            height:isServiceVisible('hvac') ? "auto" : 0,
            visibility: isServiceVisible('hvac')? "visible": "hidden",
            transition:"all 0.5s ease-in",
          }}><ServiceSingle  /></div>
          {!serviceSingleShow && <><S.ServiceIconWrapper>
          <Image className="icon-wrapper" src={IconWrapper} alt={'Icon Wrapper'} />
          <Image className="animate-hvac-icon-one" src={HvacAnimateIconOne} alt="icon" />
          <Image className="animate-hvac-icon-two" src={HvacAnimateIconTwo} alt="icon" />
        </S.ServiceIconWrapper>
        <S.ServiceFooter>
          <Image src={HvacIcon} alt="HVAC Service Icon" />
          <S.ServiceTitle>HVAC</S.ServiceTitle>
        </S.ServiceFooter>
        </>}
        </S.ServiceItem>}

        {(!hideOthers || isServiceVisible('ventilation')) && <S.ServiceItem isExpanded serviceSingleShow={isServiceVisible('ventilation')} onClick={() => showServiceSingle('ventilation')}>
            <S.ServiceHeader>
              <S.ImageWrapper style={{ backgroundPosition: isServiceVisible('ventilation') ? '0 30%' : '20%' }} imageUrl={SingleImageVentilation.src} serviceSingleShow={isServiceVisible('ventilation')} isExpanded className="image-wrapper" />
            </S.ServiceHeader>
            <div style={{
            width: isServiceVisible('ventilation') ? "auto" : 0,
            height:isServiceVisible('ventilation') ? "auto" : 0,
            visibility: isServiceVisible('ventilation')? "visible": "hidden",
            transition:"all 0.5s ease-in",
          }}><ServiceSingleVentilation  /></div>
            {!serviceSingleShow && <><S.ServiceIconWrapper>
              <Image className="icon-wrapper" src={IconWrapper} alt={'Icon Wrapper'} />
              <Image className="animate-ventilation-icon-one" src={VentilationAnimateIconOne} alt="icon" />
              <Image className="animate-ventilation-icon-two" src={VentilationAnimateIconTwo} alt="icon" />
            </S.ServiceIconWrapper>
            <S.ServiceFooter>
              <Image src={VentilationIcon} alt="Ventilation Service Icon" />
              <S.ServiceTitle>Ventilation</S.ServiceTitle>
            </S.ServiceFooter></>}
          </S.ServiceItem>}

          {(!hideOthers || isServiceVisible('shop')) && <S.ServiceItem isExpanded serviceSingleShow={isServiceVisible('shop')} onClick={() => showServiceSingle('shop')}>
            <S.ServiceHeader>
              <S.ImageWrapper style={{ backgroundPosition: isServiceVisible('shop') ? '0 30%' : '60%' }} imageUrl={SingleImageShop.src} serviceSingleShow={isServiceVisible('shop')} isExpanded className="image-wrapper" />
            </S.ServiceHeader>
            <div style={{
            width: isServiceVisible('shop') ? "auto" : 0,
            height:isServiceVisible('shop') ? "auto" : 0,
            visibility: isServiceVisible('shop')? "visible": "hidden",
            transition:"all 0.5s ease-in",
          }}><ServiceSingleShop  /></div>
            {!serviceSingleShow && <><S.ServiceIconWrapper>
              <Image className="icon-wrapper" src={IconWrapper} alt={'Icon Wrapper'} />
              <Image className="animate-shop-icon-one" src={ShopAnimateIconOne} alt="icon" />
            </S.ServiceIconWrapper>
            <S.ServiceFooter>
              <Image src={ShopIcon} alt="Shop Service Icon" />
              <S.ServiceTitle>Shop</S.ServiceTitle>
            </S.ServiceFooter></>}
          </S.ServiceItem> }

      <Image className="footer" src={ServicesFooterVector} alt="ServicesFooterVector" />
    </S.ServicesWrapper>
  );
}

export default Services;
