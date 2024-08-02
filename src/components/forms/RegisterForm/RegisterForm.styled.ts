'use client';

import styled from 'styled-components';

export const RegisterFormWrapper = styled.div``;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: 25.2px;
  color: #0d2427;
  margin-top: 80px;
  margin-bottom: 24px;
`;

export const Form = styled.form`
  background: radial-gradient(50% 50% at 50% 50%, #f2f6fd 0%, #e7eefb 100%);
  padding: 40px;
  border-radius: 15px;
  max-width: 1140px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 56px;
  row-gap: 32px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  color: #0d2427;

  span {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 27px;
    color: ${({ theme }) => theme.palette.common.mainBlue};
    margin-left: 1px;
  }
`;

export const Input = styled.input<{ error: boolean }>`
  width: 100%;
  padding: 8px;
  border-radius: 23px;
  border: 1px solid ${({ error }) => (error ? 'red' : '#E0E0E0')};
  background: #ffffff;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  color: #0d2427;
  margin-top: 20px;
  padding: 8px 32px;

  &::placeholder {
    color: #bdbdbd;
  }
`;

export const Error = styled.p`
  color: red;
  font-size: 14px;
  padding-top: 8px;
  margin-left: 25px;
`;

export const SubmitButton = styled.button`
  background-color: #0044cc;
  color: #fff;
  max-width: 273px;
  width: 100%;
  text-align: center;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
  box-shadow: 0px 5px 15px 0px #252c6126;
  box-shadow: 0px 2px 4px 0px #8890c233;
  margin-top: 48px;
  transition: all 0.3s;

  &:hover {
    background-color: #003193;
    transition: all 0.3s;
  }
`;

export const AlreadyHaveAccount = styled.div`
  margin-top: 24px;
  display: flex;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  text-align: center;
  color: #0d2427;
  a {
    color: #0044cc;
  }
`;
