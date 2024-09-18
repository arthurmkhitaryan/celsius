'use client';

import React from 'react';

// styles
import * as S from './Achievements.styled';
import { achievements } from '@/components/Achievements/mock/achievements';
import AchievementItem from '@/components/Achievements/Item';

function Achievements() {
  return (
    <S.AchievementsWrapper>
      {achievements.map((achievement) => (
        <AchievementItem
          key={achievement.id}
          image={achievement.image}
          title={achievement.title}
          description={achievement.description}
        />
      ))}
    </S.AchievementsWrapper>
  );
}

export default Achievements;
