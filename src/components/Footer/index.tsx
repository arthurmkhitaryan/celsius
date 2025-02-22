'use client';

import React from 'react';

//styles & images
import * as S from './Footer.styled';
import Image from 'next/image';
import Logo from '@/public/images/footer-logo.png';
import { Clock5, Mail, MapPin, Phone } from 'lucide-react';
import FacebookLogo from '@/public/images/footer/facebook-logo.svg';
import InstagramLogo from '@/public/images/footer/instagram.svg';
import LinkedinLogo from '@/public/images/footer/linkedin-logo.svg';
import { useClientMediaQuery } from '@/store/useClientMediaQuery';
import { useParams, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

// components

function Footer() {
  const t = useTranslations('Footer');
  const isTablet = useClientMediaQuery('(max-width: 768px)');
  const { locale } = useParams();
  const router = useRouter();

  const handleRedirect = (route: string) => {
    router.push(`/${locale}/${route}`);
  };

  return (
    <S.FooterWrapper>
      {/* <S.LetsStayInTouch>
        <S.LetsStayInTouchContentWrapper>
          <S.LetsStayInTouchContent>
            <S.LetsStayInTouchContentTItle>
              Let’s stay in touch
            </S.LetsStayInTouchContentTItle>
            <S.LetsStayInTouchContentDescription>
              Subscribe and receive to our newsletter{' '}
            </S.LetsStayInTouchContentDescription>
          </S.LetsStayInTouchContent>
          <S.LetsStayInTouchForm>
            <S.LetsStayInTouchContentInput
              type="email"
              placeholder="Your Email Address"
            />
            <S.LetsStayInTouchContentButton type="button">
              Submit
            </S.LetsStayInTouchContentButton>
          </S.LetsStayInTouchForm>
        </S.LetsStayInTouchContentWrapper>
      </S.LetsStayInTouch> */}
      <S.FooterContent>
        <S.FooterContentWrapper>
          <S.FooterContentHeader>
            <Image
              src={Logo.src}
              width={136}
              height={50}
              alt="Celisus footer logo"
            />
          </S.FooterContentHeader>
          <S.FooterContentSections>
            <S.FooterSection className={isTablet ? 'middle' : ''}>
              <S.FooterSectionContent>
                <S.FooterSectionTitle isTablet={isTablet}>
                  {t('contacts.name')}
                </S.FooterSectionTitle>
                <S.FooterSectionItem>
                  <MapPin size={18} color="#fff" />
                  <div>
                    <span>
                      {t('contacts.address_one')} <br />
                    </span>
                    <span>{t('contacts.address_two')}</span>
                  </div>
                </S.FooterSectionItem>
                <S.FooterSectionItem>
                  <Phone size={18} color="#fff" />
                  <div>
                    <span>
                      +374(43)120100 <br />
                    </span>
                    <span>+374(33)160100</span>
                  </div>
                </S.FooterSectionItem>
                <S.FooterSectionItem>
                  <Mail size={18} color="#fff" />
                  <div>
                    <span>
                      celsiusarmenia@mail.ru <br />
                    </span>
                  </div>
                </S.FooterSectionItem>
                <S.FooterSectionItem>
                  <Clock5 size={18} color="#fff" />
                  <div>
                    <span>
                      {t('contacts.days_one')} <br />
                    </span>
                    <span>{t('contacts.days_two')}</span>
                  </div>
                </S.FooterSectionItem>
                {isTablet && (
                  <S.FooterContentFooter isTablet>
                    <a
                      href="https://www.facebook.com/Celsiusarmenia"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ cursor: 'pointer' }}
                    >
                      <Image
                        src={FacebookLogo.src}
                        alt="celsius-facebook"
                        width={26}
                        height={26}
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/celsius_llc/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ cursor: 'pointer' }}
                    >
                      <Image
                        src={InstagramLogo.src}
                        alt="celsius-instagram"
                        width={26}
                        height={26}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/celsiusllc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ cursor: 'pointer' }}
                    >
                      <Image
                        src={LinkedinLogo.src}
                        alt="celsius-linkedin"
                        width={26}
                        height={26}
                      />
                    </a>
                  </S.FooterContentFooter>
                )}
              </S.FooterSectionContent>
            </S.FooterSection>
            <S.FooterSection className="middle">
              <S.FooterSectionContent>
                <S.FooterSectionTitle>
                  {t('categories.name')}
                </S.FooterSectionTitle>
                <S.FooterSectionItem
                  onClick={() => handleRedirect('category/1')}
                >
                  {t('categories.heating_cooling')}
                </S.FooterSectionItem>
                <S.FooterSectionItem
                  onClick={() => handleRedirect('category/2')}
                >
                  {t('categories.ventilation')}
                </S.FooterSectionItem>
                <S.FooterSectionItem
                  onClick={() => handleRedirect('category/3')}
                >
                  {t('categories.heating')}
                </S.FooterSectionItem>
                <S.FooterSectionItem
                  onClick={() => handleRedirect('products')}
                >
                  {t('categories.shop')}
                </S.FooterSectionItem>
              </S.FooterSectionContent>
            </S.FooterSection>
            <S.FooterSection className="last">
              <S.FooterSectionContent>
                <S.FooterSectionTitle>{t('links.name')}</S.FooterSectionTitle>
                <S.FooterSectionItem onClick={() => handleRedirect('careers')}>
                  {t('links.career')}
                </S.FooterSectionItem>
                <S.FooterSectionItem onClick={() => handleRedirect('about-us')}>
                  {t('links.about')}
                </S.FooterSectionItem>
                <S.FooterSectionItem onClick={() => handleRedirect('newsroom')}>
                  {t('links.news')}
                </S.FooterSectionItem>
                <S.FooterSectionItem
                  onClick={() => handleRedirect('contact-us')}
                >
                  {t('links.contact')}
                </S.FooterSectionItem>
              </S.FooterSectionContent>
            </S.FooterSection>
          </S.FooterContentSections>
          {!isTablet && (
            <S.FooterContentFooter>
              <a
                href="https://www.facebook.com/Celsiusarmenia"
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: 'pointer' }}
              >
                <Image
                  src={FacebookLogo.src}
                  alt="celsius-facebook"
                  width={26}
                  height={26}
                />
              </a>
              <a
                href="https://www.instagram.com/celsius_llc/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: 'pointer' }}
              >
                <Image
                  src={InstagramLogo.src}
                  alt="celsius-instagram"
                  width={26}
                  height={26}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/celsiusllc/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: 'pointer' }}
              >
                <Image
                  src={LinkedinLogo.src}
                  alt="celsius-linkedin"
                  width={26}
                  height={26}
                />
              </a>
            </S.FooterContentFooter>
          )}
        </S.FooterContentWrapper>
      </S.FooterContent>
    </S.FooterWrapper>
  );
}

export default Footer;
