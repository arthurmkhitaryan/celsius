'use client';

import { ChangeEvent, useRef, useState } from 'react';
import * as S from './CareersCV.styled';
import Button from '@/components/shared/Button';
import { useSendCVMutation } from '@/features';
import { useTranslations } from 'next-intl';

function CareersCV() {
  const t = useTranslations('Careers')
  const [sendCV] = useSendCVMutation();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [cvSent, setCvSent] = useState(false);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    if (file) {
      sendCV(file);
      setCvSent(true);
    }
  };

  return (
    <S.Container>
      <S.Title>
        {t('career_cv_title')}
      </S.Title>
      <S.ContactsSections>
        <S.ContactsSection>
          <S.ContactSectionValue>{t('contact_to')}</S.ContactSectionValue>
        </S.ContactsSection>
        <S.ContactsSection>
          <S.ContactSectionValue>{t('email')}</S.ContactSectionValue>
          <S.ContactSectionValue>celsiusarmenia@mail.ru</S.ContactSectionValue>
        </S.ContactsSection>
        <S.ContactsSection>
          <S.ContactSectionValue>{t('phone')}</S.ContactSectionValue>
          <S.ContactSectionValue>374(43)120100</S.ContactSectionValue>
        </S.ContactsSection>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <Button width={178} disabled={cvSent} onClick={handleButtonClick}>{cvSent ? 'CV sent successfully' : t('send')}</Button>
      </S.ContactsSections>
    </S.Container>
  );
}

export default CareersCV;
