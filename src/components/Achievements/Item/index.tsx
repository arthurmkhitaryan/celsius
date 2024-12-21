'use client';

import React from 'react';

// styles
import * as S from './AchievementItem.styled';
import Image from 'next/image';

interface AchievementItemProps {
  image: string;
  title: string;
  description: string;
}

function AchievementItem({ title, description, image }: AchievementItemProps) {
  return (
    <S.AchievementItemWrapper>
      <S.AchievementItemIconWrapper>
        <div>
          <Image src={image} alt="Achievement image" fetchPriority="high" />
        </div>
      </S.AchievementItemIconWrapper>
      <S.AchievementItemTitle>{title}</S.AchievementItemTitle>
    </S.AchievementItemWrapper>
  );
}

export default AchievementItem;
