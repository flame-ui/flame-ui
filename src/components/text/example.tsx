import styled from 'styled-components'

import { Text as TextComponent, TextProps as BaseTextProps } from './main'

import { variant } from '../../utils/thirdParty'

import { TextLineHeight, TextLetterSpacing } from '../../theme'

type FontWeight =
  | 'inherit'
  | 'initial'
  | 'normal'
  | 'bold'
  | 'lighter'
  | 'bolder'
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900

export interface TextTreatment {
  fontSize: string
  lineHeight: TextLineHeight
  letterSpacing?: TextLetterSpacing
  fontWeight?: FontWeight
}

export const TEXT_TREATMENTS = [
  'largeTitle',
  'title',
  'subtitle',
  'text',
  'mediumText',
  'caption',
  'small',
] as const

export type TextTreatments = {
  [K in typeof TEXT_TREATMENTS[number]]: TextTreatment
}

export const TEXT_VARIANTS: TextTreatments = {
  largeTitle: {
    fontSize: '9',
    lineHeight: 'title',
    letterSpacing: 'tight',
    fontWeight: 'normal',
  },
  title: {
    fontSize: '7',
    lineHeight: 'title',
    letterSpacing: 'tight',
    fontWeight: 'normal',
  },
  subtitle: {
    fontSize: '6',
    lineHeight: 'title',
    fontWeight: 'normal',
  },
  text: {
    fontSize: '3',
    lineHeight: 'body',
    fontWeight: 'normal',
  },
  mediumText: {
    fontSize: '3',
    lineHeight: 'body',
    fontWeight: 'bold',
  },
  caption: {
    fontSize: '2',
    lineHeight: 'body',
    fontWeight: 'normal',
  },
  small: {
    fontSize: '1',
    lineHeight: 'body',
    fontWeight: 'normal',
  },
}

export const VariantKeys = TEXT_TREATMENTS

export type TextVariant = keyof TextTreatments

export interface TextProps extends BaseTextProps {
  variant: TextVariant
}

export const Text = styled(TextComponent)<TextProps>`
  ${variant({ variants: TEXT_VARIANTS })}
`
