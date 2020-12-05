import React, { useState, useRef, ReactElement } from 'react'
import { UniversalPortal } from '@jesstelford/react-portal-universal'

import { useEffect, MutableRefObject } from 'react'

export const useResize = (handleResize: () => void, ref?: MutableRefObject<HTMLElement>): void => {
  const isClient = typeof window === 'object'

  useEffect(() => {
    if (!isClient) {
      return
    }

    handleResize()

    const element = ref?.current ? ref.current : window

    element.addEventListener('resize', handleResize)
    return () => element.removeEventListener('resize', handleResize)
  }, [isClient, ref, handleResize])
}

export type PortalPosition = {
  x: number
  y: number
  w: number
  h: number
  r: number
  b: number
  vw: number
  vh: number
}

export interface WithPortalProps {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  component: (pos: PortalPosition) => ReactElement
  selector?: string
  isActive: boolean
  clickOutside?: () => void
}

export const Portal: React.FC<{ selector?: string; clickOutside?: () => void }> = ({
  children,
  selector = '#portal',
  clickOutside,
}) => {
  const ref = useRef(null)
  const clickOutsideHandler = (e: MouseEvent): void => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (ref?.current?.contains && !(ref.current! as any).contains(e.target)) {
      clickOutside?.()
    }
  }
  React.useEffect(() => {
    window.addEventListener('click', clickOutsideHandler)
    return () => window.removeEventListener('click', clickOutsideHandler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <UniversalPortal selector={selector}>
      <div ref={ref}>{children}</div>
    </UniversalPortal>
  )
}

Portal.displayName = 'Portal'

export const WithPortal: React.FC<WithPortalProps> = ({
  children,
  component,
  selector = '#portal',
  isActive = false,
  clickOutside,
}) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    r: 0,
    b: 0,
    vw: 0,
    vh: 0,
  })

  const ref = useRef<HTMLDivElement>(null)

  const updatePosition = (): void => {
    if (ref && ref.current) {
      const bounding = ref.current.getBoundingClientRect()
      setPosition({
        x: bounding.left,
        y: bounding.top,
        w: bounding.width,
        h: bounding.height,
        r: bounding.right,
        b: bounding.bottom,
        vw: window.innerWidth,
        vh: window.innerHeight,
      })
    }
  }

  React.useEffect(() => {
    updatePosition()
    window.addEventListener('resize', updatePosition)
    return () => window.removeEventListener('resize', updatePosition)
  }, [])

  return (
    <React.Fragment>
      <div ref={ref}>{children}</div>
      {isActive && (
        <Portal selector={selector} clickOutside={clickOutside}>
          {component(position)}
        </Portal>
      )}
    </React.Fragment>
  )
}

WithPortal.displayName = 'WithPortal'
