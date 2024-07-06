'use client';

import React from 'react';
import Link from 'next/link';

//styles & images
import * as S from './Header.styled';
import Logo from '@/public/images/logo.svg';
import BasketLogo from '@/public/images/basket.svg';

// components
import Image from 'next/image';
import Button from '@/components/shared/Button';
import Language from '@/components/Language';

function Header() {
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
        <Button
          className="sign-in"
          btnStyle="filled"
          px={32}
          py={16}
          width={110}
        >
          Sign In
        </Button>
        <Image src={BasketLogo} alt="Basket Logo" priority />
      </S.HeaderRightSide>
    </S.HeaderWrapper>
  );
}

export default Header;
