import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import { useTheme } from '../../helpers/useTheme'
import { SVG } from '../SVG'

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

const Wrapper = styled.div`
  transform-origin: center;
  animation: 1.8s linear infinite;
  animation-name: ${rotateAnimation};
`

const Circle = styled.circle`
  fill: none;
  stroke-width: 8;
  stroke-linecap: round;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  &:nth-child(2) {
    animation-name: ${dashAnimation};
  }
`

export interface SpinnerProps {
  size?: string
  fgColor?: string
  bgColor?: string
  strokeWidth?: number
}

export const Spinner = ({
  size = '56px',
  fgColor = 'primary',
  bgColor = 'backgrounds.1',
  strokeWidth = 6,
}: SpinnerProps): React.ReactElement => {
  const { themeGet } = useTheme()
  return (
    <Wrapper>
      <SVG width={size} height={size} viewBox="0 0 100 100">
        <Circle
          cx={50}
          cy={50}
          r={40}
          strokeWidth={strokeWidth}
          stroke={themeGet(`colors.${bgColor}`)}
        />
        <Circle
          cx={50}
          cy={50}
          r={40}
          strokeWidth={strokeWidth}
          stroke={themeGet(`colors.${fgColor}`)}
        />
      </SVG>
    </Wrapper>
  )
}
