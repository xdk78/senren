import React from 'react'
import styled from '../../styled-components'
import WrapButton from '.'
import { FaSearch, FaFacebook } from 'react-icons/fa'
export default {
  title: 'Atoms/ButtonIcon',
}

const DarkWrapper = styled.div`
  background: black;
  padding: 50px;
  margin: 15px;
`

export const NormalButtonIcon = () => {
  return <div>{WrapButton(FaFacebook)({ text: 'Facebook' })}</div>
}

export const AwardButtonIcon = () => {
  return (
    <>
      <DarkWrapper>{WrapButton(FaSearch)({ text: 'Explore' })}</DarkWrapper>
    </>
  )
}
