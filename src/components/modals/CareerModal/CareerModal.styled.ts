'use client';

import styled from 'styled-components';

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.palette.common.secondaryBlue};
  padding-bottom: 40px;
  margin-bottom: 18px;
  position: relative;

  button {
    background: none;
    border: none;
    font-size: 30px;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: -45px;
  }

  & > * {
    font-family: 'Inter', sans-serif;
  }
`;

export const CareerItemInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const CareerAddress = styled.p`
  color: #828282;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
`;

export const CareerItemPostDate = styled.p`
  color: #828282;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
`;

export const ModalContent = styled.div`
  max-height: 75vh;
  overflow-y: auto;
  padding-right: 20px; /* Increase/decrease this value for cross-browser compatibility */

  /* width */
  &::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #1f94d2;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  & > .content {
    margin-bottom: 64px;
    h2 {
      margin-top: 48px;
      font-size: 24px;
      font-weight: 400;
      line-height: 36px;
      color: #1c1c1c;
      margin-bottom: 24px;
    }
    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 30px;
      color: #4f4f4f;
      margin-bottom: 16px;
    }
    ul {
      padding-left: 20px;

      li {
        font-size: 16px;
        font-weight: 400;
        line-height: 30px;
      }
    }
  }
`;

export const ModalHeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

export const ModalTitle = styled.h2`
  font-size: 32px;
  font-weight: 500;
  line-height: 38.4px;
`;

export const Section = styled.div`
  margin-bottom: 20px;

  h3 {
    margin-bottom: 10px;
  }

  ul {
    padding-left: 20px;
  }

  ul li {
    margin-bottom: 5px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 48px;

  input[type='file']::-webkit-file-upload-button {
    padding: 15px 48px;
    background-color: #9f9f9f;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    color: #ffffff;
    border: none;
    box-shadow: 0px 5px 15px 0px #252c6126;
    box-shadow: 0px 2px 4px 0px #8890c233;
    border-radius: 4px;
    margin-right: 0px;
    cursor: pointer;
    margin-right: 15px;
  }

  .upload {
    border: none;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;

    label {
      font-size: 24px;
    }
  }
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 36px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const FormField = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  margin-right: 10px;
  border-bottom: 1px solid #666666;

  &:last-child {
    margin-right: 0;
  }

  label {
    padding-left: 5px;
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    white-space: nowrap;
    color: #1c1c1c;
  }

  input,
  textarea {
    padding: 8px 8px 0px;
    border: none;
    border-radius: 4px;
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    color: #1c1c1c;
    width: 100%;
  }

  textarea {
    resize: vertical;
  }

  #cv {
    padding: 15px 0 20px;
  }
`;

export const SubmitButton = styled.button`
  background-color: #0044cc;
  color: white;
  padding: 16px 64px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: center;
  margin-bottom: 80px;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  text-transform: uppercase;

  &:hover {
    background-color: #003399;
  }
`;
