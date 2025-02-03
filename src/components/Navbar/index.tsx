'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as S from './Navbar.styled';
import { useLocale, useTranslations } from 'use-intl';
import { useClientMediaQuery } from '@/store/useClientMediaQuery';
import ArrowDown from '@/public/images/arrow-down.svg';
import Image from 'next/image';
import ProductHover from './ProductHover';

function Navbar() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const pathname = usePathname();
  const isTablet = useClientMediaQuery('(max-width: 768px)');
  const [isHovered, setIsHovered] = useState(false);

  const [isActiveLink, setIsActiveLink] = useState('');

  useEffect(() => {
    setIsActiveLink(pathname.split('/')[2]);
  }, [pathname]);

  if (isTablet) return null;

  const getLocalizedPath = (path: string) => {
    if (pathname === '/') {
      return `/${locale}${path}`;
    }

    if (pathname.startsWith(`/${locale}`)) {
      return `/${locale}${path}`;
    }

    return `/${locale}${path}`;
  };

  return (
    <>
      <S.NavbarWrapper onMouseLeave={() => setIsHovered(false)}>
        <S.Navbar>
          <S.NavList>
            <S.NavListItem
              className="category-list"
              onMouseEnter={() => setIsHovered(true)}
            >
              <Link
                style={{ display: 'flex', gap: '5px', alignItems: 'center' }}
                href={'#'}
              >
                {t('categories')}
                <Image alt="arrow-down" src={ArrowDown} width={8} height={4} />
              </Link>
            </S.NavListItem>

            <S.NavListItem $isActiveLink={isActiveLink === 'products'}>
              <Link href={getLocalizedPath('/products')} passHref>
                {t('shop')}
              </Link>
            </S.NavListItem>

            <S.NavListItem $isActiveLink={isActiveLink === 'careers'}>
              <Link href={getLocalizedPath('/careers')} passHref>
                {t('career')}
              </Link>
            </S.NavListItem>
            <S.NavListItem $isActiveLink={isActiveLink === 'newsroom'}>
              <Link href={getLocalizedPath('/newsroom')} passHref>
                {t('news')}
              </Link>
            </S.NavListItem>
            <S.NavListItem $isActiveLink={isActiveLink === 'about-us'}>
              <Link href={getLocalizedPath('/about-us')} passHref>
                {t('about')}
              </Link>
            </S.NavListItem>
            <S.NavListItem $isActiveLink={isActiveLink === 'contact-us'}>
              <Link href={getLocalizedPath('/contact-us')} passHref>
                {t('contact')}
              </Link>
            </S.NavListItem>
          </S.NavList>
        </S.Navbar>
      </S.NavbarWrapper>

      {isHovered && (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ProductHover />
        </div>
      )}
    </>
  );
}

export default Navbar;
