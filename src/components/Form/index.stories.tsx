import React from 'react'
import styled from '../../styled-components'
import Form from '.'

export default {
  title: 'Organisms/Form',
}

const DarkWrapper = styled.div`
  background: black;
  padding: 50px;
`

export const normalInput = () => {
  return (
    <>
      <Form option="login" variant="light" />
      <DarkWrapper>
        <Form option="login" variant="dark" />
      </DarkWrapper>
    </>
  )
}

export const largeInput = () => {
  return (
    <>
      <Form option="register" variant="light" />
      <DarkWrapper>
        <Form option="register" variant="dark" />
      </DarkWrapper>
    </>
  )
}
