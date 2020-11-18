import { Theme } from '../theme'

export const fontSize = (fontSizeKey: string | number) => ({ theme }: { theme: Theme }): string => {
  // @ts-ignore
  return theme.fontSizes[fontSizeKey]
}
