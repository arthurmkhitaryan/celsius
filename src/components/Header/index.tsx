'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

//styles & images
import * as S from './Header.styled';
import Logo from '@/public/images/logo.svg';
import BasketLogo from '@/public/images/basket.svg';

// components
import Button from '@/components/shared/Button';
import Language from '@/components/Language';
import LoginForm from '../forms/LoginForm';
import { useParams, useRouter } from 'next/navigation';

function Header({ user }: any) {
  const [formVisible, setFormVisible] = useState(false);
  const router = useRouter();
  const { locale } = useParams();

  const handleOpenLoginForm = () => {
    setFormVisible(!formVisible);
  };

  const handleRedirectProfilePage = () => {
    router.push(`/${locale}/profile`);
  };

  return (
    <S.HeaderWrapper>
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
    </S.HeaderWrapper>
  );
}

export default Header;
