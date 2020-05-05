import React from 'react'
import styled, { css } from '../../styled-components'
import { IconType } from 'react-icons'

type StyledButtonIconProps = {
  variant?: 'light' | 'dark'
  award?: boolean
}

type ButtonIconProps = {
  variant?: 'light' | 'dark'
  award?: boolean
  children?: JSX.Element
  text: string
}

const StyledButtonIcon = styled.a<StyledButtonIconProps>`
  color: ${({ theme }) => theme.gray200};
  display: grid;
  grid-template-columns: 25px 1fr;
  ${({ variant }) =>
    variant === 'dark' &&
    css`
      color: ${({ theme }) => theme.gray200};
    `};
`

const WrapButton = (Icon: IconType) => (props: ButtonIconProps) => (
  <StyledButtonIcon variant={props.variant} award={props.award}>
    <Icon {...props} />
    {props.text}
  </StyledButtonIcon>
)

export default WrapButton
