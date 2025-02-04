'use client';

import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import * as S from './CareerModal.styled';
import { Dot } from 'lucide-react';
import { theme } from '@/styles';
import { CareerItemProps } from '@/components/CareerItem';
import { FormState } from '@/components/FormState';
import { default as FormStateModal } from '@/components/shared/Modal';

interface CareerModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  career: CareerItemProps;
}

function CareerModal({ isOpen, onRequestClose, career }: CareerModalProps) {
  const [isFormStateOpen, setIsFormStateOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    position: '',
    otherInfo: '',
    cv: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData((prev) => ({ ...prev, cv: file }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.cv) {
      alert('Please upload your CV.');
      return;
    }

    try {
      // Create FormData to send files and other fields
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('surname', formData.surname);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('otherInfo', formData.otherInfo);
      formDataToSend.append('cv', formData.cv);

      // Send to backend
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/careers`,
        {
          method: 'POST',
          body: formDataToSend,
        },
      );

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      console.log('Application submitted successfully');
      setIsError(false); // Success
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsError(true); // Error
    }

    // Open the FormState modal
    setIsFormStateOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => onRequestClose()}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            zIndex: 10000,
          },
          content: {
            position: 'relative',
            zIndex: '1000',
            top: 'auto',
            left: 'auto',
            right: 'auto',
            bottom: 'auto',
            margin: 'auto',
            width: '100%',
            height: '97vh',
            maxWidth: '1152px',
            padding: '80px 54px',
            boxShadow: '2px 2px 40px 0px #00000033',
            borderRadius: '15px',
            overflow: 'hidden',
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
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: career.content }}
          />
          <S.Form onSubmit={handleFormSubmit}>
            <S.FormRow>
              <S.FormField>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </S.FormField>
              <S.FormField>
                <label htmlFor="surname">Surname:</label>
                <input
                  type="text"
                  id="surname"
                  value={formData.surname}
                  onChange={handleInputChange}
                  required
                />
              </S.FormField>
            </S.FormRow>
            <S.FormRow>
              <S.FormField>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </S.FormField>
              <S.FormField>
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </S.FormField>
            </S.FormRow>
            <S.FormRow>
              <S.FormField>
                <label htmlFor="position">Position:</label>
                <input
                  type="text"
                  id="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                />
              </S.FormField>
            </S.FormRow>
            <S.FormRow>
              <S.FormField>
                <label htmlFor="otherInfo">Other Information:</label>
                <input
                  type="text"
                  id="otherInfo"
                  value={formData.otherInfo}
                  onChange={handleInputChange}
                />
              </S.FormField>
            </S.FormRow>
            <S.FormRow>
              <S.FormField className="upload">
                <label htmlFor="cv">
                  CV Allowed File Types (JPG, JPEG, PDF, DOC, DOCX):
                </label>
                <input
                  type="file"
                  id="cv"
                  onChange={handleFileChange}
                  accept=".jpg,.jpeg,.pdf,.doc,.docx"
                  required
                />
              </S.FormField>
            </S.FormRow>
            <S.SubmitButton type="submit">Apply Now</S.SubmitButton>
          </S.Form>
        </S.ModalContent>
      </Modal>

      {/* FormState Modal */}
      <FormStateModal isOpen={isFormStateOpen}>
        <FormState
          isError={isError}
          withSuccessText={!isError}
          closeModal={() => setIsFormStateOpen(false)}
        />
      </FormStateModal>
    </>
  );
}

export default CareerModal;
