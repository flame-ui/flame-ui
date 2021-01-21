import * as React from 'react'
import styled from 'styled-components'
import { Box } from '../box'
import { Row } from '../flex'
import { Text } from '../text'

const Line = styled(Box)`
  background-color: black;
  width: 100%;
  height: 1px;
  margin: 0 8px;
`

export const Separator: React.FC = ({ children }) => {
  return (
    <Row alignItems="center">
      <Line />
      <Text>{children}</Text>
      <Line />
    </Row>
  )
}

Separator.displayName = 'Separator'
