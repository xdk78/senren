import React from 'react'
import styled from '../styled-components'

type AuthPageTemplateProps = {
  children: any
}

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-template-rows: 100vh;
  grid-gap: 50px;
  justify-items: center;
  align-items: center;
  text-align: center;
  grid-auto-flow: dense;

  background-color: ${({ theme }) => theme.primaryDark};
  @media (max-width: 1055px) {
    svg:only-of-type {
      display: none;
    }
  }
`

const AuthPageTemplate = ({ children }: AuthPageTemplateProps) => {
  return <StyledWrapper>{children}</StyledWrapper>
}

export default AuthPageTemplate
