import * as React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Media } from './main'

export default {
  title: 'Components/Media',
} as Meta

export const Default: Story = () => {
  return <Media q="(min-width: 400px)">Screen is more than 400px</Media>
}
