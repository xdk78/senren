import React from 'react'
import styled from 'utils/styled-components'

type StyledWrapperProps = {}

type FormProps = {
  text: string
  children: JSX.Element
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 20px;
  padding: 60px 20px;
  border-radius: 23px;
  justify-items: stretch;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
`

export const StyledHeading = styled.h1`
  color: ${({ theme }) => theme.buttonFont};
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

const FormWrapper = ({ text, children }: FormProps) => {
  return (
    <StyledWrapper>
      <StyledHeading>{text}</StyledHeading>
      {children}
    </StyledWrapper>
  )
}

export default FormWrapper
