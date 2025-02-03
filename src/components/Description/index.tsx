'use client';

import React from 'react';

// styles
import * as S from './Description.styled';
import { useTranslations } from 'next-intl';

function Description() {
  const t = useTranslations('Home');
  return (
    <S.DescriptionWrapper>
      <S.DescriptionTitle>{t('info_title')}</S.DescriptionTitle>
      <S.Description>{t('info')}</S.Description>
    </S.DescriptionWrapper>
  );
}

export default Description;
