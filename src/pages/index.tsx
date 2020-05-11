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
      'https://zagrano.pl/wp-content/uploads/2020/03/premiera-3-sezonu-westworld-d.jpg',
  },
  {
    id: 2,
    title: 'Mr. Robot',
    src: 'https://cont2.naekranie.pl/media/cache/amp/2016/06/mrrobot1.jpg',
  },
  {
    id: 3,
    title: 'Riverdale',
    src: 'https://bimg.wprost.pl/_thumb/b1/5f/63873339373cb16d04797eaace72.png',
  },
  {
    id: 4,
    title: 'Atypical',
    src:
      'https://occ-0-1068-1723.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQ6gXQ6wAffh03gEh9UvQcGcHKyYnrSjGy6bdQSqYxlP-7hDCBizVylgfkeh6gSrqr3afGCInQsnxUN4U4GNzziK3Vt4.jpg?r=f01',
  },
  {
    id: 5,
    title: 'Breaking Bad',
    src:
      'https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/splay/2019/09/breaking-bad-el-camino.jpg',
  },
  {
    id: 6,
    title: 'Better call saul',
    src: 'https://img.ppe.pl/upload/news/14/50/13/800/380/1450136469.jpg',
  },
  {
    id: 7,
    title: 'Ozark',
    src:
      'https://occ-0-1068-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSLEghUfo8hb66GpyRCSgcABnbg22YVprjL_GVzQoGV9mYzuOgjLhVSxTUxiSQjBBYHuSqSdF4FeDepl_8ukfXx39ulx.jpg?r=aa0',
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
