import * as React from 'react'
import { Box, BoxProps } from '../box'

export const Flex: React.FC<BoxProps> = ({
  children,
  flexDirection,
  flexWrap = 'wrap',
  ...props
}) => {
  return (
    <Box flexDirection={flexDirection} flexWrap={flexWrap} {...props}>
      {children}
    </Box>
  )
}

Flex.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
}

Flex.displayName = 'Flex'

export const Row: React.FC<Omit<BoxProps, 'flexDirection'>> = ({ children, ...props }) => {
  return (
    <Flex flexDirection="row" {...props}>
      {children}
    </Flex>
  )
}

Flex.displayName = 'Row'

export const Column: React.FC<Omit<BoxProps, 'flexDirection'>> = ({ children, ...props }) => {
  return (
    <Flex flexDirection="column" {...props}>
      {children}
    </Flex>
  )
}

Flex.displayName = 'Column'
