'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as S from './MobileNavbar.styled';
import { useLocale } from 'use-intl';
import { ChevronRight } from 'lucide-react';
import ProductsNavbar from './ProductsNavbar';
import { useTranslations } from 'next-intl';

interface IProps {
  changeToggleMenu: () => void;
}

function MobileNavbar({ changeToggleMenu }: IProps) {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const pathname = usePathname();

  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleProducts = () => {
    setIsProductsOpen((prev) => !prev);
  };

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
          <S.NavListItem onClick={toggleProducts}>
            <Link href="">{t('categories')}</Link>
            <S.Chevron isOpen={isProductsOpen}>
              <ChevronRight size={18} />
            </S.Chevron>
          </S.NavListItem>

          {isProductsOpen && <ProductsNavbar changeToggleMenu={changeToggleMenu} />}
          <S.NavListItem>
            <Link
              onClick={changeToggleMenu}
              href={getLocalizedPath('/products')}
              passHref
            >
              {t('shop')}
            </Link>
            <ChevronRight size={18} />
          </S.NavListItem>

          <S.NavListItem>
            <Link
              onClick={changeToggleMenu}
              href={getLocalizedPath('/careers')}
              passHref
            >
              {t('career')}
            </Link>
            <ChevronRight size={18} />
          </S.NavListItem>
          <S.NavListItem>
            <Link
              onClick={changeToggleMenu}
              href={getLocalizedPath('/newsroom')}
              passHref
            >
              {t('news')}
            </Link>
            <ChevronRight size={18} />
          </S.NavListItem>
          <S.NavListItem>
            <Link
              onClick={changeToggleMenu}
              href={getLocalizedPath('/about-us')}
              passHref
            >
              {t('about')}
            </Link>
            <ChevronRight size={18} />
          </S.NavListItem>
          <S.NavListItem>
            <Link
              onClick={changeToggleMenu}
              href={getLocalizedPath('/contact-us')}
              passHref
            >
              {t('contact')}
            </Link>
            <ChevronRight size={18} />
          </S.NavListItem>
        </S.NavList>
      </S.Navbar>
    </S.NavbarWrapper>
  );
}

export default MobileNavbar;
