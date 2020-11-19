import * as React from 'react'
import { ThemeProvider as StyledProvider } from 'styled-components'

import { theme as defaultTheme } from '../defaultTheme'

export const ThemeProvider: React.FC<{ theme?: any }> = ({ theme = defaultTheme, children }) => {
  return <StyledProvider theme={theme}>{children}</StyledProvider>
}
