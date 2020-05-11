import React from 'react'
import styled from '../../styled-components'
import ListElementThumbnail from '../ListElementThumbnail'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import WrapButton from '../ButtonIcon'
import { FaAward } from 'react-icons/fa'

type ListElementProps = {
  title: string
  description: string
  award: string
  rating: string
  image: string
}

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  width: 100%;
  margin-bottom: 15px;
`
const StyledInnerWrapper = styled.div`
  display: flex;
  padding: 10px;
  padding-left: 25px;
  flex-direction: column;
  justify-items: center;
  color: ${({ theme }) => theme.fontColor};
`
const SecondInnerWraper = styled.div`
  margin: 15px;
  a {
    margin: 0px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`
const StyledHeading = styled(Heading)`
  margin: 0px;
`
const StyledParagraph = styled(Paragraph)`
  margin: 0px;
`
const StyledRating = styled.p`
  color: ${({ theme }) => theme.fontColor};
  font-size: 24px;
  font-weight: 600;
  text-align: right;
`

const ListElement = ({
  title,
  description,
  award,
  rating,
  image,
}: ListElementProps) => {
  return (
    <StyledWrapper>
      <ListElementThumbnail src={image} />
      <StyledInnerWrapper>
        <StyledHeading>{title}</StyledHeading>
        <StyledParagraph>{description}</StyledParagraph>
      </StyledInnerWrapper>
      <SecondInnerWraper>
        {WrapButton(FaAward)({ text: award })}
      </SecondInnerWraper>
      <StyledRating>{rating}</StyledRating>
    </StyledWrapper>
  )
}
export default ListElement
