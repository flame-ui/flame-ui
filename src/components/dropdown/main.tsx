import * as React from 'react'
import styled from 'styled-components'

import { Box } from '../box'
import { Column } from '../flex'

import { themeGet } from '../../../utils/themeGet'

const DDWrapper = styled(Box)`
  background-color: ${themeGet('colors.background')};
  box-shadow: 0 0 0 1px ${themeGet('colors.backgrounds.1')};
`

const DDContainer: React.FC = ({ children }) => {
  return (
    <DDWrapper borderRadius={6} p={1}>
      <Column gap={1}>{children}</Column>
    </DDWrapper>
  )
}

DDContainer.displayName = 'DDContainer'

const DDItem = styled(Box).attrs(() => ({
  py: 2,
  px: 3,
  borderRadius: 6,
}))`
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${themeGet('colors.backgrounds.0')};
  }
`

DDItem.displayName = 'DDItem'

export const Dropdown = {
  DDContainer,
  DDItem,
}

export const DD = {
  Container: DDContainer,
  Item: DDItem,
}
