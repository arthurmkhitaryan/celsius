import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1140px;
  margin: 40px auto;

  @media (max-width: 768px) {
    margin: 20px auto;
    padding: 0 20px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #0d2427;
`;

export const BillingSection = styled.div`
  margin: 30px 0;
  background-color: #f2f6fd;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #d1d9e6;
  padding: 40px;
`;

export const PaymentSection = styled.div`
  margin-top: 30px;
  background-color: #f2f6fd;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #d1d9e6;
  padding: 40px;

  h2 {
    font-size: 22px;
    font-weight: 700;
    color: #333;
    margin-bottom: 20px;
  }
`;

export const SelectField = styled.select`
  width: 100%;
  padding: 12px 35px 12px 15px; /* Add padding to the right to make room for arrow */
  border-radius: 23px;
  border: 1px solid #d1d9e6;
  font-size: 15px;
  background-color: #ffffff;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  background: #ffffff
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none"><path d="M7.99997 9.56023C7.71322 9.56023 7.4265 9.45074 7.20788 9.23222L0.328227 2.3525C-0.109409 1.91486 -0.109409 1.20531 0.328227 0.767852C0.765686 0.330394 1.4751 0.330394 1.91277 0.767852L7.99997 6.85541L14.0872 0.768065C14.5249 0.330606 15.2342 0.330606 15.6716 0.768065C16.1095 1.20552 16.1095 1.91508 15.6716 2.35271L8.79207 9.23244C8.57334 9.45099 8.28662 9.56023 7.99997 9.56023Z" fill="%231C1C1C"/></svg>')
    no-repeat right 10px center;
  background-size: 16px;
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 12px;

  &:focus {
    border-color: #0069d9;
    outline: none;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;

  label {
    font-size: 14px;
    margin-bottom: 5px;
    font-weight: 500;
    color: #0d2427;
  }

  input {
    width: 100%;
    padding: 12px;
    border-radius: 23px;
    border: 1px solid #d1d9e6;
    font-size: 15px;
    background-color: #ffffff;

    &:focus {
      border-color: #0069d9;
      outline: none;
    }

    &::placeholder {
      color: #999;
    }
  }

  textarea {
    width: 100%;
    padding: 12px;
    border-radius: 23px;
    border: 1px solid #d1d9e6;
    font-size: 15px;
    background-color: #ffffff;
    min-height: 100px;

    &:focus {
      border-color: #0069d9;
      outline: none;
    }

    &::placeholder {
      color: #999;
    }
  }
`;

export const TwoColumnRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;

  & > div {
    width: 48%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    & > div {
      width: 100%;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  width: 300px;
  padding: 16px 96px 16px 96px;
  background-color: #0044cc;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 16px;
    width: 100%;
  }
`;

export const CreditCardSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  gap: 50px;

  img {
    height: 18px;
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    gap: 20px;
    margin-bottom: 30px;

    span {
      white-space: nowrap;
    }

    & > div {
      display: flex;
    }
  }
`;
