'use client';

import React, { Dispatch, SetStateAction, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as S from './LoginForm.styled';
import { Login } from '@/features/auth/auth.types';
import { useAppDispatch } from '@/store/hooks';
import { setToken, setUser, useLoginMutation } from '@/features';
import ArrowUpLogin from '@/public/images/login/arrow-up.png';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import { setCookie } from 'cookies-next';
import { useTranslations } from 'next-intl';

interface LoginFormProps {
  visible: boolean;
  onChangeVisibility: Dispatch<SetStateAction<boolean>>;
}

export default function LoginForm({
  visible = false,
  onChangeVisibility,
}: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();
  const t = useTranslations('Login');
  const [loginUser, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useParams();

  const onSubmit: SubmitHandler<Login> = async (data) => {
    try {
      const response = await loginUser(data).unwrap();
      dispatch(setUser(response.user));
      dispatch(setToken(response.access_token));

      setCookie('access_token', response.access_token, {
        maxAge: rememberMe ? 7 * 24 * 60 * 60 : undefined,
        path: '/',
        sameSite: 'strict',
      });

      onChangeVisibility(false);

      router.push('/profile');
    } catch (error) {
      console.error(error);
    }
  };

  const handleRedirecToSignUp = () => {
    if (!pathname.includes(`${locale}/sign-up`)) {
      router.push(`/sign-up`);
    }
    onChangeVisibility(false);
  };

  const handleClose = () => {
    onChangeVisibility(false);
  };

  return (
    <S.LoginFormWrapper $visible={visible}>
      <S.Title>
        {t('sign')}
        <S.ArrowUp src={ArrowUpLogin.src} />
        <X className="close-button" size={24} onClick={handleClose} />
      </S.Title>
      <S.Description> {t('text')}</S.Description>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.InputWrapper>
          <S.Label> {t('email')}</S.Label>
          <S.Input
            placeholder="YourEmail@gmail.com"
            type="email"
            {...register('email', { required: true })}
          />
          {errors.email && <S.Error>This field is required</S.Error>}
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label> {t('password')}</S.Label>
          <S.Input
            placeholder="**********"
            type="password"
            {...register('password', { required: true })}
          />
          {errors.password && <S.Error>This field is required</S.Error>}
        </S.InputWrapper>
        <S.RememberMeWrapper>
          <S.Checkbox
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <S.RememberMeLabel> {t('remember')}</S.RememberMeLabel>
        </S.RememberMeWrapper>
        <S.SubmitButton type="submit" disabled={isLoading}>
          {t('sign')}
        </S.SubmitButton>
        <S.NewHereText> {t('new')}</S.NewHereText>
        <S.GoToRegister type="button" onClick={handleRedirecToSignUp}>
          {t('become_customer')}
        </S.GoToRegister>
      </S.Form>
    </S.LoginFormWrapper>
  );
}
