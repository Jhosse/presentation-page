/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx, SxStyleProp } from 'theme-ui'
import React, { FunctionComponent } from 'react'
import { Github } from './icons/Github'
import { LinkedIn } from './icons/LinkedIn'

const footerStyles: SxStyleProp = {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  p: [3, 4]
}

export const Footer: FunctionComponent = () => {
  return (
    <Flex
      as="footer"
      sx={{
        ...footerStyles,
        justifyContent: ['center', 'flex-end']
      }}>
      <Github styles={{ mr: 10 }} />
      <LinkedIn />
    </Flex>
  )
}
