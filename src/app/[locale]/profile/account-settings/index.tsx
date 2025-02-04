import React, { useState } from 'react';
import * as S from './account-settings.styled';
import { useAppSelector } from '@/store/hooks';
import { User } from '@/features';
import { UserService } from '@/services/userService';
import { getCookie } from 'cookies-next';
import { useTranslations } from 'next-intl';

const AccountSettings = () => {
  const t = useTranslations('Account');
  const user = (useAppSelector((state) => state.auth.user) as User) || {};
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    city: user.city,
    postcode: user.postcode,
    streetAddress: user.streetAddress,
    houseFlatNumber: user.houseFlatNumber,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = getCookie('access_token');

    if (!token) {
      return null;
    }

    await UserService.updateUser(user.id, formData, token);

    window.location.reload();
  };

  return (
    <S.SettingsForm onSubmit={handleSubmit}>
      <S.FormTitle>{t('settings.title')}</S.FormTitle>
      <S.Form>
        <S.InputWrapper>
          <S.Label>{t('settings.inputs.first_name')}</S.Label>
          <S.Input
            type="text"
            name="firstName"
            placeholder="John"
            value={formData.firstName}
            onChange={handleChange}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>{t('settings.inputs.last_name')}</S.Label>
          <S.Input
            type="text"
            name="lastName"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleChange}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>{t('settings.inputs.email')}</S.Label>
          <S.Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>{t('settings.inputs.phone')}</S.Label>
          <S.Input
            type="text"
            name="phoneNumber"
            placeholder="+374 55 55 55 55"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>{t('settings.inputs.city')}</S.Label>
          <S.Input
            type="text"
            name="city"
            placeholder="Yerevan"
            value={formData.city}
            onChange={handleChange}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>{t('settings.inputs.code')}</S.Label>
          <S.Input
            type="text"
            name="postcode"
            placeholder="04851"
            value={formData.postcode}
            onChange={handleChange}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>{t('settings.inputs.street')}</S.Label>
          <S.Input
            type="text"
            name="streetAddress"
            placeholder="Street Address"
            value={formData.streetAddress}
            onChange={handleChange}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>{t('settings.inputs.house')}</S.Label>
          <S.Input
            type="text"
            name="houseFlatNumber"
            placeholder="48/2"
            value={formData.houseFlatNumber}
            onChange={handleChange}
          />
        </S.InputWrapper>
        <S.ButtonsWrapper>
          <S.CancelButton type="button">
            {t('settings.inputs.cancel')}
          </S.CancelButton>
          <S.SaveButton type="submit">{t('settings.inputs.save')}</S.SaveButton>
        </S.ButtonsWrapper>
      </S.Form>
    </S.SettingsForm>
  );
};

export default AccountSettings;
