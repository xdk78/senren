import React from 'react'
import styled from '../../styled-components'
import Heading from '.'
import Paragraph from '../Paragraph'

export default {
  title: 'Atoms/Headings',
}

const DarkWrapper = styled.div`
  background: black;
  padding: 50px;
  margin: 15px;
`

export const HeadingTitle = () => {
  return (
    <>
      <Heading>Explore</Heading>
      <Paragraph>Discover your new favourite show</Paragraph>
      <DarkWrapper>
        <Heading variant="dark">Explore</Heading>
        <Paragraph variant="dark">Discover your new favourite show</Paragraph>
      </DarkWrapper>
    </>
  )
}

export const NormalHeading = () => {
  return (
    <>
      <Heading>Explore</Heading>
      <DarkWrapper>
        <Heading variant="dark">Explore</Heading>
      </DarkWrapper>
    </>
  )
}

export const ParagraphStory = () => {
  return (
    <>
      <Paragraph>Discover your new favourite show</Paragraph>
      <DarkWrapper>
        <Paragraph variant="dark">Discover your new favourite show</Paragraph>
      </DarkWrapper>
    </>
  )
}
