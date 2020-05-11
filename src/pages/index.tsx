import React from 'react'
import UserPageTemplate, { StyledPageWrapper } from '../templates/PageTemplate'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import FeaturedGridElement from '../components/FeaturedGridElement'
import GridElement from '../components/GridElement'
import styled from '../styled-components'
import Input from '../components/Input'
import { fadeInUp, stagger } from '../utils/animations'
import { motion } from 'framer-motion'

const GridWrapper = styled(motion.div)`
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  grid-auto-flow: dense;
`

const Data2 = [
  {
    id: 1,
    title: 'Westworld',
    src:
      'https://images.unsplash.com/photo-1589023640583-653a7ac888ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
  },
  {
    id: 2,
    title: 'Mr. Robot',
    src:
      'https://images.unsplash.com/photo-1588814547572-13d8fb9bda3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
  },
  {
    id: 3,
    title: 'Riverdale',
    src:
      'https://images.unsplash.com/photo-1589141333995-64e3ea565870?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  },
  {
    id: 4,
    title: 'Riverdale',
    src:
      'https://images.unsplash.com/photo-1589141333995-64e3ea565870?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  },
  {
    id: 5,
    title: 'Breaking Bad',
    src:
      'https://images.unsplash.com/photo-1589185460294-b6bb2070099f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
  },
  {
    id: 6,
    title: 'Breaking Bad',
    src:
      'https://images.unsplash.com/photo-1589185460294-b6bb2070099f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
  },
  {
    id: 7,
    title: 'Breaking Bad',
    src:
      'https://images.unsplash.com/photo-1589185460294-b6bb2070099f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
  },
]

const Index = () => {
  return (
    <UserPageTemplate>
      <StyledPageWrapper>
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
        <GridWrapper
          variants={stagger}
          initial="initial"
          animate="animate"
          exit={{ opacity: 0 }}
        >
          {Data2.map((item) => (
            <GridElement
              key={item.id}
              variants={fadeInUp}
              title={item.title}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi amet deserunt aliquid id hic, facilis fuga quia ut dolorem optio exercitationem vel ipsum maxime minus magni in nihil inventore saepe."
              src={item.src}
            />
          ))}
        </GridWrapper>
        <Heading>Top 100</Heading>
        <Paragraph>Most popular TV Shows and Movies</Paragraph>
      </StyledPageWrapper>
    </UserPageTemplate>
  )
}

export default Index
