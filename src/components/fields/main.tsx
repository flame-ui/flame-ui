import styled from 'styled-components'
import { Box } from '../box'

export interface FieldProps {
  name?: string
  label?: string
}

export const InputElement = styled(Box).attrs(() => ({
  as: 'input',
}))`
  border: none;
  background: none;
  display: block;
  outline: none;
`

InputElement.displayName = 'InputElement'
