import { theme } from './src/defaultTheme'

type Theme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}
