'use client';

import React from 'react';

// styles
import * as S from './Button.styled';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  btnStyle?: 'bordered' | 'filled' | undefined;
  children: string | React.ReactNode;
  disabled?: boolean;
  width?: number;
  onClick?: () => void;
  px?: number;
  py?: number;
  type?: 'button' | 'submit' | 'reset';
}

function Button({
  children,
  btnStyle,
  disabled,
  onClick,
  width,
  px,
  py,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <S.Button
      {...props}
      $btnStyle={btnStyle}
      $width={width}
      type={type}
      onClick={onClick}
      disabled={disabled}
      $py={py}
      $px={px}
    >
      {children}
    </S.Button>
  );
}

export default Button;
