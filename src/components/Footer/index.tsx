import React from 'react'
import styled from 'utils/styled-components'
import { FaGithub } from 'react-icons/fa'

type FooterProps = {}

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.footer.background};
  display: grid;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 460px;
`
const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  color: ${({ theme }) => theme.footer.fontColor};
  svg:first-of-type {
    color: ${({ theme }) => theme.footer.accent};
    font-size: 45px;
  }
  a {
    color: ${({ theme }) => theme.footer.fontColor};
    text-decoration: none;
    padding: 5px;
  }
`

const Footer = ({}: FooterProps) => {
  return (
    <StyledWrapper>
      <StyledInnerWrapper>
        <FaGithub />
        <p>
          <a target="__blank" href="https://github.com/xdk78">
            @xdk78
          </a>
          <a target="__blank" href="https://github.com/okwasniewski/">
            @okwasniewski
          </a>
        </p>
      </StyledInnerWrapper>
    </StyledWrapper>
  )
}
export default Footer
