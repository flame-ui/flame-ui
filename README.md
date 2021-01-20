# flame-ui react

Atomic components based on styled-components and styled-system

## Install

```bash
yarn add @flame-ui/react
```

or using mpm

```bash
npm i @flame-ui/react
```

## Configure

Create theme
```ts
// theme.ts

import { createTheme } from '@flame-ui/react'

export const { theme } = createTheme({
  colors: COLORS,
  fonts: FONTS,
  fontSizes: FONT_SIZES,
})
```

Wrap app with `ThemeProvider` component
```ts
// app.tsx

import { ThemeProvider } from '@flame-ui/react'

import { theme } from './theme'

const App = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    <ThemeProvider />
  )
}
```

## Components

[Storybook](https://5fb2ee73cc0d4700216e9e2f-qidhfeihdr.chromatic.com/?path=/story/components-box--default)

### Base

- Box
- Text
- SVG
- Picture
- Image
- ButtonElement

### Layout

- Row
- Column
- Grid
- List

### HOC

- WithClickOutside
- WithPopup

### Other

- Spinner
- Media
- NoSSR

## Utils

- createTheme

```ts
const COLORS = {
  primary: '#4C32FF',
  secondary: '#2D1F91',
  error: '#FF6565',
  warning: '#FFD577',
  info: '#29C1FF',
  backgrounds: [
    '#F9F9F9',
    '#F2F2F2',
    '#B9B9B9',
    '#717171',
    '#2F2F2F',
  ],
}

const FONTS = {
  primary: '"OpenSans", sans-serif',
  heading: '"Roboto", sans-serif',
}

const FONT_SIZES = {
  tiny: '10px',
  caption: '14px',
  small: '16px',
  body: '18px',
  lead: '24px',
  h5: '21px',
  h4: '26px',
  h3: '31px',
  h2: '37px',
  h1: '45px',
}

const BREAKPOINTS = [
  '1192px',
  '1024px',
  '900px',
  '768px',
  '524px',
]

const { theme } createTheme({
  colors: COLORS,
  fonts: FONTS,
  fontSizes: FONT_SIZES,
  breakpoints: BREAKPOINTS,
})
```

- useTheme
