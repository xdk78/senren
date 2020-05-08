import React from 'react'
import styled from '../../styled-components'
import GridElement from '../GridElement'
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
  grid-template-columns: auto 1fr auto auto;
  width: 100%;
  margin-bottom: 10px;
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
  display: flex;
  width: 100%;
  align-items: center;
  padding-bottom: 20px;
  @media (max-width: 1000px) {
    display: none;
  }
`
const StyledRating = styled.p`
  color: ${({ theme }) => theme.fontColor};
  font-size: 24px;
  font-weight: 600;
  padding: 37px;
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
      <GridElement src={image} small />
      <StyledInnerWrapper>
        <Heading>{title}</Heading>
        <Paragraph>{description}</Paragraph>
      </StyledInnerWrapper>
      <SecondInnerWraper>
        {WrapButton(FaAward)({ text: award })}
      </SecondInnerWraper>
      <StyledRating>{rating}</StyledRating>
    </StyledWrapper>
  )
}
export default ListElement
