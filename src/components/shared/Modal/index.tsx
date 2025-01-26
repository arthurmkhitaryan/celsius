import React from 'react';
import * as S from './Modal.styled';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <S.ModalOverlay>
      <S.ModalContent>{children}</S.ModalContent>
    </S.ModalOverlay>
  );
};

export default Modal;
