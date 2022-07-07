import { motion, useDeprecatedInvertedScale } from 'framer-motion'
import { closeSpring, openSpring } from 'utils/animations'
import styled from 'utils/styled-components'

const StyledTitleWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 300px;
`

const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.gridElements.fontColor};
  text-shadow: 2px 2px 8px rgb(49 49 49 / 79%);
`

const scaleTranslate = ({ x, y, scaleX, scaleY }) =>
  `scaleX(${scaleX}) scaleY(${scaleY}) translate(${x}, ${y}) translateZ(0)`

export const Title = ({ title, isSelected }) => {
  const inverted = useDeprecatedInvertedScale()
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
