import * as React from 'react'
import { Box } from './main'
import { render } from '@testing-library/react'

describe('Box Component Tests', () => {
  it('successfully render', () => {
    const { container } = render(<Box />)
    expect(container).toBeInTheDocument()
  })
})
