import React, { useState } from 'react'
import styled, { css } from '../styled-components'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import Footer from '../components/Footer'
import { useMediaQuery } from 'react-responsive'
import MobileNav from '../components/MobileNav'
import { DeviceWidth } from '../themes/constants'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

type UserPageTemplateProps = {
  children: any
}
type StyledWrapperProps = {
  responsive: boolean
  visible?: boolean
}
type StyledButtonToggle = {
  responsive: boolean
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  background-color: ${({ theme }) => theme.background};
  transition: 0.3s;
  display: grid;
  justify-content: center;
  ${({ responsive }) =>
    responsive
      ? css`
          padding-left: 0px;
          width: 100vw;
        `
      : css`
          padding-left: 320px;
        `}
  ${({ visible }) =>
    visible &&
    css`
      padding: 0 150px 0 150px;
    `}
`
const StyledToggleButton = styled(Button)<StyledButtonToggle>`
  position: fixed;
  bottom: 40px;
  left: 40px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  ${({ responsive }) =>
    responsive &&
    css`
      display: none;
    `};
`

const UserPageTemplate = ({ children }: UserPageTemplateProps) => {
  const [isHidden, setVisibility] = useState<boolean>(false)
  const ToggleNav = () => {
    setVisibility(!isHidden)
  }
  const isTabletOrMobile = useMediaQuery({
    query: `(max-width: ${DeviceWidth.mobile}px)`,
  })
  return (
    <>
      {isTabletOrMobile ? (
        <MobileNav />
      ) : (
        <Navbar visible={isHidden} isLoggedIn={false} />
      )}
      <StyledWrapper visible={isHidden} responsive={isTabletOrMobile}>
        <StyledToggleButton responsive={isTabletOrMobile} onClick={ToggleNav}>
          {isHidden ? <FaArrowRight /> : <FaArrowLeft />}
        </StyledToggleButton>
        {children}
      </StyledWrapper>
      <Footer />
    </>
  )
}

export default UserPageTemplate
