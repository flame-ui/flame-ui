import * as React from 'react'

import { ButtonElement, ButtonProps as BaseButtonProps } from '../main'

const Link: React.FC<{ to: string }> = ({ children, to }) => <a href={to}>{children}</a>

export interface ButtonProps extends BaseButtonProps {
  to?: string
}

export const ButtonWrapper: React.FC<ButtonProps> = ({ to, disabled, onClick, children }) => {
  if (to) {
    return <Link to={to}>{children}</Link>
  } else {
    return (
      <ButtonElement role="button" disabled={disabled} onClick={onClick}>
        {children}
      </ButtonElement>
    )
  }
}
