'use client';

import React from 'react';
import {
  FormWrapper,
  BillingSection,
  PaymentSection,
  InputGroup,
  TwoColumnRow,
  Button,
  CreditCardSection,
  Title,
  SelectField,
  ButtonContainer,
} from './page.styled';

import ArcaIcon from '@/public/images/checkout/arca.png';
import VisaIcon from '@/public/images/checkout/visa.png';
import MaterCardIcon from '@/public/images/checkout/master-card.png';
import { useAppSelector } from '@/store/hooks';
import { useRouter } from 'next/navigation';

const BillingForm = () => {
  const user = useAppSelector((state) => state.auth.user) as any;
  const router = useRouter();

  if (!user) {
    router.push('/sign-up');
    return;
  }
  return (
    <FormWrapper>
      <Title>Billing Details</Title>
      <BillingSection>
        <TwoColumnRow>
          <InputGroup>
            <label htmlFor="firstName">First Name*</label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter your first name"
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="lastName">Last Name*</label>
            <input
              id="lastName"
              type="text"
              placeholder="Enter your last name"
            />
          </InputGroup>
        </TwoColumnRow>

        <InputGroup>
          <label htmlFor="company">Company (optional)</label>
          <input
            id="company"
            type="text"
            placeholder="Enter your company name (optional)"
          />
        </InputGroup>

        <TwoColumnRow>
          <InputGroup>
            <label htmlFor="email">Email*</label>
            <input id="email" type="email" placeholder="Enter your email" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="phone">Phone Number*</label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
            />
          </InputGroup>
        </TwoColumnRow>

        <TwoColumnRow>
          <InputGroup>
            <label htmlFor="city">City*</label>
            <input id="city" type="text" placeholder="Enter your city" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="postcode">Postcode*</label>
            <input
              id="postcode"
              type="text"
              placeholder="Enter your postcode"
            />
          </InputGroup>
        </TwoColumnRow>

        <TwoColumnRow>
          <InputGroup>
            <label htmlFor="address">Street Address*</label>
            <input id="address" type="text" placeholder="Enter your address" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="houseNumber">House/Flat Number*</label>
            <input
              id="houseNumber"
              type="text"
              placeholder="Enter your house/flat number"
            />
          </InputGroup>
        </TwoColumnRow>

        <InputGroup>
          <label htmlFor="branch">Select a branch*</label>
          <SelectField>
            <option value="Yerevan">Yerevan, S Vatsyan 73/1</option>
          </SelectField>
        </InputGroup>

        <InputGroup>
          <label htmlFor="comments">Comments</label>
          <textarea id="comments" placeholder="Your comments"></textarea>
        </InputGroup>
      </BillingSection>

      <Title>Payment Method</Title>
      <PaymentSection>
        <CreditCardSection>
          <span>Credit Card</span>
          <div>
            <img src={MaterCardIcon.src} alt="MasterCard" />
            <img src={VisaIcon.src} alt="Visa" />
            <img src={ArcaIcon.src} alt="ArCa" />
          </div>
        </CreditCardSection>

        <TwoColumnRow>
          <InputGroup>
            <label htmlFor="cardNumber">Card Number*</label>
            <input
              id="cardNumber"
              type="text"
              placeholder="0000 0000 0000 0000"
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="nameOnCard">Name surname*</label>
            <input
              id="nameOnCard"
              type="text"
              placeholder="Enter your name/surname"
            />
          </InputGroup>
        </TwoColumnRow>

        <TwoColumnRow>
          <InputGroup>
            <label htmlFor="expiryDate">Expiry Date*</label>
            <input id="expiryDate" type="text" placeholder="MM/YY" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="csv">CSV*</label>
            <input id="csv" type="password" placeholder="***" />
          </InputGroup>
        </TwoColumnRow>

        <ButtonContainer>
          <Button>Place Order</Button>
        </ButtonContainer>
      </PaymentSection>
    </FormWrapper>
  );
};

export default BillingForm;
