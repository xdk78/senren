import React from 'react'
import Link from 'next/link'
import styled from 'utils/styled-components'
import {
  FaSearch,
  FaFilm,
  FaPhotoVideo,
  FaStar,
  FaSlidersH,
} from 'react-icons/fa'

const NavWrapper = styled.div`
  background-color: ${({ theme }) => theme.mobileNav.background};
  width: 100vw;
  display: grid;
  border-radius: 25px 25px 0px 0px;
  grid-template-columns: repeat(5, 0.2fr);
  justify-items: center;
  position: fixed;
  bottom: 0;
  z-index: 99999;
  @media (min-width: 900px) {
    display: none;
  }
`

const IconWrapper = styled.div`
  padding: 12px;
  color: ${({ theme }) => theme.mobileNav.icon};
  border-radius: 50%;
  width: 40px;
  align-self: center;
  height: 40px;
  margin: 15px 0 25px 0;
  background-color: ${({ theme }) => theme.mobileNav.iconBackground};
`
const StyledLink = styled.a`
  color: ${({ theme }) => theme.mobileNav.icon};
`

const MobileNav = () => {
  return (
    <NavWrapper>
      <IconWrapper>
        <Link href="/">
          <StyledLink>
            <FaSearch />
          </StyledLink>
        </Link>
      </IconWrapper>
      <IconWrapper>
        <Link href="/movies">
          <StyledLink>
            <FaFilm />
          </StyledLink>
        </Link>
      </IconWrapper>
      <IconWrapper>
        <Link href="/tv">
          <StyledLink>
            <FaPhotoVideo />
          </StyledLink>
        </Link>
      </IconWrapper>
      <IconWrapper>
        <Link href="/">
          <StyledLink>
            <FaStar />
          </StyledLink>
        </Link>
      </IconWrapper>
      <IconWrapper>
        <Link href="/">
          <StyledLink>
            <FaSlidersH />
          </StyledLink>
        </Link>
      </IconWrapper>
    </NavWrapper>
  )
}
export default MobileNav
