import { Theme } from '../theme'

type ThemeKeys = keyof Theme

export const themeGet = (key: string) => ({ theme }: { theme: Theme }): string => {
  const splitKeys = key.split('.')
  // @ts-ignore
  const value = theme[splitKeys[0] as ThemeKeys][splitKeys[1]]
  if (typeof value === 'string') {
    return value
  } else {
    // @ts-ignore
    return value[splitKeys[2]]
  }
}
