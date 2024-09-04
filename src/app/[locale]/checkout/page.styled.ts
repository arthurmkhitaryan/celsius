import styled from 'styled-components';

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1140px;
    margin: 40px auto;
`;

export const Title = styled.h2`
    font-size: 24px;
    font-weight: 600;
    color: #0D2427;
`

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
        color: #0D2427;
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
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const Button = styled.button`
    width: 300px;
    padding: 16px 96px 16px 96px;
    background-color: #0044CC;
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
`;
