import React from 'react'
import PageTemplate, { StyledPageWrapper } from 'templates/PageTemplate'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import FeaturedGridElement from 'components/FeaturedGridElement'
import ListElement from 'components/ListElement'
import Input from 'components/Input'

const Index = () => {
  return (
    <PageTemplate>
      <StyledPageWrapper>
        <Heading>Movies</Heading>
        <Paragraph>Discover your new favourite movie</Paragraph>
        <Input large placeholder="Find Movies, TV Shows and more..." />
        <FeaturedGridElement
          image={
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.hdqwalls.com%2Fdownload%2Fspiderman-far-from-home-movie-art-2j-3840x2160.jpg&f=1&nofb=1'
          }
          title="Spiderman"
          description="It was directed by Sam Raimi from a screenplay by Raimi, his older brother Ivan and Alvin Sargent. It is the third and final installment in Raimi's Spider-Man trilogy."
          about="Action Movie"
        />
        <ListElement
          title="Chernobyl"
          overview="Won 2 Golden Globes. Another 54 wins & 42 nominations."
          rating="4/5"
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets1.ignimgs.com%2F2019%2F05%2F06%2Fchernobyl-blogroll-1557167369830_1280w.jpg&f=1&nofb=1"
        />
        <ListElement
          title="Chernobyl"
          overview="Won 2 Golden Globes. Another 54 wins & 42 nominations."
          rating="4/5"
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets1.ignimgs.com%2F2019%2F05%2F06%2Fchernobyl-blogroll-1557167369830_1280w.jpg&f=1&nofb=1"
        />
        <ListElement
          title="Chernobyl"
          overview="Won 2 Golden Globes. Another 54 wins & 42 nominations."
          rating="4/5"
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets1.ignimgs.com%2F2019%2F05%2F06%2Fchernobyl-blogroll-1557167369830_1280w.jpg&f=1&nofb=1"
        />
        <ListElement
          title="Chernobyl"
          overview="Won 2 Golden Globes. Another 54 wins & 42 nominations."
          rating="4/5"
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets1.ignimgs.com%2F2019%2F05%2F06%2Fchernobyl-blogroll-1557167369830_1280w.jpg&f=1&nofb=1"
        />
        <ListElement
          title="Chernobyl"
          overview="Won 2 Golden Globes. Another 54 wins & 42 nominations."
          rating="4/5"
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets1.ignimgs.com%2F2019%2F05%2F06%2Fchernobyl-blogroll-1557167369830_1280w.jpg&f=1&nofb=1"
        />
      </StyledPageWrapper>
    </PageTemplate>
  )
}

export default Index
