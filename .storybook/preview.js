import React from 'react'
import { css } from 'styled-components'

import { ThemeProvider, GlobalStyles, themeGet } from '../src'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
}

const styles = css`
  *::selection {
    background-color: ${themeGet('colors.primary')};
    color: white;
  }
`

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <GlobalStyles styles={styles} />
      <Story />
    </ThemeProvider>
  ),
]
