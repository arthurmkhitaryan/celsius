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

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<any>({});
  const [isSended, setIsSended] = useState(false);
  const [mainError, setMainError] = useState(false);
  const isTablet = useClientMediaQuery('(max-width: 768px)');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    return newErrors;
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
      setMainError(false);
    } catch (error) {
      console.error('Error submitting form:', error);
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
          <h1>CONTACT US</h1>
        </S.HeaderText>
      </S.HeaderImage>
      <S.ContactUsWrapper>
        <S.MainContent>
          <S.Form onSubmit={handleSubmit}>
            <S.TwoColumnRow>
              <S.InputGroup>
                <label htmlFor="firstName">Your Name*</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && <S.Error>{errors.name}</S.Error>}
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="email">Email*</label>
                <input
                  id="email"
                  type="text"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <S.Error>{errors.email}</S.Error>}
              </S.InputGroup>
            </S.TwoColumnRow>
            <S.InputGroup>
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleInputChange}
              />
              {errors.message && <S.Error>{errors.message}</S.Error>}
            </S.InputGroup>
            <S.ButtonContainer>
              <S.Button type="submit">{message}</S.Button>
            </S.ButtonContainer>
          </S.Form>
          <S.FooterSectionContent>
            <S.TitleContact>Celsius LLC</S.TitleContact>
            <S.FooterSectionTitle isTablet={isTablet}>
              Contacts
            </S.FooterSectionTitle>
            <S.FooterSectionItem>
              <MapPin size={18} color="#0044CC" />
              <div>
                <span>
                  Yerevan, Rubinyants 2/10 <br />
                </span>
                <span>Yerevan, Vratsyan 73/1</span>
              </div>
            </S.FooterSectionItem>
            <S.FooterSectionItem>
              <Phone size={18} color="#0044CC" />
              <div>
                <span>
                  +374(43)120100 <br />
                </span>
                <span>+374(33)160100</span>
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
              Working hours
            </S.FooterSectionTitle>
            <S.FooterSectionItem>
              <Clock5 size={18} color="#0044CC" />
              <div>
                <span>
                  Mon - Fri / 10:00 - 19:00 <br />
                </span>
                <span>Sat. / 10:00 - 18:00</span>
              </div>
            </S.FooterSectionItem>
          </S.FooterSectionContent>
        </S.MainContent>
        <Achievements />
      </S.ContactUsWrapper>
    </>
  );
}
