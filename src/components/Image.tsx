import React from 'react'
import { Box, BoxProps } from './box'

interface ImageProps extends BoxProps {
  src: string
  alt: string
}

export const Image: React.FC<ImageProps> = ({ src, alt, children, ...props }) => {
  return (
    <Box as={'img' as any} src={src} alt={alt} draggable={false} {...props}>
      {children}
    </Box>
  )
}

Image.displayName = 'Image'
