import styled from 'utils/styled-components'

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
  height: 500px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-repeat: no-repeat;
  text-align: left;
`

const StyledInnerWrapper = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(25px);
  border-radius: 0px 0px 20px 20px;
  padding: 20px;
  padding-top: 10px;
  @media (max-width: 748px) {
    padding: 15px;
    padding-top: 5px;
  }
`

const StyledHeading = styled.h3`
  color: white;
  font-size: 28px;
  padding-bottom: 15px;
  text-shadow: 2px 2px 8px rgb(49 49 49 / 79%);
  @media (max-width: 748px) {
    padding: 0px;
  }
`
const StyledParagraph = styled.p`
  color: white;
  font-weight: 300;
  padding-bottom: 12px;
  text-align: justify;
  text-shadow: 2px 2px 8px rgb(49 49 49 / 79%);
  @media (max-width: 748px) {
    padding: 0px;
  }
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
