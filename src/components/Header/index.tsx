'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// styles & images
import * as S from './Header.styled';
import Logo from '@/public/images/logo.svg';
import BasketLogo from '@/public/images/basket.svg';
import HamburgerIcon from '@/public/images/hamburger-icon.svg';
import CrossIcon from '@/public/images/cross-icon.svg';
import { ArrowRight } from 'lucide-react';

// components
import Button from '@/components/shared/Button';
import Language from '@/components/Language';
import LoginForm from '../forms/LoginForm';
import { useParams, useRouter } from 'next/navigation';
import { useClientMediaQuery } from '@/store/useClientMediaQuery';
import MobileNavbar from '@/components/MobileNavbar';

function Header({ user }: any) {
  const [formVisible, setFormVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const router = useRouter();
  const { locale } = useParams();

  const isTablet = useClientMediaQuery('(max-width: 768px)');

  const handleOpenLoginForm = () => {
    setFormVisible(!formVisible);
  };

  const handleRedirectProfilePage = () => {
    router.push(`/${locale}/profile`);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

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
            <Language />
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
            <Language />
            <Button btnStyle="bordered" px={32} py={16} width={208}>
              {'Business Partner >'}
            </Button>
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
                  width={110}
                >
                  {'Sign In'}
                </Button>
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
            <MobileNavbar />
          </S.MobileMenu>
        )}
      </S.MainWrapper>
      {isTablet && (
        <S.TabletButtonWrapper>
          <S.FullWidthButton>
            <Button btnStyle="bordered" px={32} py={16}>
              {'Become a partner'}
              <ArrowRight size={16} fontWeight={600} />
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
