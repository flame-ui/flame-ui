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
  system,
} from 'styled-system'

import { splitProps } from '../../utils/splitProps'

interface FlexGapProps {
  gap?: number | string
  rowGap?: number | string
  columnGap?: number | string
}

export interface BoxProps
  extends BackgroundProps,
    BorderProps,
    Omit<ColorProps, 'color'>,
    FlexboxProps,
    FlexGapProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    TextAlignProps {
  color?: string
}

const flexGap = system({
  gap: {
    property: 'gap',
    scale: 'space',
  },
  rowGap: {
    // @ts-ignore
    property: 'row-gap',
    scale: 'space',
  },
  columnGap: {
    // @ts-ignore
    property: 'column-gap',
    scale: 'space',
  },
})

export const boxMixin = compose(
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  space,
  textAlign,
  flexGap,
)

const splitBoxProps = splitProps<BoxProps>(boxMixin)

const Div: React.FC = (props) => <div {...splitBoxProps(props)[1]} />

export const Box = styled(Div)<BoxProps>`
  ${boxMixin}
`

Box.displayName = 'Box'
