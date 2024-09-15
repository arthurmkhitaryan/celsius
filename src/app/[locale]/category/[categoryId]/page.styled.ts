'use client';

import styled from 'styled-components';

export const HeaderSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    position: relative;
`;

export const HeaderImage = styled.div`
    width: 100%;
    position: relative;

    img {
        width: 100%;
        height: auto;
    }

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #0044CC;
        opacity: 0.4;
        z-index: 1;
    }

    @media (max-width: 768px) {
        img {
            height: 500px;   
        }
    }
`;

export const SubImage = styled.div`
    position: absolute;
    top: 20%;
    z-index: 2;
    font-size: 72px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    margin: 0;
    
    img {
        width: 80px;
        height: 80px;
    }

    @media (max-width: 768px) {
        top: 5%;
        img {
            width: 50px;
            height: 50px;
        }
    }
`;

export const Title = styled.h1`
    position: absolute;
    top: 30%;
    z-index: 2;
    font-size: 72px;
    font-weight: 600;
    color: #fff;
    text-align: center;
    margin: 0;

    @media (max-width: 768px) {
        top: 20%;
        font-size: 32px;
    }
`;

export const DescriptionContainer = styled.div`
  margin-top: 40px;

  @media (max-width: 768px) {
      margin: 40px 15px 0 15px;
  }
`;

export const DescriptionTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: #1C1C1C;

  @media (max-width: 768px) {
      font-size: 24px;
  }
`;

export const Description = styled.p`
  margin: 20px 0;
  line-height: 30px;
  font-size: 16px;
  font-weight: 400;
  color: #4F4F4F;

  @media (max-width: 768px) {
      font-size: 12px;
  }
`;

export const ProductsSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    background-color: #ffffff;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

export const ProductCard = styled.div`
    width: 100%;
    display: flex;
    padding: 20px;
    margin-bottom: 40px;
    border-radius: 25px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    &:nth-child(odd) {
        flex-direction: row;
        background: linear-gradient(to right, #F2F6FD 45%, #ffffff 45%);
    }

    &:nth-child(even) {
        flex-direction: row-reverse;
        background: linear-gradient(to left, #F2F6FD 45%, #ffffff 45%);
    }

    @media (max-width: 768px) {
        flex-direction: column !important;
        background: none !important;
        padding: 0;
    }
`;

export const ProductImageWrapper = styled.div`
    flex-shrink: 0;
    position: relative;
    width: 45%;
    padding: 10px;
    display: flex;
    justify-content: center;
    img {
        width: auto;
        height: 300px;
    }

    @media (max-width: 768px) {
        width: 100%;
        background: #F2F6FD;
        border-radius: 25px 25px 0 0;
        img {
            height: 250px;
        }
    }
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 60px;

    @media (max-width: 768px) {
        text-align: center;
        margin: 25px 0;
    }
`;

export const ProductTitle = styled.h2`
    font-size: 1.75rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 30px;
`;

export const ProductDescription = styled.p`
    font-size: 1rem;
    color: #555;
    flex-grow: 1;

    @media (max-width: 768px) {
        margin-bottom: 30px;
    }
`;

export const ProductButton = styled.button`
    padding: 16px 60px 16px 60px;
    font-size: 14px;
    color: #fff;
    background-color: #0044CC;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    align-self: flex-end;

    @media (max-width: 768px) {
        align-self: center;

    }
`;
