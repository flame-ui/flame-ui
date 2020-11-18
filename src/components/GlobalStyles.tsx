import React from 'react'
import { css, createGlobalStyle } from 'styled-components'

import { color } from '../helpers/color'
import { font } from '../helpers/font'

const defaultStyles = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ${font('primary')};
  }
  body {
    background-color: ${color('background')};
    color: ${color('font')};
  }
`

export const GlobalStyles: React.FC<{ styles?: ReturnType<typeof css> }> = ({ styles }) => {
  const GlobalStyle = createGlobalStyle`
    ${defaultStyles}
    ${styles}
  `

  return <GlobalStyle />
}
