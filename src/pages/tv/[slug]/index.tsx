import React, { useEffect, useCallback } from 'react'
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
import Spinner, { LoaderWrapper } from 'components/Spinner'
import { addToWatchlist } from 'actions/watchlistActions'
import { EntryType } from 'actions/trendingActions'
import firebase from 'firebase/clientApp'

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
const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
`
const StyledGenereWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const StyledGenereItem = styled.p`
  border: 2px solid ${({ theme }) => theme.primary};
  padding: 10px;
  color: ${({ theme }) => theme.fontColor};
  margin: 10px;
`

const TvSeries = ({
  fetchTv,
  tvData,
  trailerData,
  pending,
  error,
  addToWatchlist,
}) => {
  const router = useRouter()
  useEffect(() => {
    const { slug } = router.query
    fetchTv(slug)
  }, [])

  const onAddToWatchlist = useCallback(() => {
    const user = firebase.auth().currentUser
    if (user && tvData && !error) {
      addToWatchlist('tv', user, {
        title: tvData.title,
        tmdbId: tvData.id,
        poster_path: tvData.poster_path,
      })
      alert('Added to watchlist')
    } else {
      console.error('user is not logged in')
    }
  }, [tvData])
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
          {tvData && (
            <FeaturedGridElement
              title={tvData.title}
              about={tvData.tagline}
              description={tvData.overview}
              image={`https://image.tmdb.org/t/p/original/${
                tvData.backdrop_path ? tvData.backdrop_path : tvData.poster_path
              }`}
            />
          )}
          <StyledGenereWrapper>
            {tvData &&
              tvData.genres &&
              tvData.genres.map((item) => (
                <StyledGenereItem key={item.id}>{item.name}</StyledGenereItem>
              ))}
          </StyledGenereWrapper>
          <StyledWrapper>
            <Button onClick={onAddToWatchlist}>Add to Watchlist</Button>
            {tvData?.vote_average && (
              <Button>{`${tvData.vote_average}/10  `}</Button>
            )}
            {tvData?.homepage && (
              <Button>
                <StyledLink target="__blank" href={tvData.homepage}>
                  Watch
                </StyledLink>
              </Button>
            )}
          </StyledWrapper>
          {tvData?.next_episode_to_air && (
            <div>
              <Heading>Next Episode to Air</Heading>{' '}
              <ListElement
                title={tvData.next_episode_to_air.name}
                overview={`Air date: ${tvData.next_episode_to_air.air_date}`}
                image={tvData.poster_path}
              />
            </div>
          )}

          {trailerData?.results && trailerData.results.length > 0 && (
            <>
              <Heading>Trailer</Heading>
              <Paragraph>Watch trailer of this TV Show</Paragraph>
              <StyledVideoWrapper>
                <ReactPlayer
                  width="100%"
                  height="100%"
                  url={`https://www.youtube.com/watch?v=${trailerData.results[0].key}`}
                />
              </StyledVideoWrapper>
            </>
          )}
          <Heading>Seasons</Heading>
          <Paragraph>All of TV Series seasons</Paragraph>
          {tvData?.seasons &&
            tvData.seasons.length > 0 &&
            tvData.seasons.map((item) => (
              <ListElement
                title={item.name}
                overview={item.overview}
                image={item.poster_path}
                key={item.id}
              />
            ))}
        </StyledPageWrapper>
      )}
    </PageTemplate>
  )
}

const mapStateToProps = (state, props) => ({
  ...props,
  tvData: state.tvState.tvData,
  trailerData: state.tvState.trailerData,
  pending: state.tvState.isPending,
  error: state.tvState.error,
  watchlistSuccess: state.watchlistState.success,
  watchlistPending: state.watchlistState.isPending,
  watchlistError: state.watchlistState.error,
})

const mapDispatchToProps = (dispatch) => ({
  fetchTv: (slug) => {
    dispatch(fetchTv(slug))
  },
  addToWatchlist: (type: EntryType, user: firebase.User, data) => {
    dispatch(addToWatchlist(type, user, data))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(TvSeries)
