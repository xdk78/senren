import React from 'react'
import { motion, useInvertedScale } from 'framer-motion'
import styled from '../../styled-components'
import Paragraph from '../Paragraph'

const ContentContainer = styled(motion.div)`
  padding: 350px 35px 0px 35px;
  max-width: 700px;
  width: 90vw;
`

export const Content = ({ content }) => {
  const inverted = useInvertedScale()
  return (
    <ContentContainer style={{ ...inverted, originY: 0, originX: 0 }}>
      <Paragraph>{content}</Paragraph>
    </ContentContainer>
  )
}
