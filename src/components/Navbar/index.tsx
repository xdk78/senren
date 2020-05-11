import React from 'react'
import Link from 'next/link'
import styled, { css } from '../../styled-components'
import WrapButton from '../ButtonIcon'
import Button from '../Button'
import {
  FaSearch,
  FaVideo,
  FaFilm,
  FaPhotoVideo,
  FaStar,
  FaSlidersH,
  FaLifeRing,
} from 'react-icons/fa'

type indexProps = {
  username?: string
  userEmail?: string
  isLoggedIn: boolean
  visible?: boolean
}
type NavWrapperProps = {
  visible?: boolean
}

const NavWrapper = styled.div<NavWrapperProps>`
  background-color: ${({ theme }) => theme.nav.background};
  width: 320px;
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
`
const TopWrapper = styled.div`
  padding: 25px;
  text-align: center;
`
const IconsWrapper = styled.div`
  padding: 25px;
  flex: 1;
`

const index = ({ username, userEmail, isLoggedIn, visible }: indexProps) => {
  return (
    <NavWrapper visible={visible}>
      {isLoggedIn ? (
        <TopWrapper>
          <h3>{username}</h3>
          <p>{userEmail}</p>
          <p>Logout</p>
        </TopWrapper>
      ) : (
        <TopWrapper>
          <Link href="/login">
            <Button>Log in</Button>
          </Link>
          <Link href="/register">
            <Button>Register</Button>
          </Link>
        </TopWrapper>
      )}
      <IconsWrapper>
        <Link href="/">{WrapButton(FaSearch)({ text: 'Explore' })}</Link>
        <Link href="/movies">{WrapButton(FaVideo)({ text: 'Movies' })}</Link>
        <Link href="/tvshows">{WrapButton(FaFilm)({ text: 'TV Shows' })}</Link>
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
