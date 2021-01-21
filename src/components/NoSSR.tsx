import React from 'react'

const isServer = (): boolean => typeof window === 'undefined'

export const NoSSR: React.FC = ({ children }): React.ReactElement | null => {
  return isServer() ? null : <React.Fragment>{children}</React.Fragment>
}

NoSSR.displayName = 'NoSSR'
