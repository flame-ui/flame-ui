import { Theme, Color } from '../theme'

export const color = (colorKey: string) => ({ theme }: { theme: Theme }): string => {
  const splitKey = colorKey.split('.')
  const value = theme.colors[splitKey[0] as Color]
  if (typeof value === 'string') {
    return value
  } else {
    return value[(splitKey[1] as unknown) as number]
  }
}
