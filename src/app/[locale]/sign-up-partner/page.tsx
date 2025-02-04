'use client';

import * as S from './page.styled';
import React, { useEffect, useMemo, useState } from 'react';
import Banner from '@/public/images/contact-us/banner.jpeg';
import Main from '@/public/images/contact-us/main.jpeg';
import Image from 'next/image';
import Achievements from '@/components/Achievements';
import { useCreatePartnerMutation } from '@/features/partner/partner.api';
import { FormState } from '@/components/FormState';
import Modal from '@/components/shared/Modal';
import { useTranslations } from 'next-intl';

export default function BecomeAPartner() {
  const t = useTranslations('Partner');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    comment: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSended, setIsSended] = useState(false);
  const [mainError, setMainError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [createPartner] = useCreatePartnerMutation();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim())
      newErrors.firstName = 'First Name is required.';
    if (!formData.lastName.trim())
      newErrors.lastName = 'Last Name is required.';
    if (!formData.companyName.trim())
      newErrors.companyName = 'Company Name is required.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid Email is required.';
    }
    if (
      !formData.phoneNumber.trim() ||
      !/^\+?\d{7,15}$/.test(formData.phoneNumber)
    ) {
      newErrors.phoneNumber = 'Valid Phone Number is required.';
    }
    if (!formData.comment.trim()) newErrors.comment = 'Comments is required.';

    return newErrors;
  };

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
    setErrors({
      ...errors,
      [id]: '',
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await createPartner({
        firstName: formData.firstName,
        lastName: formData.lastName,
        companyName: formData.companyName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        comment: formData.comment,
      }).unwrap();

      setIsSended(true);
      setMainError(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSended(false);
      setMainError(true);
    }

    setIsModalOpen(true); // Show modal after submission
    window.location.reload();
  };

  useEffect(() => {
    return () => {
      setIsSended(false);
      setMainError(false);
    };
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const message = useMemo(() => {
    if (mainError) return 'Error please contact';
    if (isSended) return 'Sent Successfully';
    return t('inputs.btn');
  }, [isSended, mainError]);

  return (
    <>
      <S.HeaderImage>
        <Image src={Main} alt="main" />
        <S.HeaderText>
          <h1>{t('title')}</h1>
          <p>{t('sub_title')}</p>
          <span>
            <p>{t('description')}</p>
          </span>
        </S.HeaderText>
      </S.HeaderImage>
      <S.InfoSection>
        <S.InfoBlock>
          <S.InfoText>{t('info_desc')}</S.InfoText>
          <S.InfoText>{t('info_desc_two')}</S.InfoText>
        </S.InfoBlock>
        <S.CardContainer>
          <S.InfoCard>
            <h3>{t('blocks.prices.title')}</h3>
            <p>{t('blocks.prices.desc')}</p>
          </S.InfoCard>
          <S.InfoCard>
            <h3>{t('blocks.special.title')}</h3>
            <p>{t('blocks.special.desc')}</p>
          </S.InfoCard>
          <S.InfoCard>
            <h3>{t('blocks.trainings.title')}</h3>
            <p>{t('blocks.trainings.desc')}</p>
          </S.InfoCard>
        </S.CardContainer>
      </S.InfoSection>
      <S.BannerImage>
        <Image src={Banner} alt="banner" />
      </S.BannerImage>
      <S.ContactUsWrapper>
        <S.Header>
          <h1>{t('contact')}</h1>
        </S.Header>
        <S.MainContent>
          <S.Form onSubmit={handleSubmit}>
            <S.TwoColumnRow>
              <S.InputGroup>
                <label htmlFor="firstName">{t('inputs.first_name')}</label>
                <input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                {errors.firstName && <S.Error>{errors.firstName}</S.Error>}
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="lastName">{t('inputs.last_name')}</label>
                <input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                {errors.lastName && <S.Error>{errors.lastName}</S.Error>}
              </S.InputGroup>
            </S.TwoColumnRow>
            <S.InputGroup>
              <label htmlFor="companyName">{t('inputs.company')}</label>
              <input
                id="companyName"
                type="text"
                value={formData.companyName}
                onChange={handleInputChange}
              />
              {errors.companyName && <S.Error>{errors.companyName}</S.Error>}
            </S.InputGroup>
            <S.TwoColumnRow>
              <S.InputGroup>
                <label htmlFor="email">{t('inputs.email')}</label>
                <input
                  id="email"
                  type="text"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <S.Error>{errors.email}</S.Error>}
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="phoneNumber">{t('inputs.phone')}</label>
                <input
                  id="phoneNumber"
                  type="text"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
                {errors.phoneNumber && <S.Error>{errors.phoneNumber}</S.Error>}
              </S.InputGroup>
            </S.TwoColumnRow>
            <S.InputGroup>
              <label htmlFor="comment">{t('inputs.comments')}</label>
              <textarea
                id="comment"
                value={formData.comment}
                onChange={handleInputChange}
              />
              {errors.comment && <S.Error>{errors.comment}</S.Error>}
            </S.InputGroup>
            <S.ButtonContainer>
              <S.Button disabled={isSended} type="submit">
                {message}
              </S.Button>
            </S.ButtonContainer>
          </S.Form>
          {/* Modal with FormState */}
          <Modal isOpen={isModalOpen}>
            <FormState
              isError={mainError}
              withSuccessText={true}
              closeModal={closeModal}
            />
          </Modal>
        </S.MainContent>
        <Achievements />
      </S.ContactUsWrapper>
    </>
  );
}
