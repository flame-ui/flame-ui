import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { TextButton, TextButtonProps } from './TextButton'

export default {
  title: 'Components/Buttons/Text',
} as Meta

export const Default: Story<TextButtonProps> = (args) => {
  return <TextButton {...args} />
}

Default.argTypes = {
  color: {
    description: 'Button color',
    defaultValue: 'primary',
    control: { type: 'select', options: ['primary', 'red'] },
  },
  size: {
    description: 'Button size',
    defaultValue: 'small',
    control: { type: 'select', options: ['small', 'medium'] },
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
