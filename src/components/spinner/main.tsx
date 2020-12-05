import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import { useTheme } from '../../../utils/useTheme'

const rotateAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const dashAnimation = keyframes`
    0% {
        stroke-dasharray: 20px, 230px;
        stroke-dashoffset: 0px;
    }
    50% {
        stroke-dasharray: 150px, 100px;
        stroke-dashoffset: -75px;
    }
    100% {
        stroke-dasharray: 20px, 230px;
        stroke-dashoffset: -250px;
    }
`

const Wrapper = styled.svg`
  transform-origin: center;
  animation: 1.8s linear infinite;
  animation-name: ${rotateAnimation};
`

const Circle = styled.circle`
  fill: none;
  stroke-width: 5;
  stroke-linecap: round;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  &:nth-child(2) {
    animation-name: ${dashAnimation};
  }
`

const spinnerSizes = {
  small: 32,
  medium: 56,
}

type SpinnerSize = keyof typeof spinnerSizes

interface SpinnerProps {
  size: SpinnerSize
}

export const Spinner = ({ size = 'medium' }: SpinnerProps): React.ReactElement => {
  const { themeGet } = useTheme()
  const spinnerSize = spinnerSizes[size]
  return (
    <Wrapper width={spinnerSize} height={spinnerSize} viewBox="0 0 100 100">
      <Circle cx={50} cy={50} r={40} stroke={themeGet('colors.backgrounds.1')} />
      <Circle cx={50} cy={50} r={40} stroke={themeGet('colors.primary')} />
    </Wrapper>
  )
}
