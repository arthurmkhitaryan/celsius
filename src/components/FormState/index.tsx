import React from 'react';

//styled
import * as S from './FormState.styled';
import { CircleCheck, CircleX } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface IFormState {
  isError: boolean;
  withSuccessText: boolean;
  closeModal: () => void;
}

export const FormState = ({
  isError,
  withSuccessText,
  closeModal,
}: IFormState) => {
  const t = useTranslations('Form');

  return (
    <S.FormStateContainer>
      <S.IconSection $isError={isError}>
        {isError ? (
          <CircleX strokeWidth="1px" size={72} color="#fff" />
        ) : (
          <CircleCheck strokeWidth="1px" size={72} color="#fff" />
        )}
      </S.IconSection>
      <S.Content>
        {isError ? (
          <S.Title $withText={withSuccessText}>Error!</S.Title>
        ) : (
          <S.Title $withText={withSuccessText}>Success!</S.Title>
        )}
        {withSuccessText && <S.Description>{t('text')}</S.Description>}
        {isError ? (
          <S.Button
            onClick={() => {
              closeModal();
              window.location.reload();
            }}
            $isError={isError}
          >
            {t('try')}
          </S.Button>
        ) : (
          <S.Button
            onClick={() => {
              closeModal();
              window.location.reload();
            }}
            $isError={isError}
          >
            {t('continue')}
          </S.Button>
        )}
      </S.Content>
    </S.FormStateContainer>
  );
};
