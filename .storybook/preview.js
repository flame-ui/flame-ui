import React from 'react'
import { ThemeProvider } from '../src'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
}

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
]
