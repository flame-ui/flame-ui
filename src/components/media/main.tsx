import React from 'react'
import { useMedia } from '@flame-ui/hooks'

export const Media: React.FC<{ q: string }> = ({ q, children }) => {
  const isMath = useMedia([q], [true], false)
  if (isMath) {
    return <div>{children}</div>
  } else {
    return null
  }
}

Media.displayName = 'Media'
