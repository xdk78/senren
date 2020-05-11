import * as React from 'react'
import { motion, useInvertedScale } from 'framer-motion'
import { closeSpring, openSpring } from '../../utils/animations'
import styled from '../../styled-components'
import Heading from '../Heading'

const StyledTitleWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 300px;
`
const StyledTitle = styled(Heading)`
  color: ${({ theme }) => theme.gridElements.fontColor};
`
const scaleTranslate = ({ x, y, scaleX, scaleY }) =>
  `scaleX(${scaleX}) scaleY(${scaleY}) translate(${x}, ${y}) translateZ(0)`

export const Title = ({ title, isSelected }) => {
  const inverted = useInvertedScale()
  const x = isSelected ? 30 : 15
  const y = x

  return (
    <StyledTitleWrapper
      initial={false}
      animate={{ x, y }}
      transition={isSelected ? openSpring : closeSpring}
      transformTemplate={scaleTranslate}
      style={{ ...inverted, originX: 0, originY: 0 }}
    >
      <StyledTitle>{title}</StyledTitle>
    </StyledTitleWrapper>
  )
}
