'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// styles & images
import * as S from './Header.styled';
import Logo from '@/public/images/logo.svg';
import BasketLogo from '@/public/images/basket.svg';
import HamburgerIcon from '@/public/images/hamburger-icon.svg';
import CrossIcon from '@/public/images/cross-icon.svg';
import arrowRight from '@/public/images/arrow-right.svg';

// components
import Button from '@/components/shared/Button';
import Language from '@/components/Language';
import LoginForm from '../forms/LoginForm';
import { useParams, useRouter } from 'next/navigation';
import { useClientMediaQuery } from '@/store/useClientMediaQuery';
import MobileNavbar from '@/components/MobileNavbar';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { closeFilterMenu } from '@/features/header/header.slice';
import Filter from '../Products/Filter';
import { setFilters } from '@/features/filters/filters.slice';
import NavbarButton from '../shared/NavbarButton';

function Header() {
  const isFilterMenuVisible = useAppSelector((state: any) => state.header.isFilterMenuVisible);
  const user = useAppSelector((state: any) => state.auth.user) as any;
  const [formVisible, setFormVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { locale } = useParams();

  const handleChangeCategories = (filters: string[]) => {
    dispatch(setFilters(filters));
  };

  const isTablet = useClientMediaQuery('(max-width: 768px)');

  const handleOpenLoginForm = () => {
    setFormVisible(!formVisible);
  };

  const handleRedirectProfilePage = () => {
    router.push(`/${locale}/profile`);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    if (menuVisible) {
      dispatch(closeFilterMenu())
    }
  };

  useEffect(() => {
    setMenuVisible(isFilterMenuVisible)
  }, [isFilterMenuVisible])

  return (
    <S.HeaderWrapper>
      <S.MainWrapper>
        <S.HeaderLeftSide>
          <Link href={'/'}>
            <Image
              src={Logo}
              alt="Celsius Logo"
              width={136}
              height={50}
              priority
            />
          </Link>
        </S.HeaderLeftSide>

        {isTablet ? (
          <S.HamburgerWrapper>
            <Language locale={locale as string} />
            <Image src={BasketLogo} alt="Basket Logo" priority />
            {!menuVisible ? <Image
              src={HamburgerIcon}
              alt="Hamburger Icon"
              width={30}
              height={30}
              onClick={toggleMenu}
            /> : <Image
              src={CrossIcon}
              alt="Cross Icon"
              width={30}
              height={30}
              onClick={toggleMenu}
            />}
          </S.HamburgerWrapper>
        ) : (
          <S.HeaderRightSide>
            <Language locale={locale as string} />
            <NavbarButton btnStyle="bordered" px={32} py={16} width={208}>
              Become a partner
              <Image src={arrowRight} width={12} alt="arrow right" />
            </NavbarButton>
            <S.SignInWrapper>
              {user ? (
                <NavbarButton
                  className="sign-in"
                  btnStyle="filled"
                  onClick={handleRedirectProfilePage}
                  px={32}
                  py={16}
                >
                  {`${user?.firstName} ${user?.lastName}`}
                </NavbarButton>
              ) : (
                <NavbarButton
                  className="sign-in"
                  btnStyle="filled"
                  onClick={handleOpenLoginForm}
                  px={32}
                  py={16}
                  width={110}
                >
                  Sign In
                </NavbarButton>
              )}

              <LoginForm
                visible={formVisible}
                onChangeVisibility={setFormVisible}
              />
            </S.SignInWrapper>
            <Image src={BasketLogo} alt="Basket Logo" priority />
          </S.HeaderRightSide>
        )}

        {isTablet && menuVisible && (
          <S.MobileMenu>
            {isFilterMenuVisible ? <Filter onFilterChange={handleChangeCategories} /> : <MobileNavbar changeToggleMenu={toggleMenu} />}
          </S.MobileMenu>
        )}
      </S.MainWrapper>
      {isTablet && (
        <S.TabletButtonWrapper>
          <S.FullWidthButton>
            <Button btnStyle="bordered" px={32} py={16}>
              Become a partner
              <Image src={arrowRight} width={16} alt="arrow right" />
            </Button>
          </S.FullWidthButton>
          <S.FullWidthButton>
            <S.SignInWrapper>
              {user ? (
                <Button
                  className="sign-in"
                  btnStyle="filled"
                  onClick={handleRedirectProfilePage}
                  px={32}
                  py={16}
                >
                  {`${user?.firstName} ${user?.lastName}`}
                </Button>
              ) : (
                <Button
                  className="sign-in"
                  btnStyle="filled"
                  onClick={handleOpenLoginForm}
                  px={32}
                  py={16}
                >
                  {'Sign In'}
                </Button>
              )}

              <LoginForm
                visible={formVisible}
                onChangeVisibility={setFormVisible}
              />
            </S.SignInWrapper>
          </S.FullWidthButton>
        </S.TabletButtonWrapper>
      )}
    </S.HeaderWrapper>
  );
}

export default Header;
