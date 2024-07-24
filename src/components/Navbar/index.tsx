'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as S from './Navbar.styled';
import { useLocale } from 'use-intl';

function Navbar() {
  const locale = useLocale();
  const pathname = usePathname();

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
    <S.NavbarWrapper>
      <S.Navbar>
        <S.NavList>
          <S.NavListItem>
            <Link href={getLocalizedPath('/products')} passHref>
              Products
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
  );
}

export default Navbar;
