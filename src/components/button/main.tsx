import styled from 'styled-components'

import { Box, BoxProps } from '../box'
import { Text } from '../text'

export interface ButtonProps {
  onClick?: () => void
  disabled?: boolean
  type?: string
}

export const ButtonElement = styled(Box).attrs(() => ({
  as: 'button',
}))`
  margin: 0;
  border: none;
  background-color: transparent;
  user-select: none;
  &:disabled {
    pointer-events: none;
  }
  &:focus {
    outline: none;
  }
`

ButtonElement.displayName = 'ButtonElement'

export const ButtonContainer = styled(Box)<BoxProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

ButtonContainer.displayName = 'ButtonContainer'

export const ButtonLabel = styled(Text)``

ButtonLabel.displayName = 'ButtonLabel'
