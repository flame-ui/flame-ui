import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { ThemeProvider } from '../ThemeProvider'
import { ButtonWrapper, ButtonProps } from './example/_base'

const TestButton: React.FC<ButtonProps> = (props) => {
  return (
    <ThemeProvider>
      <ButtonWrapper {...props}>Test</ButtonWrapper>
    </ThemeProvider>
  )
}

describe('FilledButton tests', () => {
  it('button disabled', () => {
    const mockCallBack = jest.fn()
    const { getByRole } = render(<TestButton onClick={mockCallBack} disabled />)

    fireEvent.click(getByRole('button'))

    expect(getByRole('button')).toBeDisabled()
    expect(mockCallBack.mock.calls).toHaveLength(0)
  })
  it('button not disabled', () => {
    const mockCallBack = jest.fn()
    const { getByRole } = render(<TestButton onClick={mockCallBack} />)

    fireEvent.click(getByRole('button'))

    expect(getByRole('button')).not.toHaveAttribute('disabled')
    expect(mockCallBack.mock.calls).toHaveLength(1)
  })
})
