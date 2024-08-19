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
      localStorage.setItem('access_token', response.access_token);
      if (rememberMe) {
        localStorage.setItem('access_token', response.access_token);
      } else {
        sessionStorage.setItem('access_token', response.access_token);
      } 
    } catch (error) {
      console.error(error);
    }
  };

  const handleRedirecToSignUp = () => {
    if (!pathname.includes(`${locale}/sign-up`)) {
      router.replace(`${locale}/sign-up`);
    }
    onChangeVisibility(false);
  };

  const handleClose = () => {
    onChangeVisibility(false);
  };

  return (
    <S.LoginFormWrapper $visible={visible}>
      <S.Title>
        Sign In
        <S.ArrowUp src={ArrowUpLogin.src} />
        <X className="close-button" size={24} onClick={handleClose} />
      </S.Title>
      <S.Description>Use Your email address & password to login</S.Description>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.InputWrapper>
          <S.Label>Email</S.Label>
          <S.Input
            placeholder="YourEmail@gmail.com"
            type="email"
            {...register('email', { required: true })}
          />
          {errors.email && <S.Error>This field is required</S.Error>}
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>Password</S.Label>
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
          <S.RememberMeLabel>Remember Me</S.RememberMeLabel>
        </S.RememberMeWrapper>
        <S.SubmitButton type="submit" disabled={isLoading}>
          Sign In
        </S.SubmitButton>
        <S.ForgetLink href="/forget">Forgot Username or Password?</S.ForgetLink>
        <S.NewHereText>New Here?</S.NewHereText>
        <S.GoToRegister type="button" onClick={handleRedirecToSignUp}>
          Become a customer
        </S.GoToRegister>
      </S.Form>
    </S.LoginFormWrapper>
  );
}
