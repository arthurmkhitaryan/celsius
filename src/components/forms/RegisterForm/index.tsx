'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as S from './RegisterForm.styled';
import { useRegisterMutation } from '@/features';
import { Register } from '@/features/auth/auth.types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormState } from '@/components/FormState';
import { default as FormStateModal } from '@/components/shared/Modal';
import { useTranslation } from 'next-i18next';
import { useTranslations } from 'use-intl';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Register>();
  const t = useTranslations("SignUp");
  const [registerUser, { isLoading }] = useRegisterMutation();
  const [isFormStateOpen, setIsFormStateOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit: SubmitHandler<Register> = async (data) => {
    try {
      const response = await registerUser(data).unwrap();
      if (response.data) {
        setIsError(false); // No error, successful registration
      }
    } catch (error: any) {
      setIsError(true); // Show error state
      const errors = error?.data?.error?.error?.details?.errors.map(
        (err: any) => ({
          name: err.path[0],
          message: err.message,
        }),
      );
      errors?.forEach((element: any) => {
        setError(element.name, {
          message: element.message,
        });
      });
    } finally {
      setIsFormStateOpen(true); // Open the FormState modal
    }
  };

  return (
    <>
      <S.RegisterFormWrapper>
        <S.Title>{t("labels.create")}</S.Title>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.FormContent>
            {/* First Name */}
            <S.InputWrapper>
              <S.Label>
                {t("labels.first_name")}<span>*</span>
              </S.Label>
              <S.Input
                {...register('firstName', { required: true })}
                error={!!errors.firstName}
              />
              {errors.firstName && <S.Error>This field is required</S.Error>}
            </S.InputWrapper>

            {/* Last Name */}
            <S.InputWrapper>
              <S.Label>
                {t("labels.last_name")}<span>*</span>
              </S.Label>
              <S.Input
                {...register('lastName', { required: true })}
                error={!!errors.lastName}
              />
              {errors.lastName && <S.Error>This field is required</S.Error>}
            </S.InputWrapper>

            {/* Password */}
            <S.InputWrapper>
              <S.Label>
                {t("labels.password")}<span>*</span>
              </S.Label>
              <S.Input
                type="password"
                {...register('password', { required: true })}
                error={!!errors.password}
              />
              {errors.password && <S.Error>This field is required</S.Error>}
            </S.InputWrapper>

            {/* Repeat Password */}
            <S.InputWrapper>
              <S.Label>
                {t("labels.confirm_password")}<span>*</span>
              </S.Label>
              <S.Input
                type="password"
                {...register('password', { required: true })}
                error={!!errors.password}
              />
              {errors.password && <S.Error>This field is required</S.Error>}
            </S.InputWrapper>

            {/* Email */}
            <S.InputWrapper>
              <S.Label>
                {t("labels.email")}<span>*</span>
              </S.Label>
              <S.Input
                type="email"
                {...register('email', { required: true })}
                error={!!errors.email}
              />
              {errors.email && (
                <S.Error>
                  {errors.email.message || 'This field is required'}
                </S.Error>
              )}
            </S.InputWrapper>

            {/* Phone Number */}
            <S.InputWrapper>
              <S.Label>
                {t("labels.phone")}<span>*</span>
              </S.Label>
              <S.Input
                {...register('phoneNumber', { required: true })}
                error={!!errors.phoneNumber}
              />
              {errors.phoneNumber && (
                <S.Error>
                  {errors.phoneNumber.message || 'This field is required'}
                </S.Error>
              )}
            </S.InputWrapper>

            {/* City */}
            <S.InputWrapper>
              <S.Label>
                {t("labels.city")}<span>*</span>
              </S.Label>
              <S.Input
                {...register('city', { required: true })}
                error={!!errors.city}
              />
              {errors.city && <S.Error>This field is required</S.Error>}
            </S.InputWrapper>

            {/* Postcode */}
            <S.InputWrapper>
              <S.Label>
                {t("labels.code")}<span>*</span>
              </S.Label>
              <S.Input
                {...register('postcode', { required: true })}
                error={!!errors.postcode}
              />
              {errors.postcode && <S.Error>This field is required</S.Error>}
            </S.InputWrapper>

            {/* Street Address */}
            <S.InputWrapper>
              <S.Label>
                {t("labels.street")}<span>*</span>
              </S.Label>
              <S.Input
                {...register('streetAddress', { required: true })}
                error={!!errors.streetAddress}
              />
              {errors.streetAddress && (
                <S.Error>This field is required</S.Error>
              )}
            </S.InputWrapper>

            {/* House/Flat Number */}
            <S.InputWrapper>
              <S.Label>
                {t("labels.house")}<span>*</span>
              </S.Label>
              <S.Input
                {...register('houseFlatNumber', { required: true })}
                error={!!errors.houseFlatNumber}
              />
              {errors.houseFlatNumber && (
                <S.Error>This field is required</S.Error>
              )}
            </S.InputWrapper>
          </S.FormContent>

          <S.SubmitButton type="submit" disabled={isLoading}>
            {t("labels.register")}
          </S.SubmitButton>
          <S.AlreadyHaveAccount>
            <S.Text>
              {t("labels.already_have")} <Link href={'/'}>{t("labels.sign_in")}</Link>
            </S.Text>
          </S.AlreadyHaveAccount>
        </S.Form>
      </S.RegisterFormWrapper>

      {/* FormState Modal */}
      <FormStateModal isOpen={isFormStateOpen}>
        <FormState
          isError={isError}
          withSuccessText={!isError}
          closeModal={() => setIsFormStateOpen(false)}
        />
      </FormStateModal>
    </>
  );
}
