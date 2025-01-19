import styled from 'styled-components';

export const ContactUsWrapper = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  max-width: 1140px;
  margin: 40px auto;
`;

export const Header = styled.header`
  margin: 10px 0;
  h1 {
    font-size: 48px;
    color: #1c1c1c;
    font-weight: 600;
  }

  h2 {
    font-size: 32px;
    color: #0044cc;
    font-weight: 700;
  }
`;

export const Error = styled.p`
  color: red;
  font-size: 14px;
  padding-top: 8px;
  margin-left: 25px;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Form = styled.form`
  margin: 30px 0;
  background-color: #f2f6fd;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #d1d9e6;
  padding: 40px;
  display: flex;
  flex-direction: column;
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  width: 365px;
  padding: 16px 96px 16px 96px;
  background-color: #0044cc;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
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
`;

export const HeaderImage = styled.div`
  width: 100%;
  position: relative;

  img {
    width: 100%;
    max-height: 820px;
    object-fit: cover;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #0044cc;
    opacity: 0.6;
  }
`;

export const HeaderText = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;

  h1 {
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 30px;
  }

  span {
    display: block;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    font-weight: 400;
    color: #f2f2f2;
    width: 700px;
  }
`;

export const BannerImage = styled.div`
  width: 100%;

  img {
    width: 100%;
    max-height: 620px;
    object-fit: cover;
  }
`;

export const InfoSection = styled.section`
  background-color: #f7f7f7;
  max-height: 1150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 150px 0;
`;

export const InfoBlock = styled.div`
  display: block;
  padding: 60px 0;
`;

export const InfoTitle = styled.h2`
  font-size: 48px;
  font-weight: 600;
  color: #1c1c1c;
  margin-bottom: 20px;
  align-self: flex-start;
`;

export const InfoText = styled.p`
  font-size: 16px;
  color: #4f4f4f;
  max-width: 1150px;
  margin: 20px 0;
  line-height: 30px;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  max-width: 1150px;
`;

export const InfoCard = styled.div`
  background-color: #fff;
  padding: 24px 24px 32px 24px;
  border-radius: 15px;
  box-shadow: 4px 4px 20px 0 rgba(31, 148, 210, 0.2);
  flex: 1;
  text-align: left;

  h3 {
    font-size: 36px;
    font-weight: 600;
    color: #0044cc;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #1c1c1c;
    line-height: 30px;
    margin-bottom: 10px;
  }
`;
