import React from 'react'
import { ThemeProvider, GlobalStyles } from '../src'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
}

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
]
