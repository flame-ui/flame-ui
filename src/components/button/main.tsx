import styled from 'styled-components'

import { Box, BoxProps } from '../box'
import { Text } from '../text'

export interface BaseButtonProps {
  onClick?: () => void
  disabled?: boolean
}

export const ButtonElement = styled.button`
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
`

ButtonContainer.displayName = 'ButtonContainer'

export const ButtonLabel = styled(Text)``

ButtonLabel.displayName = 'ButtonLabel'
