import React from 'react'
import { Box, BoxProps } from './box'

export const Picture: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box as="picture" {...props}>
      {children}
    </Box>
  )
}

Picture.displayName = 'Picture'
