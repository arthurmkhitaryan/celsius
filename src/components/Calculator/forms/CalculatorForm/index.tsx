'use client';

import React from 'react';
import Button from '@/components/shared/Button';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import * as S from './CalculatorForm.styled';
import { useTranslations } from 'next-intl';

type CalculatorFormValues = {
  name: string;
  phoneNumber: string;
  email: string;
  option1: string; // Новое поле для первого селекта
  option2: string; // Новое поле для второго селекта
};

function CalculatorForm() {
  const t = useTranslations('Home');
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CalculatorFormValues>();

  const onSubmit: SubmitHandler<CalculatorFormValues> = (data) => {
    console.log(data);
  };

  return (
    <S.CalculatorForm onSubmit={handleSubmit(onSubmit)}>
      <S.CalculatorFormDetailUserData>
        <S.CalculatorFormDetailUser>
          <S.CalculatorFormLabel className="label">
            {t('calculator.fields.name')}
            <S.RequiredSign>*</S.RequiredSign>
          </S.CalculatorFormLabel>
          <S.CalculatorFormInput
            type="text"
            placeholder="Enter your name"
            {...register('name', { required: true })}
          />
          {errors.name && (
            <S.CalculatorFormError>
              This field is required
            </S.CalculatorFormError>
          )}
        </S.CalculatorFormDetailUser>
        <S.CalculatorFormDetailUser>
          <S.CalculatorFormLabel className="label">
            {t('calculator.fields.phone')}
            <S.RequiredSign>*</S.RequiredSign>
          </S.CalculatorFormLabel>
          <S.CalculatorFormInput
            type="tel"
            placeholder="Enter your phone number"
            {...register('phoneNumber', { required: true })}
          />
          {errors.phoneNumber && (
            <S.CalculatorFormError>
              This field is required
            </S.CalculatorFormError>
          )}
        </S.CalculatorFormDetailUser>
        <S.CalculatorFormDetailUser>
          <S.CalculatorFormLabel className="label">
            {t('calculator.fields.email')}
            <S.RequiredSign>*</S.RequiredSign>
          </S.CalculatorFormLabel>
          <S.CalculatorFormInput
            type="email"
            placeholder="Enter your email"
            {...register('email', { required: true })}
          />
          {errors.phoneNumber && (
            <S.CalculatorFormError>
              This field is required
            </S.CalculatorFormError>
          )}
        </S.CalculatorFormDetailUser>
      </S.CalculatorFormDetailUserData>

      {/* Добавление селектов */}
      <S.CalculatorFormDetailUserData>
        <S.CalculatorFormDetailSelectUser>
          <S.CalculatorFormLabel className="label">
            Yntrel Taratsashrjany<S.RequiredSign>*</S.RequiredSign>
          </S.CalculatorFormLabel>
          <Controller
            name="option1"
            control={control}
            defaultValue=""
            rules={{ required: 'This field is required' }}
            render={({ field }) => (
              <S.CalculatorFormSelect {...field}>
                <option value="">Aragatsotn</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </S.CalculatorFormSelect>
            )}
          />
          {errors.option1 && (
            <S.CalculatorFormError>
              {errors.option1.message}
            </S.CalculatorFormError>
          )}
        </S.CalculatorFormDetailSelectUser>
        <S.CalculatorFormDetailSelectUser>
          <S.CalculatorFormLabel className="label">
            Yntrel taracqi gorcaruyty<S.RequiredSign>*</S.RequiredSign>
          </S.CalculatorFormLabel>
          <Controller
            name="option2"
            control={control}
            defaultValue=""
            rules={{ required: 'This field is required' }}
            render={({ field }) => (
              <S.CalculatorFormSelect {...field}>
                <option value="">Bnakaranayin</option>
                <option value="optionA">Option A</option>
                <option value="optionB">Option B</option>
                <option value="optionC">Option C</option>
              </S.CalculatorFormSelect>
            )}
          />
          {errors.option2 && (
            <S.CalculatorFormError>
              {errors.option2.message}
            </S.CalculatorFormError>
          )}
        </S.CalculatorFormDetailSelectUser>
      </S.CalculatorFormDetailUserData>

      <Button style={{ marginTop: '40px' }} type="submit">
        {t('calculator.fields.quote')}
      </Button>
    </S.CalculatorForm>
  );
}

export default CalculatorForm;
