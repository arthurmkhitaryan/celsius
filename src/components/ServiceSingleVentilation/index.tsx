'use client';
import * as S from './ServicesSingle.styled';
import Image from 'next/image';
import React from 'react';
import CoolingIcon from '@/public/images/home/services/icons/cooling.svg';
import HvacIcon from '@/public/images/home/services/icons/hvac.svg';
import VentilationIcon from '@/public/images/home/services/icons/ventilation.svg';
import IconWrapper from '@/public/images/home/services/icon-wrapper.svg';
import VentilationAnimateIconOne from '@/public/images/home/services/icons/heating-1.png';
import VentilationAnimateIconTwo from '@/public/images/home/services/icons/heating-2.png';
import ShopIcon from '@/public/images/home/services/icons/shop-icon.svg';
import ImageArrow from '@/public/images/product/arrow.png';
import { useParams, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

const ServiceSingleVentilation = () => {
  const t = useTranslations('Home');

  const router = useRouter();
  const { locale } = useParams();

  const handleRedirect = (): void => {
    router.push(`/${locale}/category/3`);
  };

  return (
    <S.BottomWrapper>
      <S.ServiceFooter>
        <S.TextContainer>
          <Image src={CoolingIcon} alt="Celsius Service Icon" />
          <S.ServiceTitle>
            {t('categories.heating_cooling.title')}
          </S.ServiceTitle>
        </S.TextContainer>
      </S.ServiceFooter>
      <S.ServiceFooter>
        <S.TextContainer>
          <Image src={HvacIcon} alt="HVAC Service" priority />
          <S.ServiceTitle>{t('categories.hvac.title')}</S.ServiceTitle>
        </S.TextContainer>
      </S.ServiceFooter>
      <S.ServiceFooter>
        <S.TextContainer>
          <Image src={VentilationIcon} alt="Celsius Service Icon" />
          <S.ServiceTitle>{t('categories.ventilation.title')}</S.ServiceTitle>
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
            width={162}
          />
          <Image
            className="animate-hvac-icon-second"
            src={VentilationAnimateIconTwo}
            alt="icon"
            width={168}
          />
        </S.ServiceIconWrapper>
        <S.ServiceAdditionalContentWrapper>
          <S.ServiceAdditionalContent>
            {t('categories.ventilation.description')}
          </S.ServiceAdditionalContent>
          <S.ServiceAdditionalButton onClick={handleRedirect}>
            {t('categories.view')}
            <Image src={ImageArrow} alt="" title="" width={10} height={10} />
          </S.ServiceAdditionalButton>
        </S.ServiceAdditionalContentWrapper>
      </S.ServiceFooter>
      <S.ServiceFooter>
        <S.TextContainer>
          <Image src={ShopIcon} alt="Celsius Service Icon" />
          <S.ServiceTitle>{t('categories.shop.title')}</S.ServiceTitle>
        </S.TextContainer>
      </S.ServiceFooter>
    </S.BottomWrapper>
  );
};

export default ServiceSingleVentilation;
