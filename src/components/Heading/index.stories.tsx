import React from 'react'
import styled from 'utils/styled-components'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'

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
        <Heading>Explore</Heading>
        <Paragraph>Discover your new favourite show</Paragraph>
      </DarkWrapper>
    </>
  )
}

export const NormalHeading = () => {
  return (
    <>
      <Heading>Explore</Heading>
      <DarkWrapper>
        <Heading>Explore</Heading>
      </DarkWrapper>
    </>
  )
}

export const ParagraphStory = () => {
  return (
    <>
      <Paragraph>Discover your new favourite show</Paragraph>
      <DarkWrapper>
        <Paragraph>Discover your new favourite show</Paragraph>
      </DarkWrapper>
    </>
  )
}
