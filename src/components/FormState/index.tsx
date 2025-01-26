import React from 'react';

//styled
import * as S from './FormState.styled';
import { CircleCheck, CircleX } from 'lucide-react';

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
        {withSuccessText && (
          <S.Description>
            Thank you. Your request has been approved. We will contact you
            within 3 business days.
          </S.Description>
        )}
        {isError ? (
          <S.Button
            onClick={() => {
              closeModal();
              window.location.reload();
            }}
            $isError={isError}
          >
            Try Again
          </S.Button>
        ) : (
          <S.Button
            onClick={() => {
              closeModal();
              window.location.reload();
            }}
            $isError={isError}
          >
            Continue
          </S.Button>
        )}
      </S.Content>
    </S.FormStateContainer>
  );
};
