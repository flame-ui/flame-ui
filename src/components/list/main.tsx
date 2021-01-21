import React from 'react'
import { Box, BoxProps } from '../box'

export interface ListProps extends BoxProps {
  direction?: 'row' | 'column'
}

export const ListContainer: React.FC<ListProps> = ({
  direction = 'column',
  children,
  ...props
}) => {
  return (
    <Box
      as="ul"
      display="flex"
      flexDirection={direction}
      flexWrap="wrap"
      p="0"
      m="0"
      {...props}
      style={{
        listStyle: 'none',
      }}
    >
      {children}
    </Box>
  )
}

ListContainer.displayName = 'ListContainer'

export const ListItem: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box as="li" {...props}>
      {children}
    </Box>
  )
}

ListItem.displayName = 'ListItem'

export const List = {
  Container: ListContainer,
  Item: ListItem,
}
