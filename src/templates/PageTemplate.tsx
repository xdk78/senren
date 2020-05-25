import React, { useState, useEffect } from 'react'
import styled, { css } from 'utils/styled-components'
import { motion } from 'framer-motion'
import Navbar from 'components/Navbar'
import Button from 'components/Button'
import Footer from 'components/Footer'
import MobileNav from 'components/MobileNav'
import { Spacing, DeviceWidth } from 'themes/constants'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import firebase from 'firebase/clientApp'
import Router from 'next/router'
type UserPageTemplateProps = {
  children: any
}

type StyledWrapperProps = {
  visible?: boolean
}

export const StyledPageWrapper = styled.div`
  height: 100%;
  padding: ${Spacing.large}px;
  @media (min-width: 2160px) {
    min-width: 1400px;
  }

  @media (max-width: ${DeviceWidth.mobile}px) {
    width: 100vw;
  }
`

export const GridWrapper = styled(motion.div)`
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(calc(180px + 12vmin), 100%), 1fr)
  );
  grid-gap: 20px;
  grid-auto-flow: dense;
`
const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;
`

const StyledInnerWrapper = styled.div<StyledWrapperProps>`
  transition: 0.3s;
  justify-content: center;
  width: 100%;
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
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false)
  const [userEmail, setUserEmail] = useState<string>('')
  useEffect(() => {
    const user = firebase.auth().currentUser
    if (user) {
      setLoggedIn(true)
      setUserEmail(user.email)
    } else {
      setLoggedIn(false)
    }
  })
  const Logout = () => {
    firebase
      .auth()
      .signOut()
      .then(
        function () {
          Router.push('/login')
        },
        function (error) {
          console.log(error)
        }
      )
  }
  const ToggleNav = () => {
    setVisibility(!isHidden)
  }
  return (
    <>
      <MobileNav />
      <Navbar
        visible={isHidden}
        isLoggedIn={isLoggedIn}
        userEmail={userEmail}
        logout={Logout}
      />
      <StyledWrapper>
        <StyledInnerWrapper visible={isHidden}>
          <StyledToggleButton whileTap={{ scale: 0.9 }} onClick={ToggleNav}>
            {isHidden ? <FaArrowRight /> : <FaArrowLeft />}
          </StyledToggleButton>
          {children}
        </StyledInnerWrapper>
      </StyledWrapper>
      <Footer />
    </>
  )
}

export default UserPageTemplate
