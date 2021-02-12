import { keyframes } from '@emotion/react'

const linearGradientAnimation = () => (keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }`
)

const blinkAnimation = () => (keyframes`
  0% {
    opacity: .2;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: .2;
  }`
)

export { linearGradientAnimation, blinkAnimation }
