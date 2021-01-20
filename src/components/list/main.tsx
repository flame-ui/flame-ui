import React from 'react'
import { Box } from '../box'

export interface ListProps {
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

export const ListItem: React.FC = ({ children }) => {
  return <Box as="li">{children}</Box>
}

ListItem.displayName = 'ListItem'

export const List = {
  Container: ListContainer,
  Item: ListItem,
}
