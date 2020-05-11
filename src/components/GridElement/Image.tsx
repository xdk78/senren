import React from 'react'
import styled, { css } from '../../styled-components'
import { motion, useInvertedScale } from 'framer-motion'
import { closeSpring } from './animations'

type StyledImageContainerProps = {
  isSelected?: boolean
}
const StyledImageContainer = styled(motion.div)<StyledImageContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100vw;
  transform: translateZ(0);
  ${({ isSelected }) =>
    isSelected &&
    css`
      height: 300px;
    `}
`

const StyledImage = styled(motion.img)``
export const Image = ({ isSelected, pointOfInterest = 0, src }) => {
  const inverted = useInvertedScale()

  return (
    <StyledImageContainer
      isSelected={isSelected}
      style={{ ...inverted, originX: 0, originY: 0 }}
    >
      <StyledImage
        src={src}
        alt=""
        initial={false}
        animate={
          isSelected ? { x: -20, y: -20 } : { x: -pointOfInterest, y: 0 }
        }
        transition={closeSpring}
      />
    </StyledImageContainer>
  )
}
