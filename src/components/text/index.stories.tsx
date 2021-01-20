import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { textTags } from './main'

import { Text, TextProps } from './main'

import {
  colorKeys,
  fontKeys,
  fontSizeKeys,
  lineHeightKeys,
  letterSpacings,
} from '../../defaultTheme'

export default {
  title: 'Components/Text',
} as Meta

export const Base: Story<TextProps & { children: string }> = (args) => {
  return <Text {...args} />
}

Base.argTypes = {
  fontFamily: {
    description: 'font key of theme object / index or css font-family value',
    defaultValue: 'primary',
    control: { type: 'select', options: fontKeys },
  },
  fontSize: {
    description: 'FontSize key of theme object / index or css font-size value',
    defaultValue: 'body',
    control: { type: 'select', options: fontSizeKeys },
  },
  fontWeight: {
    description: 'FontWeight key of theme object',
    defaultValue: 'body',
    control: 'text',
  },
  lineHeight: {
    description: 'lineHeight key of theme object',
    defaultValue: 'title',
    control: { type: 'select', options: lineHeightKeys },
  },
  letterSpacing: {
    description: 'lineHeight key of theme object',
    defaultValue: 'tight',
    control: { type: 'select', options: letterSpacings },
  },
  textColor: {
    description: 'Color key of theme object',
    defaultValue: 'font',
    control: { type: 'select', options: colorKeys },
  },
  tag: {
    description: 'Element tag',
    defaultValue: 'span',
    control: {
      type: 'select',
      options: textTags,
    },
  },
  children: {
    description: 'Children',
    defaultValue: 'Hello',
    control: 'text',
  },
}
