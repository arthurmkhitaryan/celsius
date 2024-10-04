'use client';

import React from 'react';

import {
  localeNames,
  locales,
  usePathname,
  useRouter,
  type Locale,
} from '@/i18n.config';

// styles & images
import * as S from './Language.styled';
import LangLogo from '@/public/images/lang.svg';
import Image from 'next/image';

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value as Locale;

    router.replace(pathname, { locale: newLocale });
  };

  return (
    <S.LanguageWrapper>
      <Image priority src={LangLogo} alt="Select Language" />
      <S.LanguageSelect value={locale} onChange={changeLocale}>
        {locales.map((loc) => (
          <S.LanguageOption key={loc} value={loc}>
            {localeNames[loc]}
          </S.LanguageOption>
        ))}
      </S.LanguageSelect>
    </S.LanguageWrapper>
  );
}
