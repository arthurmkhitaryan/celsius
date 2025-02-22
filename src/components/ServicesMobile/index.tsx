'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import {
  ServicesWrapper,
  ServiceItem,
  ServiceHeader,
  ImageWrapper,
  FooterMenuWrapper,
  FooterMenuItem,
  ImageContent,
  ContentTitle,
  ContentDescription,
  ViewMoreButton,
  ServiceIconWrapper,
  ServiceImage,
} from './ServicesMobile.styled';

import IconWrapper from '@/public/images/home/services/icon-wrapper.svg';
import CoolingMain from '@/public/images/home/services/8.jpeg';
import CoolingIcon from '@/public/images/home/services/icons-mobile/cooling.svg';
import CoolingAnimateIconOne from '@/public/images/home/services/icons/cooling-1.png';
import CoolingAnimateIconTwo from '@/public/images/home/services/icons/cooling-2.png';

import HvacMain from '@/public/images/home/services/5.jpeg';
import HvacIcon from '@/public/images/home/services/icons-mobile/hvac.svg';
import HvacAnimateIconOne from '@/public/images/home/services/icons/hvac-1.png';
import HvacAnimateIconTwo from '@/public/images/home/services/icons/hvac-2.png';

import VentilationMain from '@/public/images/home/services/6.jpeg';
import VentilationIcon from '@/public/images/home/services/icons-mobile/ventilation.svg';
import VentilationAnimateIconOne from '@/public/images/home/services/icons/heating-1.png';
import VentilationAnimateIconTwo from '@/public/images/home/services/icons/heating-2.png';

import ShopMain from '@/public/images/home/services/7.jpeg';
import ShopAnimateIconOne from '@/public/images/home/services/icons/shop-1.svg';
import ShopAnimateIconTwo from '@/public/images/home/services/icons/shop-2.png';
import ShopIcon from '@/public/images/home/services/icons-mobile/shop-icon-blue.svg';

import { useParams, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

const services = [
  {
    id: 1,
    title: 'categories.heating_cooling.title',
    description: 'categories.heating_cooling.description',
    image: CoolingMain,
    icon: CoolingIcon,
    animateIcons: [
      {
        icon: CoolingAnimateIconOne,
        class: 'animate-cooling-icon-one',
      },
      {
        icon: CoolingAnimateIconTwo,
        class: 'animate-cooling-icon-two',
      },
    ],
  },
  {
    id: 2,
    title: 'categories.hvac.title',
    description: 'categories.hvac.description',
    image: HvacMain,
    icon: HvacIcon,
    animateIcons: [
      {
        icon: HvacAnimateIconOne,
        class: 'animate-hvac-icon-one',
      },
      {
        icon: HvacAnimateIconTwo,
        class: 'animate-hvac-icon-two',
      },
    ],
  },
  {
    id: 3,
    title: 'categories.ventilation.title',
    description: 'categories.ventilation.description',
    image: VentilationMain,
    icon: VentilationIcon,
    animateIcons: [
      {
        icon: VentilationAnimateIconOne,
        class: 'animate-ventilation-icon-one',
      },
      {
        icon: VentilationAnimateIconTwo,
        class: 'animate-ventilation-icon-two',
      },
    ],
  },
  {
    id: 4,
    title: 'categories.shop.title',
    description: 'categories.shop.description',
    image: ShopMain,
    icon: ShopIcon,
    animateIcons: [
      {
        icon: ShopAnimateIconOne,
        class: 'animate-shop-icon-one',
      },
      {
        icon: ShopAnimateIconTwo,
        class: 'animate-shop-icon-two',
      },
    ],
  },
];

const ServicesMobile = () => {
  const t = useTranslations('Home');
  const [activeService, setActiveService] = useState(1);
  const router = useRouter();
  const { locale } = useParams();

  const handleRedirect = (id: number): void => {
    if (id === 4) return router.push(`/${locale}/products`);
    router.push(`/${locale}/category/${id}`);
  };

  const handleFooterClick = (id: number) => {
    setActiveService(id);
  };

  return (
    <ServicesWrapper>
      {services.map(
        (service, index) =>
          activeService === service.id && (
            <ServiceItem key={service.id + index}>
              <ServiceHeader>
                <ImageWrapper>
                  <ServiceImage $isReverse={index === 2} src={service.image.src} alt={service.title} />
                  <ImageContent>
                    <Image src={service.icon} alt={service.title} />
                    <ContentTitle>{t(service.title)}</ContentTitle>

                    <ContentDescription>
                      {t(service.description)}
                    </ContentDescription>
                    <ViewMoreButton onClick={() => handleRedirect(service.id)}>
                      {t('categories.view')}
                      <ArrowRight size={18} />
                    </ViewMoreButton>
                    <ServiceIconWrapper>
                      <Image
                        className="icon-wrapper"
                        src={IconWrapper}
                        alt={'Icon Wrapper'}
                      />
                      {service.animateIcons.map((animateIcons) => (
                        <>
                          <Image
                            className={animateIcons.class}
                            src={animateIcons.icon}
                            alt="icon"
                          />
                        </>
                      ))}
                    </ServiceIconWrapper>
                  </ImageContent>
                </ImageWrapper>
              </ServiceHeader>
            </ServiceItem>
          ),
      )}

      <FooterMenuWrapper>
        {services.map((service) => (
          <FooterMenuItem
            key={service.id}
            isActive={activeService === service.id}
            onClick={() => handleFooterClick(service.id)}
          >
            {t(service.title)}
          </FooterMenuItem>
        ))}
      </FooterMenuWrapper>
    </ServicesWrapper>
  );
};

export default ServicesMobile;
