import React from 'react'
import styled from '../styled-components'
import UserPageTemplate from '../templates/UserPageTemplate'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import FeaturedGridElement from '../components/FeaturedGridElement'
import GridElement from '../components/GridElement'
import ListElement from '../components/ListElement'
import Input from '../components/Input'
import { Spacing, DeviceWidth } from '../themes/constants'

const StyledWrapper = styled.div`
  height: 100%;
  padding: ${Spacing.large}px;
  max-width: 1400px;
  @media (max-width: ${DeviceWidth.mobile}px) {
    width: 100%;
    padding: ${Spacing.small}px;
  }
`

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin-top: 20px;
  margin-bottom: 50px;
  grid-gap: 20px;
  @media (max-width: 1200px) {
  }
`

const Index = () => {
  return (
    <UserPageTemplate>
      <StyledWrapper>
        <Heading>Explore</Heading>
        <Paragraph>Discover your new favourite show</Paragraph>
        <Input large placeholder="Find Movies, TV Shows and more..." />
        <FeaturedGridElement
          image={
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.hdqwalls.com%2Fdownload%2Fspiderman-far-from-home-movie-art-2j-3840x2160.jpg&f=1&nofb=1'
          }
          title="Spiderman"
          description="It was directed by Sam Raimi from a screenplay by Raimi, his older brother Ivan and Alvin Sargent. It is the third and final installment in Raimi's Spider-Man trilogy."
          about="Action Movie"
        />
        <GridWrapper>
          <GridElement
            src={
              'https://static.episodate.com/images/tv-show/thumbnail/32157.jpg'
            }
          ></GridElement>
          <GridElement
            src={
              'https://static.episodate.com/images/tv-show/thumbnail/32157.jpg'
            }
          ></GridElement>
          <GridElement
            src={
              'https://static.episodate.com/images/tv-show/thumbnail/32157.jpg'
            }
          ></GridElement>
          <GridElement
            src={
              'https://static.episodate.com/images/tv-show/thumbnail/32157.jpg'
            }
          ></GridElement>
          <GridElement
            src={
              'https://static.episodate.com/images/tv-show/thumbnail/32157.jpg'
            }
          ></GridElement>
          <GridElement
            src={
              'https://static.episodate.com/images/tv-show/thumbnail/32157.jpg'
            }
          ></GridElement>
        </GridWrapper>
        <Heading>Top 100</Heading>
        <Paragraph>Most popular TV Shows and Movies</Paragraph>
        <ListElement
          title="Chernobyl"
          description="2019"
          award="Won 2 Golden Globes. Another 54 wins & 42 nominations."
          rating="4/5"
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets1.ignimgs.com%2F2019%2F05%2F06%2Fchernobyl-blogroll-1557167369830_1280w.jpg&f=1&nofb=1"
        />
        <ListElement
          title="Chernobyl"
          description="2019"
          award="Won 2 Golden Globes. Another 54 wins & 42 nominations."
          rating="4/5"
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets1.ignimgs.com%2F2019%2F05%2F06%2Fchernobyl-blogroll-1557167369830_1280w.jpg&f=1&nofb=1"
        />
        <ListElement
          title="Chernobyl"
          description="2019"
          award="Won 2 Golden Globes. Another 54 wins & 42 nominations."
          rating="4/5"
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets1.ignimgs.com%2F2019%2F05%2F06%2Fchernobyl-blogroll-1557167369830_1280w.jpg&f=1&nofb=1"
        />
        <ListElement
          title="Chernobyl"
          description="2019"
          award="Won 2 Golden Globes. Another 54 wins & 42 nominations."
          rating="4/5"
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets1.ignimgs.com%2F2019%2F05%2F06%2Fchernobyl-blogroll-1557167369830_1280w.jpg&f=1&nofb=1"
        />
        <ListElement
          title="Chernobyl"
          description="2019"
          award="Won 2 Golden Globes. Another 54 wins & 42 nominations."
          rating="4/5"
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets1.ignimgs.com%2F2019%2F05%2F06%2Fchernobyl-blogroll-1557167369830_1280w.jpg&f=1&nofb=1"
        />
      </StyledWrapper>
    </UserPageTemplate>
  )
}

export default Index
