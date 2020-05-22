import React, { useEffect } from 'react'
import styled from 'utils/styled-components'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { fetchTv } from 'actions/tvActions'
import PageTemplate, { StyledPageWrapper } from 'templates/PageTemplate'
import FeaturedGridElement from 'components/FeaturedGridElement'
import ListElement from 'components/ListElement'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import ReactPlayer from 'react-player'
import ImagePlaceholder from 'public/img-placeholder.svg'

const StyledVideoWrapper = styled.div`
  display: grid;
  height: 600px;
  @media (max-width: 900px) {
    height: 300px;
  }
`
const StyledLink = styled.a`
  color: white;
  text-decoration: none;
`

const TvSeries = ({ fetchTv, tvData, trailerData }) => {
  const router = useRouter()
  useEffect(() => {
    const { slug } = router.query
    fetchTv(slug)
  }, [])
  return (
    <PageTemplate>
      <StyledPageWrapper>
        {tvData && (
          <FeaturedGridElement
            title={tvData.title}
            about={tvData.tagline}
            description={tvData.overview}
            image={`https://image.tmdb.org/t/p/original/${tvData.backdrop_path}`}
          />
        )}
        <Button>Add to Watchlist</Button>
        {tvData && <Button>{`${tvData.vote_average}/10  `}</Button>}
        {tvData && (
          <Button>
            <StyledLink target="__blank" href={tvData.homepage}>
              Watch
            </StyledLink>
          </Button>
        )}
        {tvData && tvData.next_episode_to_air && (
          <div>
            <Heading>Next Episode to Air</Heading>{' '}
            <ListElement
              title={tvData.next_episode_to_air.name}
              overview={`Air date: ${tvData.next_episode_to_air.air_date}`}
              image={`https://image.tmdb.org/t/p/original/${tvData.poster_path}`}
              rating={''}
            />{' '}
          </div>
        )}
        <Heading>Trailer</Heading>
        <Paragraph>Watch trailer of this TV Show</Paragraph>

        {trailerData && (
          <StyledVideoWrapper>
            <ReactPlayer
              width="100%"
              height="100%"
              url={`https://www.youtube.com/watch?v=${trailerData.results[0].key}`}
            />
          </StyledVideoWrapper>
        )}
        <Heading>Seasons</Heading>
        <Paragraph>All of TV Series seasons</Paragraph>
        {tvData &&
          tvData.seasons &&
          tvData.seasons.length > 0 &&
          tvData.seasons.map((item) => (
            <ListElement
              title={item.name}
              overview={item.overview}
              image={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                  : ImagePlaceholder
              }
              rating={''}
              key={item.id}
            />
          ))}
      </StyledPageWrapper>
    </PageTemplate>
  )
}

const mapStateToProps = (state, props) => ({
  ...props,
  tvData: state.tvState.tvData,
  trailerData: state.tvState.trailerData,
  pending: state.tvState.isPending,
  error: state.tvState.error,
})

const mapDispatchToProps = (dispatch) => ({
  fetchTv: (slug) => {
    dispatch(fetchTv(slug))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(TvSeries)
