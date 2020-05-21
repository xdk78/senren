import React, { useEffect } from 'react'
import UserPageTemplate, { StyledPageWrapper } from 'templates/PageTemplate'
import { fadeInUp, stagger } from 'utils/animations'
import { motion } from 'framer-motion'
import { connect } from 'react-redux'
import { fetchDiscover } from 'actions/discoverActions'
import FeaturedGridElement from 'components/FeaturedGridElement'
import GridElement from 'components/GridElement'
import Heading from 'components/Heading'
import Input from 'components/Input'
import Paragraph from 'components/Paragraph'
import styled from 'utils/styled-components'

type IndexProps = {
  tvData: any
  moviesData: any
  fetchDiscover: () => void
}

const GridWrapper = styled(motion.div)`
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  grid-auto-flow: dense;
`

const Index = ({ fetchDiscover, tvData, moviesData }: IndexProps) => {
  useEffect(() => {
    fetchDiscover()
  }, [])
  return (
    <UserPageTemplate>
      <StyledPageWrapper>
        <Heading>Explore</Heading>
        <Paragraph>Explore your new favourite movie & TV Show</Paragraph>
        <Input large placeholder="Find Movies, TV Shows and more..." />
        {tvData.results && tvData.results.length > 0 && (
          <FeaturedGridElement
            image={`https://image.tmdb.org/t/p/original/${tvData.results[1].backdrop_path}`}
            title={tvData.results[1].original_name}
            description={tvData.results[1].overview.slice(0, 120) + '...'}
            about="Action Movie"
          />
        )}
        <Heading>Discover Movies</Heading>
        <Paragraph>Explor your new favourite movie</Paragraph>
        <GridWrapper
          variants={stagger}
          initial="initial"
          animate="animate"
          exit={{ opacity: 0 }}
        >
          {moviesData.results &&
            moviesData.results.length > 0 &&
            moviesData.results
              .slice(0, 8)
              .map((item) => (
                <GridElement
                  key={item.id}
                  variants={fadeInUp}
                  title={item.original_title}
                  content={item.overview}
                  link={`/movies/${item.id}`}
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                />
              ))}
        </GridWrapper>
        <Heading>Discover TV Shows</Heading>
        <Paragraph>Explore your new favourite TV Show</Paragraph>
        <GridWrapper
          variants={stagger}
          initial="initial"
          animate="animate"
          exit={{ opacity: 0 }}
        >
          {tvData.results &&
            tvData.results.length > 0 &&
            tvData.results
              .slice(0, 8)
              .map((item) => (
                <GridElement
                  key={item.id}
                  variants={fadeInUp}
                  title={item.original_name}
                  content={item.overview}
                  link={`/movies/${item.id}`}
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                />
              ))}
        </GridWrapper>
      </StyledPageWrapper>
    </UserPageTemplate>
  )
}

const mapStateToProps = (state, props) => ({
  ...props,
  tvData: state.discoverState.tvData,
  moviesData: state.discoverState.moviesData,
  pending: state.discoverState.isPending,
  error: state.discoverState.error,
})

const mapDispatchToProps = (dispatch) => ({
  fetchDiscover: () => {
    dispatch(fetchDiscover())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
