import React from 'react'
import { useTheme } from '../../helpers/useTheme'

import { useMediaQueries } from '@flame-ui/hooks'

interface MediaProps {
  q: number | string
}

export const Media: React.FC<MediaProps> = ({ q, children }) => {
  const { theme } = useTheme()
  const query = typeof q === 'number' ? `(max-width: ${(theme as any).breakpoints[q]})` : q
  const isMatch = useMediaQueries([query], [true], false)

  if (isMatch) {
    return <div>{children}</div>
  } else {
    return null
  }
}

Media.displayName = 'Media'
