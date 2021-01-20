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

### Base

- Box
- Text
- SVG
- Picture
- Image
- ButtonElement

### Flexbox

- Row
- Column
- List

### Grid

- Grid

### HOC

- WithClickOutside
- WithPopup

### Other

- Spinner
- Media
- NoSSR

## Utils

- createTheme
- useTheme
