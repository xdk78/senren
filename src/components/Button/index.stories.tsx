import React from 'react'
import styled from 'utils/styled-components'
import Button from '.'

export default {
  title: 'Atoms/Button',
}

const DarkWrapper = styled.div`
  background: black;
  padding: 50px;
`

export const normalButton = () => {
  return (
    <>
      <Button>Sign in</Button>
      <DarkWrapper>
        <Button>Register</Button>
      </DarkWrapper>
    </>
  )
}

export const largeButton = () => {
  return (
    <>
      <Button large>Sign in</Button>
      <DarkWrapper>
        <Button large>Register</Button>
      </DarkWrapper>
    </>
  )
}
