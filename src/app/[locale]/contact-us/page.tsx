'use client';

import * as S from './page.styled';
import React from 'react';
import Banner from '@/public/images/contact-us/banner.jpeg'
import Main from '@/public/images/contact-us/main.jpeg'
import Image from 'next/image';
import Achievements from '@/components/Achievements';

export default function ContactUs() {
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
          <S.Form>
            <S.TwoColumnRow>
              <S.InputGroup>
                <label htmlFor="firstName">First Name*</label>
                <input id="firstName" type="text" placeholder="Enter your first name" />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="lastName">Last Name*</label>
                <input id="lastName" type="text" placeholder="Enter your last name" />
              </S.InputGroup>
            </S.TwoColumnRow>
            <S.InputGroup>
              <label htmlFor="companyName">Company Name*</label>
              <input id="companyName" type="text" placeholder="Enter your company name" />
            </S.InputGroup>
            <S.TwoColumnRow>
              <S.InputGroup>
                <label htmlFor="email">Email*</label>
                <input id="email" type="text" placeholder="Enter your email" />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="phone">Phone Number*</label>
                <input id="phone" type="text" placeholder="Enter your phone number" />
              </S.InputGroup>
            </S.TwoColumnRow>
            <S.TwoColumnRow>
              <S.InputGroup>
                <label htmlFor="city">City*</label>
                <input id="city" type="text" placeholder="Enter your city" />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="postcode">Postcode*</label>
                <input id="postcode" type="text" placeholder="Enter your postcode" />
              </S.InputGroup>
            </S.TwoColumnRow>
            <S.TwoColumnRow>
              <S.InputGroup>
                <label htmlFor="address">Address*</label>
                <input id="address" type="text" placeholder="Enter your house/flat N" />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="postcode">Number of Employees</label>
                <input id="postcode" type="number" placeholder="001" />
              </S.InputGroup>
            </S.TwoColumnRow>
            <S.InputGroup>
              <label htmlFor="comments">Comments</label>
              <textarea id="comments" placeholder="Your comments"></textarea>
            </S.InputGroup>
            <S.ButtonContainer>
              <S.Button>Become a partner</S.Button>
            </S.ButtonContainer>
          </S.Form>
        </S.MainContent>
        <Achievements />
      </S.ContactUsWrapper>
    </>
  );
}
