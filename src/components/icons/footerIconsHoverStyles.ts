import { SxStyleProp } from 'theme-ui'

const pseudoClassStyle: SxStyleProp = {
  content: JSON.stringify(""),
  position: 'absolute',
  bottom: '0',
  width: '0px',
  height: '2px',
  margin: '5px 0 0',
  transition: 'all 0.1s ease-in-out',
  transitionDuration: '0.2s',
  opacity: 0,
  backgroundColor: 'text',
}

export const socialIconStyles: SxStyleProp = {
  position: 'relative',
  '&::after': {
    ...pseudoClassStyle,
    right: 'calc(50%)'
  },
  '&::before': {
    ...pseudoClassStyle,
    left: 'calc(50%)'
  },
  '&:hover': {
    '&::before': {
      width: '50%',
      opacity: 1
    },
    '&::after': {
      width: '50%',
      opacity: 1
    }
  }
}

