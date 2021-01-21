import * as React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

import { ButtonWrapper, ButtonProps } from './_base'
import { ButtonElement, ButtonContainer, ButtonLabel } from '../main'

import { themeGet } from '../../../helpers/themeGet'
import { transition } from '../../../helpers/transition'

const buttonSizes = {
  small: {
    px: 3,
    height: '32px',
    fontSize: 'caption',
  },
  medium: {
    px: 4,
    height: '48px',
    fontSize: 'body',
  },
}

export const BUTTON_SIZES = ['small', 'medium'] as const
type ButtonSize = typeof BUTTON_SIZES[number]

export const BUTTON_COLORS = ['primary', 'red'] as const
type ButtonColor = typeof BUTTON_COLORS[number]

export interface FilledButtonProps extends ButtonProps {
  color?: ButtonColor
  size?: ButtonSize
}

const Container = styled(ButtonContainer)<{ bg: ButtonColor }>`
  background-color: ${({ theme, bg }) => themeGet(`colors.${bg}`)({ theme })};
  color: white;
  border-radius: 6px;
  ${ButtonElement}:disabled > & {
    background-color: ${themeGet(`colors.grays.1`)};
  }
  ${transition('background-color', 0.3)}
  &:hover {
    background-color: ${({ theme, bg }) => lighten(0.04, themeGet(`colors.${bg}`)({ theme }))};
  }
`

export const FilledButton: React.FC<FilledButtonProps> = ({
  size = 'small',
  color = 'primary',
  disabled = false,
  onClick,
  to,
  children,
}) => {
  const { fontSize, ...props } = buttonSizes[size]
  return (
    <ButtonWrapper to={to} disabled={disabled} onClick={onClick}>
      <Container bg={color} {...props}>
        <ButtonLabel fontSize={fontSize}>{children}</ButtonLabel>
      </Container>
    </ButtonWrapper>
  )
}
