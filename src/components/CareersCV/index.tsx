'use client';

import { ChangeEvent, useRef, useState } from 'react';
import * as S from './CareersCV.styled';
import Button from '@/components/shared/Button';
import { useSendCVMutation } from '@/features';

function CareersCV() {
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
        We are always ready to welcome new professioanls to our team!
      </S.Title>
      <S.ContactsSections>
        <S.ContactsSection>
          <S.ContactSectionValue>Contact to</S.ContactSectionValue>
          <S.ContactSectionValue>Jon Owen</S.ContactSectionValue>
        </S.ContactsSection>
        <S.ContactsSection>
          <S.ContactSectionValue>E-mail</S.ContactSectionValue>
          <S.ContactSectionValue>celsiusarmenia@mail.ru</S.ContactSectionValue>
        </S.ContactsSection>
        <S.ContactsSection>
          <S.ContactSectionValue>Phone</S.ContactSectionValue>
          <S.ContactSectionValue>374(43)120100</S.ContactSectionValue>
        </S.ContactsSection>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <Button width={178} disabled={cvSent} onClick={handleButtonClick}>{cvSent ? 'CV Sent' : 'Send CV'}</Button>
      </S.ContactsSections>
    </S.Container>
  );
}

export default CareersCV;
