import React from 'react'
import styled from '../styled-components'

const Title = styled.h1`
  color: ${({ theme }) => theme.primaryLight};
  font-size: 50px;
`

const Index = () => <Title>My page</Title>

export default Index
