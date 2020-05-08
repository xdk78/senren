import React from 'react'
import styled, { css } from '../../styled-components'
import { IconType } from 'react-icons'

type StyledButtonIconProps = {
  award?: boolean
}

type ButtonIconProps = {
  award?: boolean
  children?: JSX.Element
  text?: any
}

const StyledButtonIcon = styled.a<StyledButtonIconProps>`
  color: ${({ theme }) => theme.nav.link};
  display: grid;
  grid-template-columns: 25px 1fr;
  margin: 35px 0px;
  margin-left: 60px;
  font-weight: 600;
  cursor: pointer;
  ${({ award }) =>
    award &&
    css`
      color: ${({ theme }) => theme.fontColor};
    `}
`

const WrapButton = (Icon: IconType) => (props: ButtonIconProps) => (
  <StyledButtonIcon award={props.award}>
    <Icon {...props} />
    {props.text}
  </StyledButtonIcon>
)

export default WrapButton
