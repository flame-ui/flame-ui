import { Theme } from '../theme'

export const fontSize = (fontSizeKey: string | number) => ({ theme }: { theme: Theme }): string => {
  return theme.fontSizes[(fontSizeKey as unknown) as any]
}
