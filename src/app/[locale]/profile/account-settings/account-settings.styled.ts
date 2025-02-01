import styled from 'styled-components';

export const SettingsForm = styled.div`
  flex: 0 0 75%;
  max-width: 75%;
  padding-left: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0;
  }
`;

export const FormTitle = styled.h3`
  font-size: 22px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #f2f6fd;
  font-weight: 400;
  color: #1c1c1c;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const InputWrapper = styled.div`
  flex: 0 0 48%;
  max-width: 48%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex: auto;
    max-width: 100%;
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }
`;

export const Label = styled.label`
  font-size: 20px;
  margin-bottom: 8px;
  line-height: 30px;
  color: #0d2427;
  font-weight: 400;
  &::after {
    content: '*';
    color: #0044cc;
    margin-left: 5px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Input = styled.input`
  padding: 8px 32px 8px 32px;
  border: 1px solid #ddd;
  border-radius: 23px;
  font-size: 16px;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-content: center;
  }
`;

export const CancelButton = styled.button`
  background-color: white;
  color: #000;
  padding: 16px 50px 16px 96px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  @media (max-width: 768px) {
    padding: 16px 50px 16px 50px;
  }
`;

export const SaveButton = styled.button`
  background-color: #0044cc;
  color: #fff;
  padding: 16px 96px 16px 96px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;
