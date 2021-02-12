/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Text, Flex, Image, Container, SxStyleProp } from 'theme-ui'
import React, { ReactNode, FunctionComponent } from 'react'
import { Footer } from '../components/Footer'
import { linearGradientAnimation, blinkAnimation } from '../utils/animations'
import { gradientLinear } from '../utils/backgrounds'
import BorderXImage from '../assets/images/frame_border_X.png'
import BorderYImage from '../assets/images/frame_border_Y.png'
import ProfilePic from '../assets/images/profile_pic.jpg'

const Home: FunctionComponent = () => (
  <HomeContainer>
    <ContainerFrame>
      <Flex
        as="main"
        mt={[80, 150]}
        px={[1, 2]}
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Box>
          <Box
            sx={{
              borderImage: `url(${BorderXImage}) repeat center center`,
              borderRadius: '50%',
              borderStyle: 'solid',
              borderWidth: '4px',
              position: 'relative',
              width: [150, 300, 400],
              height: [150, 300, 400],
              overflow: 'hidden',
              m: '0 auto'
            }}>
            <Image
              src={ProfilePic} />
          </Box>
          <Box
            sx={{
              textAlign: 'center'
            }}>
            <Text
              as="p"
              mt={[4, 5]}>
              Jose Terrones. Software Engineer.
            </Text>
            <Text
              as="p"
              mt={[3]}>
              Sometimes I do websites among other things.
            </Text>
            <Text
              as="p"
              mt={[5, 6]}>
              This site is a work in progress
              <AnimatedDotSpan />
              <AnimatedDotSpan delay=".2s" />
              <AnimatedDotSpan delay=".4s" />
            </Text>
          </Box>
        </Box>
      </Flex>
      <Footer />
    </ContainerFrame>
  </HomeContainer >
);

const HomeContainer: FunctionComponent<ReactComponentChildren> = ({
  children
}) => {
  return (
    <Container
      sx={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundImage: gradientLinear,
        backgroundSize: '400% 400%',
        animationName: linearGradientAnimation,
        animationDuration: '5s',
        animationIterationCount: 'infinite',
      }}>
      {children}
    </Container>
  )
}

const ContainerFrame: FunctionComponent<ReactComponentChildren> = ({
  children
}) => {
  const pseudoClassStyles: SxStyleProp = {
    content: JSON.stringify(""),
    width: '100%',
    height: 8,
    position: 'absolute',
    background: `url(${BorderXImage}) repeat-x 0 -2px`,
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        overflow: 'hidden',
        background: `url(${BorderYImage}) repeat-y 0%, url(${BorderYImage}) repeat-y 100%`,
        backgroundSize: 8,
        '&::after': {
          ...pseudoClassStyles,
          top: 0
        },
        '&::before': {
          ...pseudoClassStyles,
          bottom: 0
        }
      }}>
      {children}
    </Box>
  )
}

const AnimatedDotSpan: FunctionComponent<AnimatedDotSpanProps> = ({
  delay
}) => {
  return (
    <Text as="span"
      sx={{
        animationName: blinkAnimation,
        animationDuration: '1.4s',
        animationIterationCount: 'infinite',
        animationFillMode: 'both',
        animationDelay: `${delay ? delay : 0}`
      }}>.</Text>
  )
}

interface ReactComponentChildren {
  children: ReactNode;
}

interface AnimatedDotSpanProps {
  delay?: String;
}

export default Home
