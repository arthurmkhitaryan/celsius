import Link from 'next/link';
import styled from 'styled-components';

export const LoginFormWrapper = styled.div<{ visible: boolean }>`
  width: 380px;
  padding: 16px 40px 28px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background: radial-gradient(50% 50% at 50% 50%, #f2f6fd 0%, #e7eefb 100%);
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  position: absolute;
  top: 72px;
  right: -48px;
  z-index: 100;
`;

export const ArrowUp = styled.img`
  position: absolute;
  top: -32px;
  right: 30px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  line-height: 26px;
  color: ${({ theme }) => theme.palette.common.mainBlue};
  margin-bottom: 4px;
  position: relative;

  .close-button {
    position: absolute;
    top: -9px;
    right: -32px;
    cursor: pointer;
  }
`;

export const Description = styled.p`
  white-space: nowrap;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #969696;
  margin-bottom: 12px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  line-height: 30px;
  color: #0d2427;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  padding: 8px 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #0d2427;
  border: 1px solid #e2e5ea;
  border-radius: 66px;

  &[type='email'] {
    font-size: 14px;
    font-weight: 400;
  }

  &[type='password'] {
    font-size: 10px;
    font-weight: 400;
    position: relative;
  }

  &[type='password']::placeholder {
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    color: #969696;
    letter-spacing: 2px;
    position: absolute;
    top: 12px;
  }
`;

export const Error = styled.span`
  color: red;
  font-size: 12px;
`;

export const RememberMeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const Checkbox = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  margin-right: 10px;

  &:checked::before {
    content: '\\2714'; // Unicode for checkmark
    font-size: 16px;
    color: white;
    position: absolute;
    top: -2px;
    left: 1px;
  }

  &:checked {
    background-color: ${({ theme }) => theme.palette.common.mainBlue};
    border-color: ${({ theme }) => theme.palette.common.mainBlue};
  }
`;

export const RememberMeLabel = styled.label`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #969696;
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.palette.common.mainBlue};
  color: white;
  padding: 5px;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
`;

export const ForgetLink = styled(Link)`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ theme }) => theme.palette.common.mainBlue};
  text-decoration: none;
  text-align: center;
  margin: 12px 0;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.common.mainBlue};
`;

export const NewHereText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #0d2427;
  text-align: center;
  margin-bottom: 12px;
`;

export const GoToRegister = styled.button`
  font-size: 16px;
  font-weight: 600;
  line-height: 30px;
  color: ${({ theme }) => theme.palette.common.mainBlue};
  background-color: transparent;
  padding: 5px;
  border: 2px solid ${({ theme }) => theme.palette.common.mainBlue};
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
`;
