import React, { useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { fetchMovie } from 'actions/movieActions'
import ReactPlayer from 'react-player'
import PageTemplate, { StyledPageWrapper } from 'templates/PageTemplate'
import FeaturedGridElement from 'components/FeaturedGridElement'
import styled from 'utils/styled-components'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import Spinner, { LoaderWrapper } from 'components/Spinner'
import firebase from 'firebase/clientApp'
import { addToWatchlist } from 'actions/watchlistActions'
import { EntryType } from 'actions/trendingActions'

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  width: 100%;
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

const Index = ({
  fetchMovie,
  movieData,
  trailerData,
  moviePending,
  movieError,
  addToWatchlist,
}) => {
  const router = useRouter()
  useEffect(() => {
    const { slug } = router.query
    fetchMovie(slug)
  }, [])

  const onAddToWatchlist = useCallback(() => {
    const user = firebase.auth().currentUser
    if (user && movieData && !movieError) {
      addToWatchlist('movie', user, {
        title: movieData.title,
        tmdbId: movieData.id,
      })

      console.log('added to watchlist')
    } else {
      console.error('user is not logged in')
    }
  }, [movieData])

  return (
    <PageTemplate>
      {moviePending && !movieError ? (
        <LoaderWrapper>
          <Spinner />
        </LoaderWrapper>
      ) : movieError ? (
        <LoaderWrapper>
          <Heading>Sorry there is no data :(</Heading>
        </LoaderWrapper>
      ) : (
        <StyledPageWrapper>
          {movieData && (
            <FeaturedGridElement
              title={movieData.title}
              about={movieData.tagline}
              description={movieData.overview}
              image={`https://image.tmdb.org/t/p/original/${
                movieData.backdrop_path
                  ? movieData.backdrop_path
                  : movieData.poster_path
              }`}
            />
          )}
          <StyledGenereWrapper>
            {movieData &&
              movieData.genres &&
              movieData.genres.map((item) => (
                <StyledGenereItem key={item.id}>{item.name}</StyledGenereItem>
              ))}
          </StyledGenereWrapper>
          <StyledWrapper>
            <Button onClick={onAddToWatchlist}>Add to Watchlist</Button>
            {movieData && <Button>{`${movieData.vote_average}/10  `}</Button>}
            {movieData && (
              <Button>
                <StyledLink target="__blank" href={movieData.homepage}>
                  Watch
                </StyledLink>
              </Button>
            )}
          </StyledWrapper>
          {trailerData?.result && trailerData.length > 0 && (
            <>
              <Heading>Trailer</Heading>
              <Paragraph>Watch trailer of this Movie</Paragraph>
              <StyledVideoWrapper>
                <ReactPlayer
                  width="100%"
                  height="100%"
                  url={`https://www.youtube.com/watch?v=${trailerData.results[0].key}`}
                />
              </StyledVideoWrapper>
            </>
          )}
        </StyledPageWrapper>
      )}
    </PageTemplate>
  )
}

const mapStateToProps = (state, props) => ({
  ...props,
  movieData: state.movieState.movieData,
  trailerData: state.movieState.trailerData,
  moviePending: state.movieState.isPending,
  movieError: state.movieState.error,
  watchlistSuccess: state.watchlistState.success,
  watchlistPending: state.watchlistState.isPending,
  watchlistError: state.watchlistState.error,
})

const mapDispatchToProps = (dispatch) => ({
  fetchMovie: (slug) => {
    dispatch(fetchMovie(slug))
  },
  addToWatchlist: (type: EntryType, user: firebase.User, data) => {
    dispatch(addToWatchlist(type, user, data))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
