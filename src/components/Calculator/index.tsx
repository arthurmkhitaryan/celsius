'use client';

import React, { useState } from 'react';

// components
import arrowRightMain from '@/public/images/arrow-right.svg';
import Button from '@/components/shared/Button';
import CalculatorForm from '@/components/Calculator/forms/CalculatorForm';

// styles
import * as S from './Calculator.styled';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

function Calculator() {
  const t = useTranslations('Home');
  const [toggleCalculator, setToggleCalculator] = useState<boolean>(false);

  const handleToggleCalculator = () => {
    setToggleCalculator((prev) => !prev);
  };

  return (
    <S.CalculatorWrapper>
      <S.CalculatorContainer>
        <S.CalculatorContent>
          <S.CalculatorTitle> {t('calculator.title')}</S.CalculatorTitle>
          <S.CalculatorDescription>
            {t('calculator.description')}
          </S.CalculatorDescription>
          <S.CalculatorButtonWrapper>
            <Button
              onClick={handleToggleCalculator}
              style={{ maxWidth: '165px' }}
            >
              {t('calculator.start')}
              <Image src={arrowRightMain} width={12} alt="arrow-right" />
            </Button>
          </S.CalculatorButtonWrapper>
        </S.CalculatorContent>
      </S.CalculatorContainer>
      {toggleCalculator && (
        <S.Calculator>
          <CalculatorForm />
        </S.Calculator>
      )}
    </S.CalculatorWrapper>
  );
}

export default Calculator;
