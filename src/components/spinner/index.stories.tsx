import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Spinner, SpinnerProps } from './main'

import { colorKeys } from '../../defaultTheme'

export default {
  title: 'Components/Spinner',
} as Meta

export const Default: Story<SpinnerProps> = (args) => {
  return <Spinner {...args} />
}

Default.args = {
  size: '56px',
  bgColor: 'grays.0',
  fgColor: 'primary',
}

Default.argTypes = {
  bgColor: {
    control: { type: 'select', options: colorKeys },
  },
  fgColor: {
    control: { type: 'select', options: colorKeys },
  },
}
