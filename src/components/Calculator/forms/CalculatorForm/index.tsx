'use client';

import React from 'react';
import Button from '@/components/shared/Button';
import { useForm, SubmitHandler } from 'react-hook-form';

// styles
import * as S from './CalculatorForm.styled';
import { useTranslations } from 'next-intl';

type CalculatorFormValues = {
  surfaceArea: number;
  ceilingHeight: number;
  brightness: string;
  averagePeople: number;
  name: string;
  phoneNumber: string;
};

function CalculatorForm() {
  const t = useTranslations('Home')
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<CalculatorFormValues>();

  const onSubmit: SubmitHandler<CalculatorFormValues> = (data) => {
    console.log(data);
  };

  const handleSurfaceAreaChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    let value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    value = value.padStart(4, '0'); // Pad with zeros to ensure four digits
    setValue('surfaceArea', parseInt(value, 10), { shouldValidate: true }); // Update form value
  };

  const handleCeilingHeightChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    let value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (value.length > 2) {
      value = value.slice(0, 2) + '.' + value.slice(2); // Add decimal point
    }
    setValue('ceilingHeight', parseFloat(value), { shouldValidate: true }); // Update form value

    if (!value) setValue('ceilingHeight', parseFloat('00.0'));
  };
  
  return (
    <S.CalculatorForm onSubmit={handleSubmit(onSubmit)}>
      <S.CalculatorFormDetail>
        <S.CalculatorFormLabel>{t('calculator.fields.area')}</S.CalculatorFormLabel>
        <S.InputWrapper>
          <S.CalculatorFormInput
            className={'surface-input'}
            type="text"
            {...register('surfaceArea', { required: true })}
            placeholder="0000"
            maxLength={4}
            onChange={handleSurfaceAreaChange}
          />
          <S.Unit>m²</S.Unit>
        </S.InputWrapper>
        {errors.surfaceArea && (
          <S.CalculatorFormError>This field is required</S.CalculatorFormError>
        )}
      </S.CalculatorFormDetail>
      <S.CalculatorFormDetail>
        <S.CalculatorFormLabel>{t('calculator.fields.height')}</S.CalculatorFormLabel>
        <S.InputWrapper>
          <S.CalculatorFormInput
            type="text"
            className="celling-input"
            {...register('ceilingHeight', { required: true })}
            placeholder="0.00"
            maxLength={3}
            onChange={handleCeilingHeightChange}
          />
          <S.Unit className="celling-unit">m</S.Unit>
        </S.InputWrapper>
        {errors.ceilingHeight && (
          <S.CalculatorFormError>This field is required</S.CalculatorFormError>
        )}
      </S.CalculatorFormDetail>
      <S.CalculatorFormDetail>
        <S.CalculatorFormLabel>{t('calculator.fields.brightness')}</S.CalculatorFormLabel>
        <S.CalculatorFormSelect {...register('brightness', { required: true })}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </S.CalculatorFormSelect>
        {errors.brightness && (
          <S.CalculatorFormError>This field is required</S.CalculatorFormError>
        )}
      </S.CalculatorFormDetail>
      <S.CalculatorFormDetail>
        <S.CalculatorFormLabel>
        {t('calculator.fields.avg')}e
        </S.CalculatorFormLabel>
        <S.CalculatorFormInput
          type="text"
          maxLength={4}
          placeholder="0000"
          {...register('averagePeople', { required: true })}
        />
        {errors.averagePeople && (
          <S.CalculatorFormError>This field is required</S.CalculatorFormError>
        )}
      </S.CalculatorFormDetail>
      <S.CalculatorFormDetailUserData>
        <S.CalculatorFormDetailUser>
          <S.CalculatorFormLabel className="label">
          {t('calculator.fields.name')}<S.RequiredSign>*</S.RequiredSign>
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
          {t('calculator.fields.phone')}<S.RequiredSign>*</S.RequiredSign>
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
      </S.CalculatorFormDetailUserData>
      <Button type="submit">{t('calculator.fields.quote')}</Button>
    </S.CalculatorForm>
  );
}

export default CalculatorForm;
