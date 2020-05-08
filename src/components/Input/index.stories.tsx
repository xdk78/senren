import React from 'react'
import styled from '../../styled-components'
import Input from '.'

export default {
  title: 'Atoms/Inputs',
}

const DarkWrapper = styled.div`
  background: black;
  padding: 50px;
`

export const normalInput = () => {
  return (
    <>
      <DarkWrapper>
        <Input placeholder="Email" />
      </DarkWrapper>
      <DarkWrapper>
        <Input placeholder="Email" />
      </DarkWrapper>
    </>
  )
}

export const largeInput = () => {
  return (
    <>
      <DarkWrapper>
        <Input large placeholder="Find Movies, TV Shows and more..." />
      </DarkWrapper>
      <DarkWrapper>
        <Input large placeholder="Find Movies, TV Shows and more..." />
      </DarkWrapper>
    </>
  )
}
