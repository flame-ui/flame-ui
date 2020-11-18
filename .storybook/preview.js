import React from 'react'
import { ThemeProvider, theme } from '../src'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
}

const WithTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
)

export const decorators = [WithTheme]
