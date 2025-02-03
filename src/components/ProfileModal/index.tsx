'use client';

import React, { Dispatch, SetStateAction } from 'react';
import * as S from './ProfileModal.styled';
import ArrowUpLogin from '@/public/images/login/arrow-up.png';
import { X } from 'lucide-react';
import { useAppDispatch } from '@/store/hooks';
import { logout } from '@/features';
import { setCookie } from 'cookies-next';
import { useTranslations } from 'next-intl';

interface ModalProps {
  userName: string;
  visible: boolean;
  onChangeVisibility: Dispatch<SetStateAction<boolean>>;
}

export default function ProfileModal({
  userName,
  visible = false,
  onChangeVisibility,
}: ModalProps) {
  const t = useTranslations('Profile');
  const dispatch = useAppDispatch();
  const handleClose = () => {
    onChangeVisibility(false);
  };

  const handleLogOut = () => {
    dispatch(logout());
    setCookie('access_token', null);
    window.location.reload();
  };

  return (
    <S.LoginFormWrapper $visible={visible}>
      <S.Title>
        <S.ArrowUp src={ArrowUpLogin.src} />
        <X
          className="close-button"
          size={28}
          onClick={handleClose}
          color="#797979"
        />
      </S.Title>
      <S.Container>
        <S.Text>{userName}</S.Text>
        <S.List>
          <S.ListItem
            href="/profile?section=account-settings"
            onClick={handleClose}
          >
            {t('modal.account')}
          </S.ListItem>
          <S.ListItem
            href="/profile?section=order-history"
            onClick={handleClose}
          >
            {t('modal.orders')}
          </S.ListItem>
          <S.ListItem href="#" onClick={handleLogOut}>
            {t('modal.log_out')}
          </S.ListItem>
        </S.List>
      </S.Container>
    </S.LoginFormWrapper>
  );
}
