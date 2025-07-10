'use client';

import * as S from './page.styled';
import React, { useState, useEffect, useMemo } from 'react';
import Contact from '@/public/images/contact-us/contact.jpeg';
import Achievements from '@/components/Achievements';
import { useCreateContactUsMutation } from '@/features/contact-us/contact-us.api';
import { Clock5, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { useClientMediaQuery } from '@/store/useClientMediaQuery';
import FacebookLogo from '@/public/images/facebook-filled.svg';
import InstagramLogo from '@/public/images/instagram-filled.svg';
import LinkedinLogo from '@/public/images/linkedin-filled.svg';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Modal from '@/components/shared/Modal';
import { FormState } from '@/components/FormState';

export default function ContactUs() {
  const t = useTranslations('Contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<any>({});
  const [isSended, setIsSended] = useState(false);
  const [mainError, setMainError] = useState(false);
  const isTablet = useClientMediaQuery('(max-width: 768px)');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    return newErrors;
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [createContactUs] = useCreateContactUsMutation();

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
      await createContactUs({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      } as ContactUs).unwrap();

      setIsSended(true);
      setIsModalOpen(true)
      setMainError(false);
    } catch (error) {
      setMainError(true);
    }
  };

  useEffect(() => {
    return () => {
      setIsSended(false);
      setMainError(false);
    };
  }, []);

  const message = useMemo(() => {
    if (mainError) return 'Error please contact';
    if (isSended) return 'Sent Successfully';
    return 'Send Message';
  }, [isSended, mainError]);

  return (
    <>
      <S.HeaderImage $backgroundImage={Contact.src}>
        <S.HeaderText>
          <h1>{t('title')}</h1>
        </S.HeaderText>
      </S.HeaderImage>
      <S.ContactUsWrapper>
        <S.MainContent>
          <S.Form onSubmit={handleSubmit}>
            <S.TwoColumnRow>
              <S.InputGroup>
                <label htmlFor="firstName">{t('inputs.name')}*</label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && <S.Error>{errors.name}</S.Error>}
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="email">{t('inputs.email')}*</label>
                <input
                  id="email"
                  type="text"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <S.Error>{errors.email}</S.Error>}
              </S.InputGroup>
            </S.TwoColumnRow>
            <S.InputGroup>
              <label htmlFor="message">{t('inputs.message')}*</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleInputChange}
              />
              {errors.message && <S.Error>{errors.message}</S.Error>}
            </S.InputGroup>
            <S.ButtonContainer>
              <S.Button type="submit">{t('inputs.send')}</S.Button>
            </S.ButtonContainer>
          </S.Form>
          {/* Modal with FormState */}
          <Modal isOpen={isModalOpen}>
            <FormState
              isError={mainError}
              withSuccessText={!mainError}
              closeModal={closeModal}
            />
          </Modal>
          <S.FooterSectionContent>
            <S.TitleContact>{t('info.name')}</S.TitleContact>
            <S.FooterSectionTitle isTablet={isTablet}>
              {t('info.contacts')}
            </S.FooterSectionTitle>
            <S.FooterSectionItem>
              <MapPin size={18} color="#0044CC" />
              <div>
                <span>
                  {t('info.address_one')} <br />
                </span>
                <span>{t('info.address_two')}</span> <br />
                <span>{t('info.address_three')}</span>
              </div>
            </S.FooterSectionItem>
            <S.FooterSectionItem>
              <Phone size={18} color="#0044CC" />
              <div>
                <span>
                +374 (43) 120 100
                </span>
                <span> <br />
                +374 (33) 160 100
                </span>
                <span> <br />
                +374 (44) 842 222
                </span>
              </div>
            </S.FooterSectionItem>
            <S.FooterSectionItem>
              <Mail size={18} color="#0044CC" />
              <div>
                <span>
                  celsiusarmenia@mail.ru <br />
                </span>
              </div>
            </S.FooterSectionItem>
            <S.FooterContentFooter isTablet>
              <Link
                href={'https://www.facebook.com/Celsiusarmenia'}
                target="_blank"
              >
                <Image
                  src={FacebookLogo.src}
                  alt={'celsius-facebook'}
                  width={40}
                  height={40}
                />
              </Link>
              <Link
                href={'https://www.instagram.com/celsius_llc/?hl=en'}
                target="_blank"
              >
                <Image
                  src={InstagramLogo.src}
                  alt={'celsius-instagram'}
                  width={40}
                  height={40}
                />
              </Link>
              <Link
                href={'https://www.linkedin.com/company/celsiusllc/'}
                target="_blank"
              >
                <Image
                  src={LinkedinLogo.src}
                  alt={'celsius-linkedin'}
                  width={40}
                  height={40}
                />
              </Link>
            </S.FooterContentFooter>
            <S.FooterSectionTitle isTablet={isTablet}>
              {t('info.working_hours')}
            </S.FooterSectionTitle>
            <S.FooterSectionItem>
              <Clock5 size={18} color="#0044CC" />
              <div>
                <span>
                  {t('info.days_one')} <br />
                </span>
                <span>{t('info.days_two')}</span>
              </div>
            </S.FooterSectionItem>
          </S.FooterSectionContent>
        </S.MainContent>
        <Achievements />
      </S.ContactUsWrapper>
    </>
  );
}
