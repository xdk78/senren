import React from 'react'
import Link from 'next/link'
import styled from 'utils/styled-components'
import ListElementThumbnail from 'components/ListElementThumbnail'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import ImagePlaceholder from 'public/img-placeholder.svg'

type ListElementProps = {
  title: string
  overview: string
  rating?: string
  image: string
  link?: string
}

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px 250px auto auto;
  width: 100%;
  margin-bottom: 24px;
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
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`

const StyledRating = styled.p`
  color: ${({ theme }) => theme.fontColor};
  font-size: 24px;
  font-weight: 600;
  text-align: right;
`

const StyledParagraph = styled(Paragraph)`
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  padding: 0;
`

const ListElement = ({
  title,
  overview,
  rating,
  image,
  link,
}: ListElementProps) => {
  return (
    <StyledWrapper>
      <ListElementThumbnail
        src={
          image ? `https://image.tmdb.org/t/p/w500/${image}` : ImagePlaceholder
        }
        width={85}
        height={85}
      />
      <StyledInnerWrapper>
        {link ? (
          <Link href={link}>
            <StyledHeading title={title}>{title}</StyledHeading>
          </Link>
        ) : (
          <StyledHeading title={title}>{title}</StyledHeading>
        )}
      </StyledInnerWrapper>
      <SecondInnerWraper>
        <StyledParagraph>{overview}</StyledParagraph>
      </SecondInnerWraper>
      <StyledRating>{rating}</StyledRating>
    </StyledWrapper>
  )
}
export default ListElement
