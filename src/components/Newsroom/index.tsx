'use client';

import React from 'react';
import NewsroomItem from '@/components/Newsroom/NewsroomItem';

// styles & images
import * as S from './Newsroom.styled';
import blogImg1 from '@/public/images/home/newsroom/blog-img-1.jpg';
import blogImg2 from '@/public/images/home/newsroom/blog-img-2.jpg';
import blogImg3 from '@/public/images/home/newsroom/blog-img-3.jpg';
import { ChevronRight } from 'lucide-react';

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

function Newsroom() {
  return (
    <S.NewsroomWrapper>
      <S.NewsroomTitle>Newsroom</S.NewsroomTitle>
      <S.NewsroomContent>
        <S.NewsroomList>
          {newsroomData.map((item) => (
            <NewsroomItem
              key={item.id}
              date={item.date}
              image={item.image}
              description={item.description}
            />
          ))}
        </S.NewsroomList>
      </S.NewsroomContent>
      <S.SeeAllButton>
        See All <ChevronRight size={24} />
      </S.SeeAllButton>
    </S.NewsroomWrapper>
  );
}

export default Newsroom;
