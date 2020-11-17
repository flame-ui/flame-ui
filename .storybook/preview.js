import React from 'react'
import { ThemeProvider, createTheme } from '../src'

import { TEXT_LINE_HEIGHTS, TEXT_LETTER_SPACING } from '../src/components/text/example'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
}

const { theme } = createTheme({
  lineHeights: TEXT_LINE_HEIGHTS,
  letterSpacings: TEXT_LETTER_SPACING,
})

const WithTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
)

export const decorators = [WithTheme]
