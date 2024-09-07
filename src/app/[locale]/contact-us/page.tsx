'use client';

import * as S from './page.styled';
import React, { useState } from 'react';
import Banner from '@/public/images/contact-us/banner.jpeg';
import Main from '@/public/images/contact-us/main.jpeg';
import Image from 'next/image';
import Achievements from '@/components/Achievements';
import { useCreateContactUsMutation } from '@/features/contact-us/contact-us.api';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    city: '',
    postCode: '',
    address: '',
    employess: '',
    comment: ''
  });

  const [createContactUs] = useCreateContactUsMutation();

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await createContactUs({
        firstName: formData.firstName,
        lastName: formData.lastName,
        companyName: formData.companyName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        city: formData.city,
        postCode: formData.postCode,
        address: formData.address,
        employess: +formData.employess,
        comment: formData.comment,
      }).unwrap();

      window.location.reload();

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <S.HeaderImage>
        <Image src={Main} alt="main" />
        <S.HeaderText>
          <p>Lorem Ipsum is simply dummy text of the</p>
          <h1>BECOME A PARTNER</h1>
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and </span>
        </S.HeaderText>
      </S.HeaderImage>
      <S.InfoSection>
        <S.InfoBlock>
          <S.InfoTitle>Lorem ipsum dolor set</S.InfoTitle>
        <S.InfoText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </S.InfoText>
        <S.InfoText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standaronly five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
        </S.InfoText>
        </S.InfoBlock>
        <S.CardContainer>
          <S.InfoCard>
            <h3>Technical Support</h3>
            <p>1.1 Provide a wealth of technical information and training courses related to installation and maintenance</p>
            <p>1.2. Through various professional skill training methods, meet the needs of technical ability improvement</p>
          </S.InfoCard>
          <S.InfoCard>
            <h3>Spare Parts Supply</h3>
            <p>Provide spare parts supply for at least 6 years to ensure that users can obtain high-quality spare parts from the original factory in time when there is an abnormality in the users equipment</p>
          </S.InfoCard>
          <S.InfoCard>
            <h3>Service Channel</h3>
            <p>Provide professional and comprehensive user access channels, including but not limited to hotline, email, social media, service outlets, etc.</p>
          </S.InfoCard>
        </S.CardContainer>
      </S.InfoSection>
      <S.BannerImage>
        <Image src={Banner} alt="banner" />
      </S.BannerImage>

      <S.ContactUsWrapper>
        <S.Header>
          <h1>Contact us</h1>
        </S.Header>
        <S.Header>
          <h2>Join Our Team</h2>
        </S.Header>
        <S.MainContent>
          <S.Form onSubmit={handleSubmit}>
            <S.TwoColumnRow>
              <S.InputGroup>
                <label htmlFor="firstName">First Name*</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="lastName">Last Name*</label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </S.InputGroup>
            </S.TwoColumnRow>
            <S.InputGroup>
              <label htmlFor="companyName">Company Name*</label>
              <input
                id="companyName"
                type="text"
                placeholder="Enter your company name"
                value={formData.companyName}
                onChange={handleInputChange}
              />
            </S.InputGroup>
            <S.TwoColumnRow>
              <S.InputGroup>
                <label htmlFor="email">Email*</label>
                <input
                  id="email"
                  type="text"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="phoneNumber">Phone Number*</label>
                <input
                  id="phoneNumber"
                  type="text"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </S.InputGroup>
            </S.TwoColumnRow>
            <S.TwoColumnRow>
              <S.InputGroup>
                <label htmlFor="city">City*</label>
                <input
                  id="city"
                  type="text"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="postCode">Postcode*</label>
                <input
                  id="postCode"
                  type="text"
                  placeholder="Enter your postcode"
                  value={formData.postCode}
                  onChange={handleInputChange}
                />
              </S.InputGroup>
            </S.TwoColumnRow>
            <S.TwoColumnRow>
              <S.InputGroup>
                <label htmlFor="address">Address*</label>
                <input
                  id="address"
                  type="text"
                  placeholder="Enter your house/flat N"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="employess">Number of Employees</label>
                <input
                  id="employess"
                  type="number"
                  placeholder="001"
                  value={formData.employess}
                  onChange={handleInputChange}
                />
              </S.InputGroup>
            </S.TwoColumnRow>
            <S.InputGroup>
              <label htmlFor="comment">Comments</label>
              <textarea
                id="comment"
                placeholder="Your comments"
                value={formData.comment}
                onChange={handleInputChange}
              />
            </S.InputGroup>
            <S.ButtonContainer>
              <S.Button type="submit">Become a partner</S.Button>
            </S.ButtonContainer>
          </S.Form>
        </S.MainContent>
        <Achievements />
      </S.ContactUsWrapper>
    </>
  );
}
