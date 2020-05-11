import React, { useState, useRef } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { useInvertedBorderRadius } from '../../utils/use-inverted-border-radius'
import styled, { css } from '../../styled-components'
import { openSpring, closeSpring } from './animations'
import { useScrollConstraints } from '../../utils/use-scroll-constraints'
import { useWheelScroll } from '../../utils/use-wheel-scroll'
import { Title } from './Title'
import { Content } from './Content'
import { Image } from './Image'
import Button from '../Button'
type GridElementProps = {
  small?: boolean
  src?: string
  title?: string
  content?: string
}

type WrapperProps = {
  isSelected: boolean
}

const StyledCard = styled.div`
  height: 300px;
  :nth-child(4n + 1),
  :nth-child(4n + 4) {
    grid-column: span 2;
  }
  @media (max-width: 1500px) {
    :nth-child(4n + 1),
    :nth-child(4n + 4) {
      grid-column: span 1;
    }
  }
`

const StyledInnerWrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 100%;
  display: grid;
  pointer-events: none;
  align-items: center;
  ${({ isSelected }) =>
    isSelected &&
    css`
      top: 0;
      left: 0;
      right: 0;
      position: fixed;
      z-index: 1;
      overflow: hidden;
      padding: 40px 0;
    `}
`
const StyledCardContainer = styled(motion.div)<WrapperProps>`
  pointer-events: auto;
  position: relative;
  border-radius: 20px;
  background: ${({ theme }) => theme.gridElements.background};
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  ${({ isSelected }) =>
    isSelected &&
    css`
      height: auto;
      max-width: 700px;
      overflow: hidden;
    `}
`
const StyledOverlay = styled(motion.div)`
  z-index: 1;
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  will-change: opacity;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
`
const StyledButtonWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
`

const dismissDistance = 100

const GridElement = ({ src, title, content }: GridElementProps) => {
  const gridRef = useRef(null)
  const [isSelected, setSelection] = useState<boolean>(false)
  const y = useMotionValue(0)
  const zIndex = useMotionValue(isSelected ? 2 : 0)
  const inverted = useInvertedBorderRadius(20)
  const constraints = useScrollConstraints(gridRef, isSelected)
  function checkSwipeToDismiss() {
    if (y.get() > dismissDistance) {
      setSelection(false)
    }
  }
  function checkZIndex(latest) {
    if (isSelected) {
      zIndex.set(2)
    } else if (!isSelected && latest.scaleX < 1.01) {
      zIndex.set(0)
    }
  }

  const containerRef = useRef(null)
  useWheelScroll(containerRef, y, constraints, checkSwipeToDismiss, isSelected)

  return (
    <StyledCard ref={containerRef}>
      <Overlay setSelection={setSelection} isSelected={isSelected} />
      <StyledInnerWrapper isSelected={isSelected}>
        <StyledCardContainer
          isSelected={isSelected}
          onClick={() => setSelection(true)}
          ref={gridRef}
          style={{ ...inverted, zIndex, y }}
          layoutTransition={isSelected ? openSpring : closeSpring}
          drag={isSelected ? 'y' : false}
          dragConstraints={constraints}
          onDrag={checkSwipeToDismiss}
          onUpdate={checkZIndex}
        >
          <Image isSelected={isSelected} src={src} pointOfInterest={200} />
          <Title title={title} isSelected={isSelected} />
          <Content content={content} />

          <StyledButtonWrapper>
            <Button whileTap={{ scale: 0.9 }} whileHover={{ translateY: -5 }}>
              View More
            </Button>
          </StyledButtonWrapper>
        </StyledCardContainer>
      </StyledInnerWrapper>
    </StyledCard>
  )
}

const Overlay = ({ isSelected, setSelection }) => (
  <StyledOverlay
    initial={false}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.2 }}
    style={{ pointerEvents: isSelected ? 'auto' : 'none' }}
    onClick={() => setSelection(false)}
  ></StyledOverlay>
)

export default GridElement
