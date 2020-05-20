import React from 'react'
import styled from 'utils/styled-components'
import ListElement from '.'

export default {
  title: 'Organisms/ListElement',
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
        <ListElement
          title="Chernobyl"
          overview="Won 2 Golden Globes. Another 54 wins & 42 nominations."
          rating="4/5"
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets1.ignimgs.com%2F2019%2F05%2F06%2Fchernobyl-blogroll-1557167369830_1280w.jpg&f=1&nofb=1"
        />
      </Wrapper>
      <DarkWrapper>
        <ListElement
          title="Chernobyl"
          overview="Won 2 Golden Globes. Another 54 wins & 42 nominations."
          rating="4/5"
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets1.ignimgs.com%2F2019%2F05%2F06%2Fchernobyl-blogroll-1557167369830_1280w.jpg&f=1&nofb=1"
        />
      </DarkWrapper>
    </>
  )
}
