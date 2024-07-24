import React from 'react';

// styles
import MainLayout from '@/components/Layout';
import * as S from './page.styled';

// componenets
import Achievements from '@/components/Achievements';
import RegisterForm from '@/components/forms/RegisterForm';
import LoginForm from '@/components/forms/LoginForm';

export default function SignUp() {
  return (
    <S.SignUpWrapper>
      <MainLayout>
        <RegisterForm />
        <Achievements />
      </MainLayout>
    </S.SignUpWrapper>
  );
}
