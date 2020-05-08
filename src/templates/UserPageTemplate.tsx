import React from 'react'
import styled, { css } from '../styled-components'
import Navbar from '../components/Navbar'
import { useMediaQuery } from 'react-responsive'
import MobileNav from '../components/MobileNav'

type UserPageTemplateProps = {
  children: any
}
type StyledWrapperProps = {
  responsive: boolean
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  background-color: ${({ theme }) => theme.background};
  ${({ responsive }) =>
    responsive
      ? css`
          padding-left: 0px;
          width: 100vw;
        `
      : css`
          padding-left: 320px;
        `}
`

const UserPageTemplate = ({ children }: UserPageTemplateProps) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
  return (
    <>
      {isTabletOrMobile ? <MobileNav /> : <Navbar isLoggedIn={false} />}
      <StyledWrapper responsive={isTabletOrMobile}>{children}</StyledWrapper>
    </>
  )
}

export default UserPageTemplate
