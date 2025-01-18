'use client';

import * as S from './page.styled';
import React, { useState } from 'react';
import Contact from '@/public/images/contact-us/contact.jpeg';
import Achievements from '@/components/Achievements';
import { useCreateContactUsMutation } from '@/features/contact-us/contact-us.api';
import { Clock5, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { useClientMediaQuery } from '@/store/useClientMediaQuery';
import FacebookLogo from '@/public/images/facebook-filled.svg';
import InstagramLogo from '@/public/images/instagram-filled.svg';
import LinkedinLogo from '@/public/images/linkedin-filled.svg';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const isTablet = useClientMediaQuery('(max-width: 768px)');

  const [createContactUs] = useCreateContactUsMutation();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required.';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company Name is required.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid Email is required.';
    }
    if (!formData.phoneNumber.trim() || !/^\+?\d{7,15}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Valid Phone Number is required.';
    }
    if (!formData.city.trim()) newErrors.city = 'City is required.';
    if (!formData.postCode.trim()) newErrors.postCode = 'Postcode is required.';
    if (!formData.address.trim()) newErrors.address = 'Address is required.';
    if (!formData.comment.trim()) newErrors.comment = 'Comments is required.';
    if (!formData.employess.trim()) newErrors.employess = 'Employess is required.';

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
      await createContactUs({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }).unwrap();

      window.location.reload();
    } catch (error) {
      console.error('Error submitting form:', error);
      setMainError(true);
    }
  };

  useEffect(() => {
    return (() => {
      setIsSended(false);
      setMainError(false);
    })
  }, []);

  const message = useMemo(() => {
    if (mainError) return "Error please contact";
    if (isSended) return "Sent Successfully";
    return "Become a partner";
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
                {errors.firstName && <S.Error>{errors.firstName}</S.Error>}
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
              {errors.comment && <S.Error>{errors.comment}</S.Error>}
            </S.InputGroup>
            <S.ButtonContainer>
              <S.Button type="submit">Send Message</S.Button>
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
              <Image
                src={FacebookLogo.src}
                alt={'celsius-facebook'}
                width={40}
                height={40}
              />
              <Image
                src={InstagramLogo.src}
                alt={'celsius-instagram'}
                width={40}
                height={40}
              />
              <Image
                src={LinkedinLogo.src}
                alt={'celsius-linkedin'}
                width={40}
                height={40}
              />
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
