import { lighten, darken } from 'polished'
import get from './get'

const getColor = (key: string, scale: any): string => get(scale, key, key)

const parce = (key: string): [number, string] => {
  const result = key
    .match(/\(.*\)/)[0]
    .replace(/(\(| |\))/g, '')
    .split(',')
    .map((val, idx) => (idx === 0 ? parseFloat(val) : val))

  return result as [number, string]
}

export default (key: string, scale: any): string => {
  if (/lighten/.test(key)) {
    const [amount, color] = parce(key)
    return lighten(amount, getColor(color, scale))
  } else if (/darken/.test(key)) {
    const [amount, color] = parce(key)
    return darken(amount, getColor(color, scale))
  } else {
    return getColor(key, scale)
  }
}
