'use client';

import React from 'react';

// styles
import * as S from './Achievements.styled';
import { achievements } from '@/components/Achievements/mock/achievements';
import AchievementItem from '@/components/Achievements/Item';
import { useTranslations } from 'next-intl';

function Achievements() {
  const t = useTranslations("Home");

  return (
    <S.AchievementsWrapper>
      {achievements.map((achievement) => (
        <AchievementItem
          key={achievement.id}
          image={achievement.image}
          title={t(`benefits.${achievement.id}.title`)}
          description={t(`benefits.${achievement.id}.description`)}
        />
      ))}
    </S.AchievementsWrapper>
  );
}

export default Achievements;
