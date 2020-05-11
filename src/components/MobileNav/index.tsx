import React from 'react'
import Link from 'next/link'
import styled from '../../styled-components'
import {
  FaSearch,
  FaFilm,
  FaPhotoVideo,
  FaStar,
  FaSlidersH,
} from 'react-icons/fa'

const NavWrapper = styled.div`
  background-color: ${({ theme }) => theme.mobileNav.background};
  width: 100%;
  display: grid;
  border-radius: 25px 25px 0px 0px;
  grid-template-columns: repeat(5, 0.2fr);
  justify-items: center;
  position: fixed;
  bottom: 0;
  z-index: 99999;
`

const IconWrapper = styled.div`
  padding: 20px;
  color: ${({ theme }) => theme.mobileNav.icon};
  border-radius: 50%;
  width: 60px;
  align-self: center;
  height: 60px;
  margin: 15px;
  background-color: ${({ theme }) => theme.mobileNav.iconBackground};
`

const MobileNav = () => {
  return (
    <NavWrapper>
      <IconWrapper>
        <Link href="/">
          <FaSearch />
        </Link>
      </IconWrapper>
      <IconWrapper>
        <Link href="/movies">
          <FaFilm />
        </Link>
      </IconWrapper>
      <IconWrapper>
        <Link href="/">
          <FaPhotoVideo />
        </Link>
      </IconWrapper>
      <IconWrapper>
        <Link href="/">
          <FaStar />
        </Link>
      </IconWrapper>
      <IconWrapper>
        <Link href="/">
          <FaSlidersH />
        </Link>
      </IconWrapper>
    </NavWrapper>
  )
}
export default MobileNav
