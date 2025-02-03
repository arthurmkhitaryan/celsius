'use client';

import React, { useEffect, useState } from 'react';
import Button from '@/components/shared/Button';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import * as S from './CalculatorForm.styled';
import { useTranslations } from 'next-intl';

type CalculatorFormValues = {
  name: string;
  phoneNumber: string;
  email: string;
  region: string;
  area_function: string;
};

function CalculatorForm() {
  const t = useTranslations('Home');
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<CalculatorFormValues>();

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Watch all form values
  const formValues = watch();

  // Check if all fields are filled
  useEffect(() => {
    const allFieldsFilled = Object.values(formValues).every(
      (value) => value && value !== '',
    );
    setIsButtonDisabled(!allFieldsFilled);
  }, [formValues]);

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
          {errors.email && (
            <S.CalculatorFormError>
              This field is required
            </S.CalculatorFormError>
          )}
        </S.CalculatorFormDetailUser>
      </S.CalculatorFormDetailUserData>

      {/* Select Fields */}
      <S.CalculatorFormDetailUserData>
        <S.CalculatorFormDetailSelectUser>
          <S.CalculatorFormLabel className="label">
            {t('calculator.fields.region')}
            <S.RequiredSign>*</S.RequiredSign>
          </S.CalculatorFormLabel>
          <Controller
            name="region"
            control={control}
            defaultValue=""
            rules={{ required: 'This field is required' }}
            render={({ field }) => (
              <S.CalculatorFormSelect {...field}>
                <option value="" disabled>
                  {t('calculator.fields.region_options.select')}
                </option>
                <option value="yerevan">
                  {t('calculator.fields.region_options.Yerevan')}
                </option>
                <option value="aragatsotn">
                  {t('calculator.fields.region_options.Aragatsotn')}
                </option>
                <option value="ararat">
                  {t('calculator.fields.region_options.Ararat')}
                </option>
                <option value="armavir">
                  {t('calculator.fields.region_options.Armavir')}
                </option>
                <option value="gegharkunik">
                  {t('calculator.fields.region_options.Gegharkunik')}
                </option>
                <option value="kotayk">
                  {t('calculator.fields.region_options.Kotayk')}
                </option>
                <option value="lori">
                  {t('calculator.fields.region_options.Lori')}
                </option>
                <option value="shirak">
                  {t('calculator.fields.region_options.Shirak')}
                </option>
                <option value="syunik">
                  {t('calculator.fields.region_options.Syunik')}
                </option>
                <option value="tavush">
                  {t('calculator.fields.region_options.Tavush')}
                </option>
                <option value="vayots_dzor">
                  {t('calculator.fields.region_options.Vayots_dzor')}
                </option>
              </S.CalculatorFormSelect>
            )}
          />
          {errors.region && (
            <S.CalculatorFormError>
              {errors.region.message}
            </S.CalculatorFormError>
          )}
        </S.CalculatorFormDetailSelectUser>
        <S.CalculatorFormDetailSelectUser>
          <S.CalculatorFormLabel className="label">
            {t('calculator.fields.area_function')}
            <S.RequiredSign>*</S.RequiredSign>
          </S.CalculatorFormLabel>
          <Controller
            name="area_function"
            control={control}
            defaultValue=""
            rules={{ required: 'This field is required' }}
            render={({ field }) => (
              <S.CalculatorFormSelect {...field}>
                <option value="" disabled>
                  {t('calculator.fields.region_options.select')}
                </option>
                <option value="commercial">
                  {t('calculator.fields.area_options.Commercial')}
                </option>
                <option value="residential">
                  {t('calculator.fields.area_options.Residential')}
                </option>
                <option value="manufacturing">
                  {t('calculator.fields.area_options.Manufacturing')}
                </option>
                <option value="warehouse">
                  {t('calculator.fields.area_options.Warehouse')}
                </option>
              </S.CalculatorFormSelect>
            )}
          />
          {errors.area_function && (
            <S.CalculatorFormError>
              {errors.area_function.message}
            </S.CalculatorFormError>
          )}
        </S.CalculatorFormDetailSelectUser>
      </S.CalculatorFormDetailUserData>

      <Button
        id="btn"
        style={{ marginTop: '40px' }}
        type="submit"
        disabled={isButtonDisabled}
      >
        {t('calculator.fields.quote')}
      </Button>
    </S.CalculatorForm>
  );
}

export default CalculatorForm;
