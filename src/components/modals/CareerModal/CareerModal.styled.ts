'use client';

import styled from 'styled-components';

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.palette.common.secondaryBlue};
  padding-bottom: 40px;
  margin-bottom: 64px;
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
  max-height: 70vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
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
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const FormField = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }

  label {
    margin-bottom: 5px;
  }

  input,
  textarea {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
  }

  textarea {
    resize: vertical;
  }
`;

export const SubmitButton = styled.button`
  background-color: #0044cc;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  align-self: flex-end;

  &:hover {
    background-color: #003399;
  }
`;
