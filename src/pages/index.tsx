import React, { useEffect } from 'react'
import PageTemplate, {
  StyledPageWrapper,
  GridWrapper,
} from 'templates/PageTemplate'
import { fadeInUp, stagger } from 'utils/animations'
import { connect } from 'react-redux'
import { fetchDiscover } from 'actions/discoverActions'
import FeaturedGridElement from 'components/FeaturedGridElement'
import GridElement from 'components/GridElement'
import Heading from 'components/Heading'
import Search from 'components/Search'
import Paragraph from 'components/Paragraph'
import Spinner, { LoaderWrapper } from 'components/Spinner'

type IndexProps = {
  tvData: any
  moviesData: any
  fetchDiscover: () => void
  pending: boolean
  error: string
}

const Index = ({
  tvData,
  moviesData,
  fetchDiscover,
  pending,
  error,
}: IndexProps) => {
  useEffect(() => {
    fetchDiscover()
  }, [])

  return (
    <PageTemplate>
      {pending && !error ? (
        <LoaderWrapper>
          <Spinner />
        </LoaderWrapper>
      ) : error ? (
        <LoaderWrapper>
          <Heading>Sorry there is no data :( </Heading>
        </LoaderWrapper>
      ) : (
        <StyledPageWrapper>
          <Heading>Explore</Heading>
          <Paragraph>Explore your new favourite movie & TV Show</Paragraph>
          <Search placeholder="Find Movies, TV Shows and more..." />
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
                    content={`${item.overview.slice(0, 350)}...`}
                    link={`/movie/${item.id}`}
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
                    content={`${item.overview.slice(0, 350)}...`}
                    link={`/tv/${item.id}`}
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  />
                ))}
          </GridWrapper>
        </StyledPageWrapper>
      )}
    </PageTemplate>
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
