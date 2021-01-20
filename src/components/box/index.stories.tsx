import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Box, BoxProps } from './main'

import { colorKeys } from '../../defaultTheme'

export default {
  title: 'Components/Box',
} as Meta

export const Default: Story<BoxProps> = (args) => {
  return <Box {...args} />
}

Default.args = {
  width: '100px',
  height: '100px',
  borderRadius: 6,
  bg: 'primary',
}

Default.argTypes = {
  width: {
    control: 'text',
  },
  height: {
    control: 'text',
  },
  borderRadius: {
    control: 'number',
  },
  bg: {
    control: { type: 'select', options: colorKeys },
  },
}
