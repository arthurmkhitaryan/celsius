import React from 'react';

// styles
import MainLayout from '@/components/Layout';
import * as S from './page.styled';

// componenets
import Achievements from '@/components/Achievements';
import RegisterForm from '@/components/forms/RegisterForm';

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
