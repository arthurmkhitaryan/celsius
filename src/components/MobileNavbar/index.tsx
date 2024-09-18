'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as S from './MobileNavbar.styled';
import { useLocale } from 'use-intl';
import { ChevronRight } from 'lucide-react';

function MobileNavbar() {
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
            <ChevronRight size={18} />
          </S.NavListItem>
          <S.NavListItem>
            <Link href={getLocalizedPath('/careers')} passHref>
              Career
            </Link>
            <ChevronRight size={18} />
          </S.NavListItem>
          <S.NavListItem>
            <Link href={getLocalizedPath('/newsroom')} passHref>
              Newsroom
            </Link>
            <ChevronRight size={18} />
          </S.NavListItem>
          <S.NavListItem>
            <Link href={getLocalizedPath('/about-us')} passHref>
              About Us
            </Link>
            <ChevronRight size={18} />
          </S.NavListItem>
          <S.NavListItem>
            <Link href={getLocalizedPath('/contact-us')} passHref>
              Contact Us
            </Link>
            <ChevronRight size={18} />
          </S.NavListItem>
        </S.NavList>
      </S.Navbar>
    </S.NavbarWrapper>
  );
}

export default MobileNavbar;
