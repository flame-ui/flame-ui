import React, { ReactNode } from 'react'
import { ThemeProvider as StyledProvider } from 'styled-components'

import { theme as defaultTheme } from '../defaultTheme'

interface ThemeProviderProps {
  theme?: any
  childern: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme = defaultTheme, children }) => {
  return <StyledProvider theme={theme}>{children}</StyledProvider>
}
