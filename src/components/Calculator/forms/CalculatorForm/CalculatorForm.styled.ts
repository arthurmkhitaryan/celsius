'use client';

import styled from 'styled-components';
import { typographyPreset8, typographyPreset9 } from '@/styles';

export const CalculatorForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  button {
    color: ${({ theme }) => theme.palette.common.white};
    max-width: 305px;
    width: 100%;
    align-self: center;
    margin-bottom: 60px;
    padding: 16px 0;
    ${typographyPreset9};

    &:hover {
      color: ${({ theme }) => theme.palette.common.white};
      background: ${({ theme }) => theme.palette.common.hoverBlue};
    }
  }

  &:first-child {
    padding-top: 30px !important;
  }
`;

export const CalculatorFormDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 60px 40px 40px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.common.borderLight};
`;

export const CalculatorFormLabel = styled.label`
  ${typographyPreset8};
  max-width: 250px;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .celling-unit {
    right: 55px;
    bottom: 20px;
  }

  .surface-input {
    padding-right: 56px;
  }

  .celling-input {
    padding-right: 56px;
  }
`;

export const CalculatorFormInput = styled.input`
  padding: 12px 35px 12px 35px;
  margin-top: 4px;
  border: 1px solid ${({ theme }) => theme.palette.common.gray5};
  background: ${({ theme }) => theme.palette.common.gray6};
  border-radius: 10px;
  ${typographyPreset8};
  max-width: 170px;
  text-align: center;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.palette.common.gray4};
    ${typographyPreset8};
  }
`;

export const Unit = styled.span`
  position: absolute;
  right: 45px;
  top: 16px;
  font-size: 20px;
  ${typographyPreset8};
  color: ${({ theme }) => theme.palette.common.gray4};
`;

export const CalculatorFormSelect = styled.select`
  padding: 12px 26px 12px 35px;
  margin-top: 4px;
  border: 1px solid ${({ theme }) => theme.palette.common.gray5};
  background: ${({ theme }) => theme.palette.common.gray6};
  border-radius: 10px;
  ${typographyPreset8};
  max-width: 230px;
  text-align: center;
  width: 100%;
`;

export const CalculatorFormError = styled.span`
  color: red;
  font-size: 12px;
`;

export const CalculatorFormDetailUserData = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 48px;

  border-bottom: 1px solid #d9d9d9;

  &:last-child {
    border-bottom: none;
  }
`;

export const CalculatorFormDetailSelectUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 40px 40px 0;

  input {
    width: 100%;
    max-width: 100%;
    border-radius: 23px;
    text-align: left;
    font-size: 18px;

    &::placeholder {
      font-size: 18px;
    }
  }
`;

export const CalculatorFormDetailUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 40px 40px 0;

  input {
    width: 100%;
    max-width: 100%;
    border-radius: 23px;
    text-align: left;
    font-size: 18px;

    &::placeholder {
      font-size: 18px;
    }
  }

  label {
    margin-bottom: 16px;
  }
`;

export const RequiredSign = styled.span`
  color: ${({ theme }) => theme.palette.common.mainBlue};
  margin-left: 3px;
  font-size: 20px;
`;
