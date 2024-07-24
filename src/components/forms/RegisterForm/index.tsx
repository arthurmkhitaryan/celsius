'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as S from './RegisterForm.styled';
import { useRegisterMutation } from '@/features';
import { Register } from '@/features/auth/auth.types';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Register>();
  const [registerUser, { isLoading }] = useRegisterMutation();

  const onSubmit: SubmitHandler<Register> = async (data) => {
    try {
      const response = await registerUser(data).unwrap();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.RegisterFormWrapper>
      <S.Title>Register Form</S.Title>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.InputWrapper>
          <S.Label>First Name</S.Label>
          <S.Input {...register('firstName', { required: true })} />
          {errors.firstName && <S.Error>This field is required</S.Error>}
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>Last Name</S.Label>
          <S.Input {...register('lastName', { required: true })} />
          {errors.lastName && <S.Error>This field is required</S.Error>}
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>Email</S.Label>
          <S.Input type="email" {...register('email', { required: true })} />
          {errors.email && <S.Error>This field is required</S.Error>}
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>Password</S.Label>
          <S.Input
            type="password"
            {...register('password', { required: true })}
          />
          {errors.password && <S.Error>This field is required</S.Error>}
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>Phone Number</S.Label>
          <S.Input {...register('phoneNumber', { required: true })} />
          {errors.phoneNumber && <S.Error>This field is required</S.Error>}
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>City</S.Label>
          <S.Input {...register('city', { required: true })} />
          {errors.city && <S.Error>This field is required</S.Error>}
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>Postcode</S.Label>
          <S.Input {...register('postcode', { required: true })} />
          {errors.postcode && <S.Error>This field is required</S.Error>}
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>Street Address</S.Label>
          <S.Input {...register('streetAddress', { required: true })} />
          {errors.streetAddress && <S.Error>This field is required</S.Error>}
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>House/Flat Number</S.Label>
          <S.Input {...register('houseFlatNumber', { required: true })} />
          {errors.houseFlatNumber && <S.Error>This field is required</S.Error>}
        </S.InputWrapper>

        <S.SubmitButton type="submit" disabled={isLoading}>
          Register
        </S.SubmitButton>
      </S.Form>
    </S.RegisterFormWrapper>
  );
}
