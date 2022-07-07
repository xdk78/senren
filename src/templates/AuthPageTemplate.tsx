import styled from 'utils/styled-components'
import { DeviceWidth } from 'themes/constants'

type AuthPageTemplateProps = {
  children?: JSX.Element | JSX.Element[]
}

const StyledWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-template-rows: 100vh;
  grid-gap: 48px;
  justify-items: center;
  align-items: center;
  text-align: center;

  grid-auto-flow: dense;
  background-color: ${({ theme }) => theme.auth.background};

  @media (max-width: ${DeviceWidth.mobile}px) {
    svg:only-of-type {
      display: none;
    }
  }
`

const AuthPageTemplate = ({ children }: AuthPageTemplateProps) => {
  return <StyledWrapper>{children}</StyledWrapper>
}

export default AuthPageTemplate
