'use client';

import React, { useEffect, useState } from 'react';
import * as S from './page.styled';
import MainLayout from '@/components/Layout';
import { useRouter, useSearchParams } from 'next/navigation';
import AccountSettings from './account-settings';
import OrderHistory from './order-history';
import ProductList from '@/components/ProductList';
import Newsroom from '@/components/Newsroom';
import Achievements from '@/components/Achievements';
import { useAppSelector } from '@/store/hooks';
import { useTranslations } from 'next-intl';

export default function Profile() {
  const t = useTranslations('Account');
  const [activeMenu, setActiveMenu] = useState('account-settings');

  const user = useAppSelector((state) => state.auth.user);
  const navigation = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const activeSection = params.get('section');
    setActiveMenu(activeSection || 'account-settings');
  }, [params]);

  if (!user) {
    navigation.push('/');
    return null;
  }

  return (
    <MainLayout>
      <S.ProfileWrapper>
        <S.ProfileContainer>
          <S.Sidebar>
            <S.Username>
              {user.firstName} {user.lastName}
            </S.Username>
            <S.MenuItem
              active={activeMenu === 'account-settings'}
              onClick={() => setActiveMenu('account-settings')}
            >
              {t('settings.title')}
            </S.MenuItem>
            <S.MenuItem
              active={activeMenu === 'order-history'}
              onClick={() => setActiveMenu('order-history')}
            >
              {t('orders.title')}
            </S.MenuItem>
          </S.Sidebar>
          {activeMenu === 'account-settings' ? (
            <AccountSettings />
          ) : (
            <OrderHistory />
          )}
        </S.ProfileContainer>
        <ProductList />
        <Achievements />
        <Newsroom />
      </S.ProfileWrapper>
    </MainLayout>
  );
}
