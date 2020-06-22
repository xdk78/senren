import React, { useEffect, useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { fetchMovie } from 'actions/movieActions'
import ReactPlayer from 'react-player'
import PageTemplate, { StyledPageWrapper } from 'templates/PageTemplate'
import FeaturedGridElement from 'components/FeaturedGridElement'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import Spinner, { LoaderWrapper } from 'components/Spinner'
import firebase from 'firebase/clientApp'
import { addToWatchlist, removeFromWatchlist } from 'actions/watchlistActions'
import { EntryType } from 'actions/trendingActions'
import withAuth from 'utils/withAuth'
import {
  StyledCenterWrapper,
  StyledGenereWrapper,
  StyledGenereItem,
  StyledLink,
  StyledButtonsWrapper,
  StyledSelect,
  StyledSelectWrapper,
  StyledOption,
  StyledVideoWrapper,
} from 'components/shared'

const Index = ({
  fetchMovie,
  movieData,
  trailerData,
  moviePending,
  movieError,
  addToWatchlist,
  user,
  removeFromWatchlist,
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(true)
  const [selection, setSelection] = useState<string>('select')
  const router = useRouter()
  useEffect(() => {
    const { slug } = router.query
    fetchMovie(slug)
  }, [])

  const HandleSelection = (e) => {
    setIsSelected(false)
    setSelection(e.target.value)
  }

  const onAddToWatchlist = useCallback(
    (type) => () => {
      if (user && movieData && !movieError) {
        addToWatchlist('movie', user, {
          title: movieData.title,
          tmdbId: movieData.id,
          poster_path: movieData.poster_path,
          type: type,
        })
        alert('Added to watchlist')
      } else {
        console.error('user is not logged in')
      }
    },
    [movieData, user]
  )

  const onRemoveFromWatchlist = useCallback(
    () => () => {
      if (user && movieData && !movieError) {
        removeFromWatchlist('movie', user, {
          tmdbId: movieData.id,
        })
        alert('Removed from watchlist')
      } else {
        console.error('user is not logged in')
      }
    },
    [movieData, user]
  )

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
          <StyledCenterWrapper>
            <StyledGenereWrapper>
              {movieData &&
                movieData.genres &&
                movieData.genres.map((item) => (
                  <StyledGenereItem key={item.id}>{item.name}</StyledGenereItem>
                ))}
            </StyledGenereWrapper>
            <StyledGenereWrapper>
              {movieData?.vote_average && (
                <StyledLink bold>
                  {`Rating: `}
                  <span>{`${movieData.vote_average}/10`}</span>
                </StyledLink>
              )}
            </StyledGenereWrapper>
          </StyledCenterWrapper>
          <StyledButtonsWrapper>
            <StyledSelectWrapper>
              <StyledSelect
                name="watchlist_type"
                value={selection}
                onChange={HandleSelection}
              >
                <StyledOption value="select" disabled={true}>
                  Select
                </StyledOption>
                <StyledOption value="WATCHING">Watching</StyledOption>
                <StyledOption value="PLAN_TO_WATCH">Plan To Watch</StyledOption>
                <StyledOption value="COMPLETED">Completed</StyledOption>
                <StyledOption value="DROPPED">Dropped</StyledOption>
              </StyledSelect>
              <Button
                disabled={isSelected}
                onClick={onAddToWatchlist(selection)}
              >
                Add to Watchlist
              </Button>
            </StyledSelectWrapper>
            <Button onClick={onRemoveFromWatchlist()}>
              Remove from watchlist
            </Button>
          </StyledButtonsWrapper>

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
  removeFromWatchlist: (type: EntryType, user: firebase.User, data) => {
    dispatch(removeFromWatchlist(type, user, data))
  },
})

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(Index))
