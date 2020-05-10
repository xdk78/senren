import React from 'react'
import styled from '../../styled-components'

type FeaturedGridElementProps = {
  image: string
  title: string
  description: string
  about: string
}

type StyledWrapperProps = {
  image: string
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  border-radius: 20px;
  max-width: 1400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-repeat: no-repeat;
`

const StyledInnerWrapper = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(25px);
  border-radius: 0px 0px 20px 20px;
  padding: 20px;
  padding-top: 10px;
`

const StyledHeading = styled.h3`
  color: white;
  font-size: 28px;
  padding-bottom: 15px;
`
const StyledParagraph = styled.p`
  color: white;
  font-weight: 300;
  padding-bottom: 13px;
`

const FeaturedGridElement = ({
  image,
  title,
  description,
  about,
}: FeaturedGridElementProps) => {
  return (
    <StyledWrapper image={image}>
      <StyledInnerWrapper>
        <StyledHeading>{title}</StyledHeading>
        <StyledParagraph>{about}</StyledParagraph>
        <StyledParagraph>{description}</StyledParagraph>
      </StyledInnerWrapper>
    </StyledWrapper>
  )
}
export default FeaturedGridElement
