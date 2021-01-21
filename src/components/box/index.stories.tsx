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
  bg: 'lighten(0.04, primary)',
  tProperty: 'background-color, transform',
  tDuration: '0.2s',
  tFunction: 'ease-in-out',
  media: {
    'min-width: 1024px': {
      width: '140px',
      height: '140px',
    },
  },
  hover: {
    bg: 'lighten(0.4, primary)',
    transform: 'scale(1.2)',
  },
  active: {
    bg: 'red',
    transform: 'scale(0.9)',
  },
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
