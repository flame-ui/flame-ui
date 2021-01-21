import { Box } from '../box'
import styled from 'styled-components'
// import { themeGet } from '../../../utils/themeGet'

export const Overlay = styled(Box)`
  background-color: #000000db};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  display: flex;
`

Overlay.displayName = 'Overlay'
