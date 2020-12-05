import * as React from 'react'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'
import { Box } from '../box'
import { Text } from '../text'

import { themeGet } from '../../helpers/themeGet'

import { transition } from '../../helpers/transition'

export interface TextFieldProps {
  name: string
  label: string
  type?: string
}

const InputElement = styled.input`
  background-color: transparent;
  color: ${themeGet('colors.font')};
  border: none;
  width: 100%;
  height: 100%;
  padding: 18px 16px 0px;
  border-radius: inherit;
  &:focus {
    outline: none;
  }
`

const Label = styled(Text)`
  position: absolute;
  pointer-events: none;
  ${transition('top, font-size', 0.2, 'ease-in-out')};
`

const FieldContainer: React.FC<{ label: string; isActive: boolean }> = ({
  label,
  isActive = false,
  children,
}) => {
  return (
    <Box
      borderRadius={6}
      position="relative"
      background="none"
      border="none"
      height="48px"
      backgroundColor="backgrounds.0"
    >
      <Label
        top={isActive ? '4px' : '14px'}
        fontSize={isActive ? 'caption' : 'small'}
        color="backgrounds.2"
        ml="16px"
      >
        {label}
      </Label>
      {children}
    </Box>
  )
}

export const TextField: React.FC<TextFieldProps> = ({ name, type = 'text', label }) => {
  const methods = useFormContext()

  const { register } = methods

  const [isFilled, setFilled] = React.useState(false)
  const [isFocused, setFocused] = React.useState(false)

  return (
    <FieldContainer label={label} isActive={isFocused || isFilled}>
      <InputElement
        ref={register}
        name={name}
        type={type}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => (e.target.value.length > 0 ? setFilled(true) : setFilled(false))}
      />
    </FieldContainer>
  )
}

TextField.displayName = 'TextField'
