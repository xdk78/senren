import React, { useState } from 'react'
import styled, { css } from 'utils/styled-components'
import Navbar from 'components/Navbar'
import Button from 'components/Button'
import Footer from 'components/Footer'
import MobileNav from 'components/MobileNav'
import { Spacing, DeviceWidth } from 'themes/constants'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

type UserPageTemplateProps = {
  children: any
}

type StyledWrapperProps = {
  visible?: boolean
}

export const StyledPageWrapper = styled.div`
  height: 100%;
  padding: ${Spacing.large}px;
  max-width: 1100px;

  @media (min-width: 2160px) {
    max-width: 1400px;
  }

  @media (max-width: ${DeviceWidth.mobile}px) {
    width: 100vw;
    padding: ${Spacing.small}px;
  }
`

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin-top: 20px;
  margin-bottom: 50px;
  grid-gap: 20px;
`

const StyledWrapper = styled.div<StyledWrapperProps>`
  background-color: ${({ theme }) => theme.background};
  transition: 0.3s;
  display: grid;
  justify-content: center;
  @media (max-width: 900px) {
    padding: 0px;
  }

  @media (min-width: 900px) {
    padding-left: 320px;
  }
  ${({ visible }) =>
    visible &&
    css`
      padding: 0 150px 0 150px;
    `}
`

const StyledToggleButton = styled(Button)`
  position: fixed;
  bottom: 40px;
  left: 40px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  @media (max-width: 900px) {
    display: none;
  }
`

const UserPageTemplate = ({ children }: UserPageTemplateProps) => {
  const [isHidden, setVisibility] = useState<boolean>(false)
  const ToggleNav = () => {
    setVisibility(!isHidden)
  }
  return (
    <>
      <MobileNav />
      <Navbar visible={isHidden} isLoggedIn={false} />
      <StyledWrapper visible={isHidden}>
        <StyledToggleButton whileTap={{ scale: 0.9 }} onClick={ToggleNav}>
          {isHidden ? <FaArrowRight /> : <FaArrowLeft />}
        </StyledToggleButton>
        {children}
      </StyledWrapper>
      <Footer />
    </>
  )
}

export default UserPageTemplate
