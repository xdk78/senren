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
  padding: 0px 8px 0px 0px;
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
  padding: 36px 0px 0px 0px;
  text-align: center;
`

const IconsWrapper = styled.div`
  padding: 0px 64px;
  flex: 1;
`

const UserWrapper = styled.div`
  color: ${({ theme }) => theme.fontColor};
  font-size: 18px;
  text-align: center;
  padding: 12px;
`

const index = ({ userEmail, isLoggedIn, visible, logout }: indexProps) => {
  return (
    <NavWrapper visible={visible}>
      {isLoggedIn ? (
        <TopWrapper>
          <UserWrapper>{userEmail}</UserWrapper>
          <Button
            whileTap={{ scale: 0.9 }}
            whileHover={{ translateY: -5 }}
            onClick={logout}
          >
            Logout
          </Button>
        </TopWrapper>
      ) : (
        <TopWrapper>
          <Link href="/login">
            <Button whileTap={{ scale: 0.9 }} whileHover={{ translateY: -5 }}>
              Log in
            </Button>
          </Link>
          <Link href="/register">
            <Button whileTap={{ scale: 0.9 }} whileHover={{ translateY: -5 }}>
              Register
            </Button>
          </Link>
        </TopWrapper>
      )}
      <IconsWrapper>
        <Link href="/">{WrapButton(FaSearch)({ text: 'Explore' })}</Link>
        <Link href="/movie">{WrapButton(FaVideo)({ text: 'Movies' })}</Link>
        <Link href="/tv">{WrapButton(FaFilm)({ text: 'TV Shows' })}</Link>
        <Link href="/watchlist">
          {WrapButton(FaPhotoVideo)({ text: 'Watchlist' })}
        </Link>
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
