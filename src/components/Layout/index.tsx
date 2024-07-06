'use client';

import React from 'react';

// styled
import * as S from './Layout.styled';

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <S.LayoutWrapper>
      <S.ContentWrapper>{children}</S.ContentWrapper>
    </S.LayoutWrapper>
  );
}

export default MainLayout;
