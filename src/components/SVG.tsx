import React from 'react'
import { Box, BoxProps } from './box'

interface SVGProps extends BoxProps {
  viewBox: string
}

export const SVG: React.FC<SVGProps> = ({
  display = 'flex',
  width,
  height,
  viewBox,
  children,
  ...props
}) => {
  return (
    <Box
      as={'svg' as any}
      display={display}
      width={width}
      height={height}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </Box>
  )
}

SVG.displayName = 'SVG'
