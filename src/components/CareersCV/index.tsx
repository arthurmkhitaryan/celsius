'use client';

//styles
import * as S from './CareersCV.styled';
import Button from '@/components/shared/Button';

function CareersCV() {
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
        <Button width={178}>Send CV</Button>
      </S.ContactsSections>
    </S.Container>
  );
}

export default CareersCV;
