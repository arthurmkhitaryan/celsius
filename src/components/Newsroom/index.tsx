'use client';

import React from 'react';
import NewsroomItem from '@/components/Newsroom/NewsroomItem';

// styles & images
import * as S from './Newsroom.styled';
import blogImg1 from '@/public/images/home/newsroom/blog-img-1.jpg';
import blogImg2 from '@/public/images/home/newsroom/blog-img-2.jpg';
import blogImg3 from '@/public/images/home/newsroom/blog-img-3.jpg';
import { ChevronRight, Router } from 'lucide-react';
import { useGetNewsQuery } from '@/features/newsroom/newsroom.api';
import { useParams } from 'next/navigation';
import { getImageUrl } from '@/utils/getImageFullUrl';
import { useRouter } from 'next/navigation';

const newsroomData = [
  {
    id: 1,
    image: blogImg1.src,
    date: '02.12.2022',
    description:
      'ChatGPT, the AI Revolution, and the Security, Privacy and Ethical Implications',
  },
  {
    id: 2,
    image: blogImg2.src,
    date: '02.12.2022',
    description:
      'ChatGPT, the AI Revolution, and the Security, Privacy and Ethical Implications',
  },
  {
    id: 3,
    image: blogImg3.src,
    date: '02.12.2022',
    description:
      'ChatGPT, the AI Revolution, and the Security, Privacy and Ethical Implications',
  },
];

function Newsroom({ className }: { className?: string }) {
  const { locale } = useParams();
  const router = useRouter();

  const { data } = useGetNewsQuery({
    locale: locale.toString(),
    page: 1,
    pageSize: 3,
  });

  const handleNavigateToNewsroom = () => {
    router.push('/newsroom');
  };

  const handleClickItem = (itemId: string | number) => {
    router.push(`/newsroom/${itemId}`);
  };

  return (
    <S.NewsroomWrapper className={className}>
      <S.NewsroomTitle>Newsroom</S.NewsroomTitle>
      <S.NewsroomContent>
        <S.NewsroomList>
          {data?.data.map((item) => (
            <NewsroomItem
              onClick={() => handleClickItem(item.id)}
              key={item.id}
              date={item.publishedAt}
              image={getImageUrl(item.smallImage)}
              description={item.smallDescription}
            />
          ))}
        </S.NewsroomList>
      </S.NewsroomContent>
      <S.SeeAllButton onClick={handleNavigateToNewsroom}>
        See All <ChevronRight size={24} />
      </S.SeeAllButton>
    </S.NewsroomWrapper>
  );
}

export default Newsroom;
