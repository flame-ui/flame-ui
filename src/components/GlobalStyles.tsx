import React from 'react'
import { css, createGlobalStyle } from 'styled-components'

import { themeGet } from '../helpers/themeGet'

const defaultStyles = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ${themeGet('fonts.primary')};
  }
  body {
    background-color: ${themeGet('colors.background')};
    color: ${themeGet('colors.font')};
  }
`

export const GlobalStyles: React.FC<{ styles?: ReturnType<typeof css> }> = ({ styles }) => {
  const GlobalStyle = createGlobalStyle`
    ${defaultStyles}
    ${styles}
  `

  return <GlobalStyle />
}
