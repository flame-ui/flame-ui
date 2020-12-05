import { css } from 'styled-components'
import { themeGet } from './helpers/themeGet'

export const defaultStyles = css`
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
  button {
    cursor: pointer;
  }
`
