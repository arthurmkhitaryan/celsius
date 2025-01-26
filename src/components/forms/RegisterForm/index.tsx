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

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Register>();
  const [registerUser, { isLoading }] = useRegisterMutation();
  const [isFormStateOpen, setIsFormStateOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const router = useRouter();

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
        <S.Title>Create an account</S.Title>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.FormContent>
            {/* First Name */}
            <S.InputWrapper>
              <S.Label>
                First Name<span>*</span>
              </S.Label>
              <S.Input
                {...register('firstName', { required: true })}
                placeholder="Enter your first name"
                error={!!errors.firstName}
              />
              {errors.firstName && <S.Error>This field is required</S.Error>}
            </S.InputWrapper>

            {/* Last Name */}
            <S.InputWrapper>
              <S.Label>
                Last Name<span>*</span>
              </S.Label>
              <S.Input
                {...register('lastName', { required: true })}
                placeholder="Enter your last name"
                error={!!errors.lastName}
              />
              {errors.lastName && <S.Error>This field is required</S.Error>}
            </S.InputWrapper>

            {/* Password */}
            <S.InputWrapper>
              <S.Label>
                Password<span>*</span>
              </S.Label>
              <S.Input
                type="password"
                {...register('password', { required: true })}
                placeholder="Enter your password"
                error={!!errors.password}
              />
              {errors.password && <S.Error>This field is required</S.Error>}
            </S.InputWrapper>

            {/* Repeat Password */}
            <S.InputWrapper>
              <S.Label>
                Repeat Password<span>*</span>
              </S.Label>
              <S.Input
                type="password"
                {...register('password', { required: true })}
                placeholder="Repeat your password"
                error={!!errors.password}
              />
              {errors.password && <S.Error>This field is required</S.Error>}
            </S.InputWrapper>

            {/* Email */}
            <S.InputWrapper>
              <S.Label>
                Email<span>*</span>
              </S.Label>
              <S.Input
                type="email"
                {...register('email', { required: true })}
                placeholder="Enter your email"
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
                Phone Number<span>*</span>
              </S.Label>
              <S.Input
                {...register('phoneNumber', { required: true })}
                placeholder="Enter your phone number"
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
                City<span>*</span>
              </S.Label>
              <S.Input
                {...register('city', { required: true })}
                placeholder="Enter your city"
                error={!!errors.city}
              />
              {errors.city && <S.Error>This field is required</S.Error>}
            </S.InputWrapper>

            {/* Postcode */}
            <S.InputWrapper>
              <S.Label>
                Postcode<span>*</span>
              </S.Label>
              <S.Input
                {...register('postcode', { required: true })}
                placeholder="Enter your postcode"
                error={!!errors.postcode}
              />
              {errors.postcode && <S.Error>This field is required</S.Error>}
            </S.InputWrapper>

            {/* Street Address */}
            <S.InputWrapper>
              <S.Label>
                Street Address<span>*</span>
              </S.Label>
              <S.Input
                {...register('streetAddress', { required: true })}
                placeholder="Enter your address"
                error={!!errors.streetAddress}
              />
              {errors.streetAddress && (
                <S.Error>This field is required</S.Error>
              )}
            </S.InputWrapper>

            {/* House/Flat Number */}
            <S.InputWrapper>
              <S.Label>
                House/Flat Number<span>*</span>
              </S.Label>
              <S.Input
                {...register('houseFlatNumber', { required: true })}
                placeholder="Enter your house/flat N"
                error={!!errors.houseFlatNumber}
              />
              {errors.houseFlatNumber && (
                <S.Error>This field is required</S.Error>
              )}
            </S.InputWrapper>
          </S.FormContent>

          <S.SubmitButton type="submit" disabled={isLoading}>
            Register
          </S.SubmitButton>
          <S.AlreadyHaveAccount>
            <S.Text>
              Already have an Account? <Link href={'/'}>Sign In</Link>
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
