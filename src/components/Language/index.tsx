'use client';

import React from 'react';
import Image from 'next/image';

// styles
import * as S from './Language.styled';

// images
import LangLogo from '@/public/images/lang.svg';

function Language() {
  return (
    <S.LanguageWrapper>
      <Image priority src={LangLogo} alt="Select Language" />
      <S.LanguageSelect>
        <S.LanguageOption>ENG</S.LanguageOption>
        <S.LanguageOption>RUS</S.LanguageOption>
        <S.LanguageOption>ARM</S.LanguageOption>
      </S.LanguageSelect>
    </S.LanguageWrapper>
  );
}

export default Language;
