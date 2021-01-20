import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Text } from '../text'

import { List } from './main'

// import { colorKeys } from '../../defaultTheme'

export default {
  title: 'Components/List',
} as Meta

export const Default: Story = (args) => {
  return (
    <List.Container {...args}>
      <List.Item>
        <Text>Item 1</Text>
      </List.Item>
      <List.Item>
        <Text>Item 2</Text>
      </List.Item>
      <List.Item>
        <Text>Item 3</Text>
      </List.Item>
    </List.Container>
  )
}

Default.args = {
  gap: '2',
}

// Default.argTypes = {
//   bgColor: {
//     control: { type: 'select', options: colorKeys },
//   },
//   fgColor: {
//     control: { type: 'select', options: colorKeys },
//   },
// }
