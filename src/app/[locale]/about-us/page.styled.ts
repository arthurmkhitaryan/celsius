'use client';

import styled from 'styled-components';

export const AboutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .reviews {
    margin-top: 0;
  }
`;

export const OurStores = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 80px 0 20px;
`;

export const OurStoresTitle = styled.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: 38.4px;
  color: #1c1c1c;
`;

export const OurStoresDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  color: #4f4f4f;
`;

export const OurStoresItems = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 28px;
`;

export const OurStoresItem = styled.div`
  max-width: 550px;
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const OurStoresItemImage = styled.img`
  max-width: 550px;
  height: 360px;
  object-fit: cover;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  width: 100%;
`;

export const OurStoresItemContent = styled.div`
  margin-top: -5px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: #f2f2f2;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  gap: 8px;
`;

export const OurStoresItemInfo = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  color: #0d2427;
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

export const VideoThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  cursor: pointer;
`;

export const VideoThumbnail = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 50px;
  padding-left: 10px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-top: 120px;
`;

export const InfoTitle = styled.h3`
  font-size: 32px;
  font-weight: 500;
  line-height: 46px;
  padding: 0 80px;
  text-align: center;
  color: ${({ theme }) => theme.palette.common.mainBlue};
`;

export const InfoBlockContent = styled.div`
  display: flex;
  gap: 80px;
  justify-content: space-between;
  align-items: center;
`;

export const InfoBlockItemImage = styled.img``;

export const OurTeam = styled.div`
  width: 100%;
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`;

export const OurTeamWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
  max-width: 1140px;
  gap: 48px;

  & > :last-child {
    flex-direction: row-reverse;
  }
`;

export const OurTeamItem = styled.div`
  display: flex;
  gap: 48px;
`;

export const OurTeamContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const OurTeamTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 33.89px;
  color: #000;
`;

export const OurTeamDescription = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  color: #797979;
`;

export const OurTeamImage = styled.img`
  border-radius: 15px;
  max-width: 554px;
  width: 100%;
`;

export const WhoWeAre = styled.div`
  margin: 80px 0;
  display: flex;
  gap: 48px;
`;

export const WhoWeAreImage = styled.img`
  max-width: 480px;
  width: 100%;
`;

export const WhoWeAreContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 34px 0;
`;

export const WhoWeAreTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 25.2px;
  color: #000;
`;

export const WhoWeAreDescription = styled.div`
  & > p {
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    color: #1c1c1c;
  }

  & > h4 {
    & > :first-child {
      margin-right: 15px;
    }

    & > :last-child {
      margin-left: 15px;
    }

    margin: 0 12px;
    font-size: 20px;
    font-weight: 400;
    line-height: 36px;
    color: #1c1c1c;
  }
`;
