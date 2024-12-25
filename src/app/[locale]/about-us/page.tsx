'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useGetAboutContentQuery } from '@/features/about/about.api';
import MainLayout from '@/components/Layout';
import Newsroom from '@/components/Newsroom';
import Reviews from '@/components/Reviews';
import Achievements from '@/components/Achievements';

// styles & images
import * as S from './page.styled';
import MideaLogo from '@/public/images/about/midea.png';
import ClivetLogo from '@/public/images/about/clivet.png';
import { getImageUrl } from '@/utils/getImageFullUrl';
import { useParams } from 'next/navigation';

export default function About() {
  const { locale } = useParams();
  const t = useTranslations('About');
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = document.getElementById('about-video') as HTMLVideoElement;
    if (video) {
      video.play();
      setIsPlaying(true);
    }
  };

  const { data, isLoading } = useGetAboutContentQuery({
    locale: locale as string,
  });

  if (isLoading) return;

  return (
    <S.AboutWrapper>
      <S.VideoWrapper>
        {!isPlaying && (
          <S.VideoThumbnailWrapper>
            <S.VideoThumbnail
              src="/images/video-thumbnail.jpg"
              alt="Video Thumbnail"
            />
            <S.PlayButton onClick={handlePlay}>▶</S.PlayButton>
          </S.VideoThumbnailWrapper>
        )}
        <S.Video
          id="about-video"
          src="/video/about.mp4"
          controls={isPlaying}
          style={{
            display: isPlaying ? 'block' : 'none',
          }}
        />
      </S.VideoWrapper>
      <S.OurTeam>
        <S.OurTeamWrapper>
          {data?.ourTeam.ourTeamItem.map((item) => (
            <S.OurTeamItem key={item.id}>
              <S.OurTeamContent>
                <S.OurTeamTitle>{item.title}</S.OurTeamTitle>
                <S.OurTeamDescription
                  dangerouslySetInnerHTML={{ __html: item.description || '' }}
                />
              </S.OurTeamContent>
              <S.OurTeamImage src={getImageUrl(item.image)} />
            </S.OurTeamItem>
          ))}
        </S.OurTeamWrapper>
      </S.OurTeam>
      <MainLayout>
        {/* <S.WhoWeAre>
          <S.WhoWeAreImage src={getImageUrl(data?.whoWeAre.image)} />
          <S.WhoWeAreContent>
            <S.WhoWeAreTitle>{data?.whoWeAre.title}</S.WhoWeAreTitle>
            <S.WhoWeAreDescription
              dangerouslySetInnerHTML={{ __html: data?.whoWeAre.content || '' }}
            />
          </S.WhoWeAreContent>
        </S.WhoWeAre> */}
        <S.InfoBlock>
          <S.InfoTitle>{t('about_info_title')}</S.InfoTitle>
          <S.InfoBlockContent>
            <S.InfoBlockItemImage src={MideaLogo.src} alt={'midea'} />
            <S.InfoBlockItemImage src={ClivetLogo.src} alt={'clivet'} />
          </S.InfoBlockContent>
        </S.InfoBlock>
      </MainLayout>
      <MainLayout>
        <S.OurStores>
          <S.OurStoresTitle>{data?.ourStores.title}</S.OurStoresTitle>
          <S.OurStoresDescription
            dangerouslySetInnerHTML={{
              __html: data?.ourStores.description || '',
            }}
          />
          <S.OurStoresItems>
            {data?.ourStores.OurStoresItem.map((item) => (
              <S.OurStoresItem key={item.id}>
                <S.OurStoresItemImage
                  src={getImageUrl(item.image)}
                  alt={'store'}
                />
                <S.OurStoresItemContent>
                  <S.OurStoresItemInfo>
                    Address: {item.address}
                  </S.OurStoresItemInfo>
                  <S.OurStoresItemInfo>Phone: {item.phone}</S.OurStoresItemInfo>
                </S.OurStoresItemContent>
              </S.OurStoresItem>
            ))}
          </S.OurStoresItems>
        </S.OurStores>
      </MainLayout>
      <MainLayout>
        <Achievements />
      </MainLayout>
      <Reviews />
      <MainLayout>
        <Newsroom />
      </MainLayout>
    </S.AboutWrapper>
  );
}
