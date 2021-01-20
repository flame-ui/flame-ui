import * as React from 'react'

import styled from 'styled-components'
import { Box, BoxProps } from '../box'

import { grid, GridProps } from 'styled-system'

import { splitProps } from '../../utils/splitProps'

const splitBoxProps = splitProps<GridProps>(grid)

const Base: React.FC = (props) => <Box {...splitBoxProps(props)[1]} />

export const Grid = styled(Base)<BoxProps & GridProps>`
  display: grid;
  ${grid}
`

Grid.displayName = 'Grid'

export const GridItem = styled(Base)<BoxProps & GridProps>`
  ${grid}
`

GridItem.displayName = 'GridItem'
