import React from 'react'
import Link from 'next/link'
import styled, { css } from 'utils/styled-components'
import WrapButton from 'components/ButtonIcon'
import Button from 'components/Button'
import {
  FaSearch,
  FaVideo,
  FaFilm,
  FaPhotoVideo,
  FaStar,
  FaSlidersH,
  FaLifeRing,
} from 'react-icons/fa'
import Paragraph from 'components/Paragraph'

type indexProps = {
  userEmail?: string
  isLoggedIn: boolean
  visible?: boolean
  logout?: () => void
}
type NavWrapperProps = {
  visible?: boolean
}

const NavWrapper = styled.div<NavWrapperProps>`
  background-color: ${({ theme }) => theme.nav.background};
  max-width: 320px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  position: fixed;
  transition: 0.3s;
  ${({ visible }) =>
    visible &&
    css`
      transform: translateX(-100%);
    `}
  @media (max-width: 900px) {
    display: none;
  }
`
const TopWrapper = styled.div`
  padding: 25px;
  text-align: center;
`
const IconsWrapper = styled.div`
  padding: 25px;
  flex: 1;
`

const index = ({ userEmail, isLoggedIn, visible, logout }: indexProps) => {
  return (
    <NavWrapper visible={visible}>
      {isLoggedIn ? (
        <TopWrapper>
          <Paragraph>{userEmail}</Paragraph>
          <Button onClick={logout}>Logout</Button>
        </TopWrapper>
      ) : (
        <TopWrapper>
          <Link href="/login">
            <a>
              <Button whileTap={{ scale: 0.9 }} whileHover={{ translateY: -5 }}>
                Log in
              </Button>
            </a>
          </Link>
          <Link href="/register">
            <a>
              <Button whileTap={{ scale: 0.9 }} whileHover={{ translateY: -5 }}>
                Register
              </Button>
            </a>
          </Link>
        </TopWrapper>
      )}
      <IconsWrapper>
        <Link href="/">{WrapButton(FaSearch)({ text: 'Explore' })}</Link>
        <Link href="/movie">{WrapButton(FaVideo)({ text: 'Movies' })}</Link>
        <Link href="/tv">{WrapButton(FaFilm)({ text: 'TV Shows' })}</Link>
        <Link href="/">{WrapButton(FaPhotoVideo)({ text: 'Watchlist' })}</Link>
        <Link href="/">{WrapButton(FaStar)({ text: 'Favourite' })}</Link>
        <Link href="/">{WrapButton(FaSlidersH)({ text: 'Settings' })}</Link>
        <Link href="/">
          {WrapButton(FaLifeRing)({ text: 'Help & Report' })}
        </Link>
      </IconsWrapper>
    </NavWrapper>
  )
}
export default index
