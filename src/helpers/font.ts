import { Theme, Font } from '../theme'

export const font = (fontKey: Font) => ({ theme }: { theme: Theme }): string => {
  return theme.fonts[fontKey]
}
