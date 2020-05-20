import React from 'react'
import styled from 'utils/styled-components'
import FeaturedGridBlock from '.'

export default {
  title: 'Organisms/FeaturedGridBlock',
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
        <FeaturedGridBlock
          image={
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.hdqwalls.com%2Fdownload%2Fspiderman-far-from-home-movie-art-2j-3840x2160.jpg&f=1&nofb=1'
          }
          title="Spiderman"
          description="It was directed by Sam Raimi from a screenplay by Raimi, his older brother Ivan and Alvin Sargent. It is the third and final installment in Raimi's Spider-Man trilogy."
          about="Action Movie"
        />
      </Wrapper>
      <DarkWrapper>
        <FeaturedGridBlock
          image={
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.hdqwalls.com%2Fdownload%2Fspiderman-far-from-home-movie-art-2j-3840x2160.jpg&f=1&nofb=1'
          }
          title="Spiderman"
          description="It was directed by Sam Raimi from a screenplay by Raimi, his older brother Ivan and Alvin Sargent. It is the third and final installment in Raimi's Spider-Man trilogy."
          about="Action Movie"
        />
      </DarkWrapper>
    </>
  )
}
