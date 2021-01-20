import React from 'react'

export const WithClickOutside: React.FC<{ handler: () => void }> = ({ handler, children }) => {
  const ref = React.useRef<HTMLDivElement>(null)

  const handleClick = (event: any): void => {
    if (ref.current && !ref.current.contains(event.target)) {
      handler()
    }
  }

  React.useEffect(() => {
    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [])

  return (
    <div ref={ref} style={{ display: 'flex' }}>
      {children}
    </div>
  )
}

WithClickOutside.displayName = 'WithClickOutside'
