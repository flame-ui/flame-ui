import * as React from 'react'
import { Text } from './main'
import { render } from '@testing-library/react'

describe('Box Component Tests', () => {
  it('successfully render', () => {
    const { container } = render(<Text />)
    expect(container).toBeInTheDocument()
  })
})
