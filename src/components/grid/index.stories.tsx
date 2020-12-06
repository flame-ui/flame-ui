import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Grid } from './main'
import { Box } from '../box'

export default {
  title: 'Components/Grid',
} as Meta

export const Default: Story = (args) => {
  return (
    <Grid {...args}>
      <Box p={2}>1</Box>
      <Box p={2}>2</Box>
      <Box p={2}>3</Box>
    </Grid>
  )
}

Default.args = {
  gridTemplateColumns: '1fr 1fr 1fr',
}
