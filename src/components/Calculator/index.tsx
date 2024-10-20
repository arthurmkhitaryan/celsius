'use client';

import React, { useState } from 'react';

// components
import arrowRightMain from '@/public/images/arrow-right.svg';
import Button from '@/components/shared/Button';
import CalculatorForm from '@/components/Calculator/forms/CalculatorForm';

// styles
import * as S from './Calculator.styled';
import Image from 'next/image';

function Calculator() {
  const [toggleCalculator, setToggleCalculator] = useState<boolean>(false);

  const handleToggleCalculator = () => {
    setToggleCalculator(!toggleCalculator);
  };

  console.log({ toggleCalculator });

  return (
    <S.CalculatorWrapper>
      <S.CalculatorContainer>
        <S.CalculatorContent>
          <S.CalculatorTitle>Calculator</S.CalculatorTitle>
          <S.CalculatorDescription>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of.`}
          </S.CalculatorDescription>
          <S.CalculatorButtonWrapper>
            <Button onClick={handleToggleCalculator} style={{ maxWidth: '165px' }}>
              Get started <Image src={arrowRightMain} width={12} alt="arrow-right" />
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
