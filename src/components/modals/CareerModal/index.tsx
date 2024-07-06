'use client';

import React from 'react';
import Modal from 'react-modal';
import * as S from './CareerModal.styled';
import { Dot } from 'lucide-react';
import { theme } from '@/styles';
import { CareerItemProps } from '@/components/CareerItem';

interface CareerModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  career: CareerItemProps;
}

function CareerModal({ isOpen, onRequestClose, career }: CareerModalProps) {
  console.log({ isOpen, onRequestClose });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onRequestClose()}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          maxWidth: '1152px',
          padding: '80px 54px',
          marginTop: '90px',
          boxShadow: '2px 2px 40px 0px #00000033',
          borderRadius: '15px',
        },
      }}
    >
      <S.ModalHeader>
        <S.ModalHeaderContent>
          <S.ModalTitle>{career.title}</S.ModalTitle>
          <S.CareerItemInfo>
            <S.CareerAddress>{career.address}</S.CareerAddress>
            <Dot size={40} color={theme.palette.common.mainBlue} />
            <S.CareerItemPostDate>
              Posting Date: {career.postingDate}
            </S.CareerItemPostDate>
          </S.CareerItemInfo>
        </S.ModalHeaderContent>
        <button onClick={onRequestClose}>&times;</button>
      </S.ModalHeader>
      <S.ModalContent>
        <S.Section>
          <h3>Job Description</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry...
          </p>
        </S.Section>
        <S.Section>
          <h3>Responsibilities</h3>
          <ul>
            <li>Lorem Ipsum is simply dummy text of the printing...</li>
            {/* More list items */}
          </ul>
        </S.Section>
        <S.Section>
          <h3>Qualifications</h3>
          <ul>
            <li>Lorem Ipsum is simply dummy text of the printing...</li>
            {/* More list items */}
          </ul>
        </S.Section>
        <S.Section>
          <h3>About Us</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry...
          </p>
        </S.Section>
        <S.Form>
          <S.FormRow>
            <S.FormField>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
            </S.FormField>
            <S.FormField>
              <label htmlFor="surname">Surname:</label>
              <input type="text" id="surname" name="surname" />
            </S.FormField>
          </S.FormRow>
          <S.FormRow>
            <S.FormField>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </S.FormField>
            <S.FormField>
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" />
            </S.FormField>
          </S.FormRow>
          <S.FormRow>
            <S.FormField>
              <label htmlFor="position">Position:</label>
              <input type="text" id="position" name="position" />
            </S.FormField>
          </S.FormRow>
          <S.FormRow>
            <S.FormField>
              <label htmlFor="other-info">Other Information:</label>
              <textarea id="other-info" name="other-info"></textarea>
            </S.FormField>
          </S.FormRow>
          <S.FormRow>
            <S.FormField>
              <label htmlFor="cv">
                CV Allowed File Types (JPG, JPEG, PDF, DOC, DOCX):
              </label>
              <input type="file" id="cv" name="cv" />
            </S.FormField>
          </S.FormRow>
          <S.SubmitButton type="submit">Apply Now</S.SubmitButton>
        </S.Form>
      </S.ModalContent>
    </Modal>
  );
}

export default CareerModal;
