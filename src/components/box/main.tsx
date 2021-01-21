import * as React from 'react'
import styled from 'styled-components'
import css from '../../utils/css'

import { SystemStyleObject } from 'styled-system__css'

import colorTransform from '../../utils/transformColor'

import {
  background,
  BackgroundProps,
  border,
  BorderProps,
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

interface BaseBoxProps
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
  bg?: string
  transform?: string
  transition?: string
  tProperty?: string
  tDuration?: string
  tFunction?: string
  media?: { [key: string]: BaseBoxProps }
}

interface PseudoProps {
  hover?: BaseBoxProps
  active?: BaseBoxProps
  focus?: BaseBoxProps
}

export interface BoxProps extends BaseBoxProps, PseudoProps {}

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

const transform = system({
  transform: true,
})

const transition = system({
  transition: true,
  tProperty: {
    // @ts-ignore
    property: 'transition-property',
  },
  tDuration: {
    // @ts-ignore
    property: 'transition-duration',
  },
  tFunction: {
    // @ts-ignore
    property: 'transition-timing-function',
  },
})

const color = system({
  color: {
    property: 'color',
    scale: 'colors',
    transform: colorTransform,
  },
  bg: {
    property: 'background',
    scale: 'colors',
    transform: colorTransform,
  },
  fill: {
    property: 'fill',
    scale: 'colors',
    transform: colorTransform,
  },
  stroke: {
    property: 'stroke',
    scale: 'colors',
    transform: colorTransform,
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
  transform,
  transition,
)

const splitBoxProps = splitProps<BoxProps>([
  ...boxMixin.propNames,
  'hover',
  'focus',
  'active',
  'media',
])

const pseudoMixin = ({ hover, focus, active }: BoxProps): ReturnType<typeof css> =>
  css({
    '&:hover': css(hover as SystemStyleObject),
    '&:focus': css(focus as SystemStyleObject),
    '&:active': css(active as SystemStyleObject),
  })

const mediaMixin = ({ media }: BoxProps): ReturnType<typeof css> => {
  if (media) {
    const queries: { [key: string]: BoxProps } = {}
    Object.keys(media).forEach((q) => {
      const query = `@media(${q})`
      queries[query] = media[q]
    })

    return css(queries)
  }
}

const Div: React.FC = (props) => <div {...splitBoxProps(props)[1]} />

export const Box = styled(Div)<BoxProps>`
  ${boxMixin}
  ${pseudoMixin}
  ${mediaMixin}
`

Box.displayName = 'Box'
