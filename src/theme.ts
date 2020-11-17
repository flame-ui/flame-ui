import { DefaultTheme } from 'styled-components'

export type Theme = DefaultTheme

export type TextLineHeight = keyof DefaultTheme['lineHeights']

export type TextLetterSpacing = keyof DefaultTheme['letterSpacings']

export type Color = keyof DefaultTheme['colors']
