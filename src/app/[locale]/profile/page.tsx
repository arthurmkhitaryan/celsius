'use client'

import React, { useState } from "react";
import * as S from "./page.styled";
import MainLayout from '@/components/Layout';
import { useRouter } from 'next/navigation';
import AccountSettings from "./account-settings";
import OrderHistory from "./order-history";
import ProductList from '@/components/ProductList';
import Newsroom from '@/components/Newsroom';
import Achievements from '@/components/Achievements';
import { useAppSelector } from '@/store/hooks';

export default function Profile() {
    const user = useAppSelector((state) => state.auth.user);
    const navigation = useRouter();

    // if (!user) {
    //     navigation.push('/');
    //     return null;
    // }

    const [activeMenu, setActiveMenu] = useState("account-settings");

    return (
      <MainLayout>
          <S.ProfileWrapper>
              <S.ProfileContainer>
                  <S.Sidebar>
                      <S.Username>Username</S.Username>
                      <S.MenuItem
                        active={activeMenu === "account-settings"}
                        onClick={() => setActiveMenu("account-settings")}
                      >
                          Account Settings
                      </S.MenuItem>
                      <S.MenuItem
                        active={activeMenu === "order-history"}
                        onClick={() => setActiveMenu("order-history")}
                      >
                          Order History
                      </S.MenuItem>
                  </S.Sidebar>
                  {activeMenu === "account-settings" ? <AccountSettings /> : <OrderHistory />}
              </S.ProfileContainer>
              <ProductList />
              <Achievements />
              <Newsroom />
          </S.ProfileWrapper>
      </MainLayout>
    );
}
