'use client';
import React from 'react';

// styles
import MainLayout from '@/components/Layout';
import * as S from './page.styled';

// componenets
import Achievements from '@/components/Achievements';
import RegisterForm from '@/components/forms/RegisterForm';
import { useAppSelector } from '@/store/hooks';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const user = useAppSelector((state) => state.auth.user) as any;
  const router = useRouter();

  if (user) {
    router.push('/profile');
    return;
  }

  return (
    <S.SignUpWrapper>
      <MainLayout>
        <RegisterForm />
        <Achievements />
      </MainLayout>
    </S.SignUpWrapper>
  );
}
