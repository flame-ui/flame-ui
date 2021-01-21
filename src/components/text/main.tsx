import * as React from 'react'
import styled from 'styled-components'

import { color, ColorProps, compose, style, typography, TypographyProps } from 'styled-system'

import { splitProps } from '../../utils/splitProps'

import { Box, BoxProps } from '../box'

export type BaseTextProps = TypographyProps &
  Omit<ColorProps, 'color'> & {
    textColor?: string
  }

export const textTags = ['span', 'p', 'h6', 'h5', 'h4', 'h3', 'h2', 'h1'] as const

type TextTag = typeof textTags

export type TextProps = BaseTextProps & BoxProps & { tag?: TextTag; overflowEllipsis?: boolean }

// const textColor = style({
//   prop: 'textColor',
//   cssProperty: 'color',
//   key: 'colors',
// })

export const textMixin = compose(typography, color)

const splitTextProps = splitProps<BoxProps>(textMixin.propNames)

const Base: React.FC<TextProps> = ({ tag = 'span', ...props }) => (
  <Box as={tag as never} {...splitTextProps(props)[1]}>
    {props.children}
  </Box>
)

export const Text = styled(Base)<TextProps>`
  ${textMixin}
`

Text.displayName = 'Text'
