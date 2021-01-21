import { useTheme as useStyledTheme, DefaultTheme } from 'styled-components'
import { themeGet as _themeGet } from './themeGet'

// import { Theme } from '../theme'

export const useTheme = (): {
  theme: DefaultTheme
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  themeGet: (key: string) => string
} => {
  const theme = useStyledTheme()
  const themeGet = (key: string): string => _themeGet(key)({ theme })
  return {
    theme,
    themeGet,
  }
}
