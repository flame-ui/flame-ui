import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Box as BoxComponent, BoxProps } from './main'

import { colorKeys } from '../../defaultTheme'

export default {
  title: 'Components/Base',
} as Meta

export const Box: Story<BoxProps> = (args) => {
  return <BoxComponent {...args} />
}

Box.args = {
  width: '100px',
  height: '100px',
  borderRadius: 6,
  bg: 'primary',
}

Box.argTypes = {
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
