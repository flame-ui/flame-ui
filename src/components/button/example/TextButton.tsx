import * as React from 'react'

import { ButtonWrapper, ButtonProps } from './_base'
import { ButtonLabel } from '../main'

export interface TextButtonProps extends ButtonProps {
  size?: 'small' | 'medium'
  color?: 'primary' | 'red'
}

export const TextButton: React.FC<TextButtonProps> = ({
  size = 'medium',
  color = 'primary',
  disabled = false,
  children,
  to,
}) => {
  return (
    <ButtonWrapper to={to} disabled={disabled}>
      <ButtonLabel
        fontSize={size === 'medium' ? 'body' : 'small'}
        fontWeight="bold"
        textColor={disabled ? 'grays.1' : color}
      >
        {children}
      </ButtonLabel>
    </ButtonWrapper>
  )
}
