import React from 'react'
import { motion, useInvertedScale } from 'framer-motion'
import styled from 'utils/styled-components'
import Paragraph from 'components/Paragraph'

const ContentContainer = styled(motion.div)`
  padding: 350px 35px 0px 35px;
  max-width: 480px;
  width: 90vw;
  text-align: justify;
`

export const Content = ({ content }) => {
  const inverted = useInvertedScale()
  return (
    <ContentContainer style={{ ...inverted, originY: 0, originX: 0 }}>
      <Paragraph>{content}</Paragraph>
    </ContentContainer>
  )
}
