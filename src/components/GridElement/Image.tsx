import React from 'react'
import styled, { css } from 'utils/styled-components'
import { motion, useInvertedScale } from 'framer-motion'
import { closeSpring } from 'utils/animations'
import NextImage from 'next/image'

type StyledImageContainerProps = {
  isSelected?: boolean
}
const StyledImageContainer = styled(motion.div)<StyledImageContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100vw;
  background-size: cover;
  transform: translateZ(0);
  ${({ isSelected }) =>
    isSelected &&
    css`
      height: 300px;
    `}
`

export const Image = ({ isSelected, src, width, height }) => {
  const inverted = useInvertedScale()

  return (
    <StyledImageContainer
      isSelected={isSelected}
      style={{ ...inverted, originX: 0, originY: 0 }}
    >
      <motion.section
        initial={false}
        animate={isSelected ? { x: -20, y: -20 } : { x: 0, y: 0 }}
        transition={closeSpring}
      >
        <NextImage src={src} alt={src} width={width} height={height} />
      </motion.section>
    </StyledImageContainer>
  )
}
