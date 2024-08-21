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
`;

export const DescriptionContainer = styled.div`
  margin-top: 40px;
`;

export const DescriptionTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: #1C1C1C;
`;

export const Description = styled.p`
  margin: 20px 0;
  line-height: 30px;
  font-size: 16px;
  font-weight: 400;
  color: #4F4F4F;
`;

export const ProductsSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    background-color: #ffffff;
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
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 60px;
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
`;
