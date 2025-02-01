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
import CoolingMain from '@/public/images/home/services/1.jpg';
import CoolingIcon from '@/public/images/home/services/icons-mobile/cooling.svg';
import CoolingAnimateIconOne from '@/public/images/home/services/icons/cooling-1.png';
import CoolingAnimateIconTwo from '@/public/images/home/services/icons/cooling-2.png';

import HvacMain from '@/public/images/home/services/2.jpg';
import HvacIcon from '@/public/images/home/services/icons-mobile/hvac.svg';
import HvacAnimateIconOne from '@/public/images/home/services/icons/hvac-1.png';
import HvacAnimateIconTwo from '@/public/images/home/services/icons/hvac-2.png';

import VentilationMain from '@/public/images/home/services/3.jpg';
import VentilationIcon from '@/public/images/home/services/icons-mobile/ventilation.svg';
import VentilationAnimateIconOne from '@/public/images/home/services/icons/heating-1.png';
import VentilationAnimateIconTwo from '@/public/images/home/services/icons/heating-2.png';

import ShopMain from '@/public/images/home/services/4.jpg';
import ShopAnimateIconOne from '@/public/images/home/services/icons/shop-1.svg';
import ShopAnimateIconTwo from '@/public/images/home/services/icons/shop-2.png';
import ShopIcon from '@/public/images/home/services/icons-mobile/shop-icon-blue.svg';

import { useParams, useRouter } from 'next/navigation';

const services = [
  {
    id: 1,
    title: 'Heating & Cooling',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum',
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
    title: 'Vemtilation Systems',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum',
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
    title: 'Only Heating',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum',
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
    title: 'Shop',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum',
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
                  <ServiceImage src={service.image.src} alt={service.title} />
                  <ImageContent>
                    <Image src={service.icon} alt={service.title} />
                    <ContentTitle>{service.title}</ContentTitle>

                    <ContentDescription>
                      {service.description}
                    </ContentDescription>
                    <ViewMoreButton onClick={() => handleRedirect(service.id)}>
                      View More <ArrowRight size={18} />
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
            {service.title}
          </FooterMenuItem>
        ))}
      </FooterMenuWrapper>
    </ServicesWrapper>
  );
};

export default ServicesMobile;
