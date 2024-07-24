'use client';

import styled from 'styled-components';

export const RegisterFormWrapper = styled.div``;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: 25.2px;
  color: #0d2427;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

export const Error = styled.span`
  color: red;
  font-size: 12px;
`;

export const SubmitButton = styled.button`
  background-color: #0d2427;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:disabled {
    background-color: #999;
  }
`;
