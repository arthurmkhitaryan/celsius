'use client';

import React, { useEffect } from 'react';
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
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { getUserFromToken } from '@/services/authService';
import { setUser } from '@/features';

function Header() {
  const [formVisible, setFormVisible] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(false);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    console.log({ token })
    if (token) {
      setIsLogin(true);
      getUserFromToken(token)
        .then((data) => {
          if (data) {
            dispatch(setUser(data));
          }
        })
        .catch((error) => {
          console.error('Error fetching user:', error);
          if (error.response && error.response.status === 401) {
            localStorage.removeItem('access_token');
            setIsLogin(false); 
          }
        });
    }
  }, [dispatch]);
  
  console.log({ user, isLogin,  })
  const handleOpenLoginForm = () => {
    setFormVisible(!formVisible);
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
              onClick={handleOpenLoginForm}
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
