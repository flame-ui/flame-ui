import * as React from 'react'
import styled from 'styled-components'

import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
} from 'styled-system'

import { splitProps } from '../../utils/splitProps'

export interface BoxProps
  extends BackgroundProps,
    BorderProps,
    Omit<ColorProps, 'color'>,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    TextAlignProps {}

export const boxMixin = compose(
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  space,
  textAlign,
)

const splitBoxProps = splitProps<BoxProps>(boxMixin)

const Div: React.FC = (props) => <div {...splitBoxProps(props)[1]} />

export const Box = styled(Div)<BoxProps>`
  ${boxMixin}
`

Box.displayName = 'Box'
