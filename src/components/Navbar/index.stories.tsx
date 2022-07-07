import styled from 'utils/styled-components'
import Navbar from '.'

export default {
  title: 'Organisms/NavBar',
}

const DarkWrapper = styled.div`
  background: black;
  padding: 50px;
`
const Wrapper = styled.div`
  padding: 50px;
`

export const FeaturedGridBlockStroy = () => {
  return (
    <>
      <Wrapper>
        <Navbar userEmail="user@email.com" isLoggedIn={true} />
      </Wrapper>
      <DarkWrapper>
        <Navbar isLoggedIn={false} />
      </DarkWrapper>
    </>
  )
}
