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

// components

function Footer() {
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
                  Contacts
                </S.FooterSectionTitle>
                <S.FooterSectionItem>
                  <MapPin size={18} color="#fff" />
                  <div>
                    <span>
                      Yerevan, Rubinyants 2/10 <br />
                    </span>
                    <span>Yerevan, Vratsyan 73/1</span>
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
                      Mon - Fri / 10:00 - 19:00 <br />
                    </span>
                    <span>Sat. / 10:00 - 18:00</span>
                  </div>
                </S.FooterSectionItem>
                {isTablet && (
                  <S.FooterContentFooter isTablet>
                    <Image
                      src={FacebookLogo.src}
                      alt={'celsius-facebook'}
                      width={26}
                      height={26}
                    />
                    <Image
                      src={InstagramLogo.src}
                      alt={'celsius-instagram'}
                      width={26}
                      height={26}
                    />
                    <Image
                      src={LinkedinLogo.src}
                      alt={'celsius-linkedin'}
                      width={26}
                      height={26}
                    />
                  </S.FooterContentFooter>
                )}
              </S.FooterSectionContent>
            </S.FooterSection>
            <S.FooterSection className="middle">
              <S.FooterSectionContent>
                <S.FooterSectionTitle>Categories</S.FooterSectionTitle>
                <S.FooterSectionItem
                  onClick={() => handleRedirect('category/1')}
                >
                  Heating & Cooling
                </S.FooterSectionItem>
                <S.FooterSectionItem
                  onClick={() => handleRedirect('category/2')}
                >
                  Ventilation Systems
                </S.FooterSectionItem>
                <S.FooterSectionItem
                  onClick={() => handleRedirect('category/3')}
                >
                  Only Heating
                </S.FooterSectionItem>
                <S.FooterSectionItem
                  onClick={() => handleRedirect('category/4')}
                >
                  Shop
                </S.FooterSectionItem>
              </S.FooterSectionContent>
            </S.FooterSection>
            <S.FooterSection className="last">
              <S.FooterSectionContent>
                <S.FooterSectionTitle>Useful links</S.FooterSectionTitle>
                <S.FooterSectionItem onClick={() => handleRedirect('careers')}>
                  Career
                </S.FooterSectionItem>
                <S.FooterSectionItem onClick={() => handleRedirect('about-us')}>
                  About Us
                </S.FooterSectionItem>
                <S.FooterSectionItem onClick={() => handleRedirect('newsroom')}>
                  Newsroom
                </S.FooterSectionItem>
                <S.FooterSectionItem
                  onClick={() => handleRedirect('contact-us')}
                >
                  Contac Us
                </S.FooterSectionItem>
                <S.FooterSectionItem>Calculator</S.FooterSectionItem>
              </S.FooterSectionContent>
            </S.FooterSection>
          </S.FooterContentSections>
          {!isTablet && (
            <S.FooterContentFooter>
              <Image
                src={FacebookLogo.src}
                alt={'celsius-facebook'}
                width={26}
                height={26}
              />
              <Image
                src={InstagramLogo.src}
                alt={'celsius-instagram'}
                width={26}
                height={26}
              />
              <Image
                src={LinkedinLogo.src}
                alt={'celsius-linkedin'}
                width={26}
                height={26}
              />
            </S.FooterContentFooter>
          )}
        </S.FooterContentWrapper>
      </S.FooterContent>
    </S.FooterWrapper>
  );
}

export default Footer;
