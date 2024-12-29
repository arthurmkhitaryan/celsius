import styled from 'styled-components';

export const NewsSingleWrapper = styled.div`
  margin-top: 20px;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 700px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  height: 100%;
  margin: 80px 0;
  max-width: 1130px;

  h1,
  h2,
  h3 {
    font-size: 36px;
    font-weight: 600;
    line-height: 38.4px;
    color: #1c1c1c;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    color: #666666;
  }

  img {
    max-width: 1130px;
    width: 100%;
    border-radius: 15px;
    max-height: 420px;
  }
`;

export const Devider = styled.div`
  height: 2px;
  width: 100%;
  max-width: 1130px;
  background-color: #1f94d2;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  max-width: 1130px;
  margin-top: 32px;
  margin-bottom: 120px;
  gap: 2px;
`;

export const AuthorName = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  color: #969696;
`;

export const MainWrapper = styled.div`
  max-width: 1130px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 120px;
`;
