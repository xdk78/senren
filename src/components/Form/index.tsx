import React from 'react'
import styled, { css } from '../../styled-components'

type StyledWrapperProps = {
  variant?: 'light' | 'dark'
}

type FormProps = {
  variant?: 'light' | 'dark'
  text: string
  children: JSX.Element
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  display: flex;
  flex-direction: column;
  max-width: 550px;
  padding: 60px 20px;
  border-radius: 23px;
  justify-items: stretch;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryLight};
  ${({ variant }) =>
    variant === 'dark'
      ? css`
          background-color: ${({ theme }) => theme.primaryDark};
        `
      : css`
          box-shadow: 4px 4px 25px rgba(81, 153, 255, 0.3);
        `};
`

export const StyledHeading = styled.h1`
  color: ${({ theme }) => theme.white};
`
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 35px;
`

const FormWrapper = ({ variant, text, children }: FormProps) => {
  return (
    <StyledWrapper variant={variant}>
      <StyledHeading>{text}</StyledHeading>
      {children}
    </StyledWrapper>
  )
}

export default FormWrapper
