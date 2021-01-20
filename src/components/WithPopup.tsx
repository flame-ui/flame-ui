import React from 'react'

import { WithClickOutside } from './WithClickOutside'

export type PopupBound = {
  left: number
  top: number
  right: number
  bottom: number
  width: number
  height: number
}

interface WithPopupProps {
  component: (props: { pos: PopupBound }) => React.ReactNode
  isOpen: boolean
  onClickOutside: () => void
}

export const WithPopup: React.FC<WithPopupProps> = ({
  isOpen = false,
  component,
  onClickOutside,
  children,
}) => {
  const [pos, setPos] = React.useState({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0,
  })

  const ref = React.useRef<HTMLDivElement>(null)

  const handleResize = (): void => {
    const bound = ref.current?.getBoundingClientRect()
    bound &&
      setPos({
        left: bound.left,
        top: bound.top,
        right: window.innerWidth - bound.right,
        bottom: window.innerHeight - bound.bottom,
        width: bound.width,
        height: bound.height,
      })
  }

  React.useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [ref.current])

  return (
    <WithClickOutside handler={onClickOutside}>
      <div style={{ display: 'flex' }} ref={ref}>
        {children}
      </div>
      {isOpen && component({ pos })}
    </WithClickOutside>
  )
}

WithPopup.displayName = 'WithPopup'
