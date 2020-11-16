import { DefaultTheme } from 'styled-components'

export type Theme = DefaultTheme

export type Color = keyof DefaultTheme['colors']

export type Font = keyof DefaultTheme['fonts']
