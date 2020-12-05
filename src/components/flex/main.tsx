import * as React from 'react'
import { Box, BoxProps } from '../box'

export interface FlexProps extends BoxProps {
  gap?: number | number[]
}

export const Flex: React.FC<FlexProps> = ({ children, gap, flexDirection, ...props }) => {
  const isRow = flexDirection === 'row'
  return (
    <Box flexDirection={flexDirection} {...props}>
      {React.Children.map(children, (child: React.ReactNode, index) => {
        if (gap) {
          return (
            <React.Fragment>
              {index !== 0 && (isRow ? <Box ml={gap} /> : <Box mb={gap} />)}
              {child}
            </React.Fragment>
          )
        } else {
          return child
        }
      })}
    </Box>
  )
}

Flex.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
}

Flex.displayName = 'Flex'

export const Row: React.FC<Omit<FlexProps, 'flexDirection'>> = ({ children, ...props }) => {
  return (
    <Flex flexDirection="row" {...props}>
      {children}
    </Flex>
  )
}

Flex.displayName = 'Row'

export const Column: React.FC<Omit<FlexProps, 'flexDirection'>> = ({ children, ...props }) => {
  return (
    <Flex flexDirection="column" {...props}>
      {children}
    </Flex>
  )
}

Flex.displayName = 'Column'
