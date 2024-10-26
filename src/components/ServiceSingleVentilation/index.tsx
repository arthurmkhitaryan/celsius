'use client'
import * as S from './ServicesSingle.styled';
import Image from 'next/image';
import React from 'react';
import CoolingIcon from '@/public/images/home/services/icons/cooling.svg';
import HvacIcon from '@/public/images/home/services/icons/hvac.svg';
import VentilationIcon from '@/public/images/home/services/icons/ventilation.svg';
import IconWrapper from '@/public/images/home/services/icon-wrapper.svg';
import VentilationAnimateIconOne from '@/public/images/home/services/icons/ventilation-1.svg';
import VentilationAnimateIconTwo from '@/public/images/home/services/icons/ventilaton-2.svg';
import ShopIcon from '@/public/images/home/services/icons/shop-icon.svg';
import ImageArrow from '@/public/images/product/arrow.png';
import { useParams, useRouter } from 'next/navigation';

const ServiceSingleVentilation = () => {
  const router = useRouter();
  const { locale } = useParams();

  const handleRedirect = (): void => {
    router.push(`/${locale}/category/3`);
  }

  return (
      <S.BottomWrapper>
        <S.ServiceFooter>
          <S.TextContainer>
          <Image src={CoolingIcon} alt="Celsius Service Icon" />
          <S.ServiceTitle>Heating & Cooling</S.ServiceTitle>
          </S.TextContainer>
        </S.ServiceFooter>
        <S.ServiceFooter>
          <S.TextContainer>
            <Image src={HvacIcon} alt="HVAC Service" priority />
            <S.ServiceTitle>HVAC</S.ServiceTitle>
          </S.TextContainer>
        </S.ServiceFooter>
        <S.ServiceFooter>
          <S.TextContainer>
            <Image src={VentilationIcon} alt="Celsius Service Icon" />
            <S.ServiceTitle>Ventilation</S.ServiceTitle>
          </S.TextContainer>
          <S.ServiceIconWrapper>
            <Image
              className="icon-wrapper"
              src={IconWrapper}
              alt={'Icon Wrapper'}
            />
            <Image
              className="animate-hvac-icon-first"
              src={VentilationAnimateIconOne}
              alt="icon"
            />
            <Image
              className="animate-hvac-icon-second"
              src={VentilationAnimateIconTwo}
              alt="icon"
            />
          </S.ServiceIconWrapper>
          <S.ServiceAdditionalContentWrapper>
            <S.ServiceAdditionalContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              Lorem Ipsum
            </S.ServiceAdditionalContent>
            <S.ServiceAdditionalButton onClick={handleRedirect}>
              View More
              <Image
                src={ImageArrow}
                alt=''
                title=''
                width={10}
                height={10}
              />
            </S.ServiceAdditionalButton>
          </S.ServiceAdditionalContentWrapper>
        </S.ServiceFooter>
        <S.ServiceFooter>
          <S.TextContainer>
            <Image src={ShopIcon} alt="Celsius Service Icon" />
            <S.ServiceTitle>Shop</S.ServiceTitle>
          </S.TextContainer>
        </S.ServiceFooter>
      </S.BottomWrapper>
  )
}

export default ServiceSingleVentilation;
