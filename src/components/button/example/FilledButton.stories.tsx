import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { FilledButton, FilledButtonProps, BUTTON_SIZES } from './FilledButton'

export default {
  title: 'Components/Buttons/Filled',
} as Meta

export const Default: Story<FilledButtonProps> = (args) => {
  return <FilledButton {...args} />
}

Default.argTypes = {
  color: {
    description: 'Button color',
    defaultValue: 'primary',
    control: { type: 'select', options: ['primary', 'red'] },
  },
  size: {
    description: 'Button size',
    defaultValue: BUTTON_SIZES[0],
    control: { type: 'select', options: BUTTON_SIZES },
  },
  disabled: {
    description: 'Disabled',
    defaultValue: false,
    control: 'boolean',
  },
  children: {
    description: 'Children',
    defaultValue: 'Button',
    control: 'text',
  },
}
