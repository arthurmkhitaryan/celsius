'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as S from './Navbar.styled';
import { useLocale } from 'use-intl';
import { useClientMediaQuery } from '@/store/useClientMediaQuery';
import ArrowDown from '@/public/images/arrow-down.svg';
import Image from 'next/image';
import ProductHover from './ProductHover';

function Navbar() {
  const locale = useLocale();
  const pathname = usePathname();
  const isTablet = useClientMediaQuery('(max-width: 768px)');
  const [isHovered, setIsHovered] = useState(false);

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
                Categories
                <Image alt="arrow-down" src={ArrowDown} width={8} height={4} />
              </Link>
            </S.NavListItem>

            <S.NavListItem>
              <Link style={{ color: "#0044CC", borderBottom: '2px solid #0044CC' }} href={getLocalizedPath('/products')} passHref>
                Shop
              </Link>
            </S.NavListItem>

            <S.NavListItem>
              <Link href={getLocalizedPath('/careers')} passHref>
                Career
              </Link>
            </S.NavListItem>
            <S.NavListItem>
              <Link href={getLocalizedPath('/newsroom')} passHref>
                Newsroom
              </Link>
            </S.NavListItem>
            <S.NavListItem>
              <Link href={getLocalizedPath('/about-us')} passHref>
                About Us
              </Link>
            </S.NavListItem>
            <S.NavListItem>
              <Link href={getLocalizedPath('/contact-us')} passHref>
                Contact Us
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
