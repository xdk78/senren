import styled from 'utils/styled-components'
import MobileNav from '.'

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

export const MobileNavStories = () => {
  return (
    <>
      <Wrapper>
        <MobileNav />
      </Wrapper>
      <DarkWrapper>
        <MobileNav />
      </DarkWrapper>
    </>
  )
}
