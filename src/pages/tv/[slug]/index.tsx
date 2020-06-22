import React, { useEffect, useCallback, useState } from 'react'
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
import { addToWatchlist, removeFromWatchlist } from 'actions/watchlistActions'
import { EntryType } from 'actions/trendingActions'
import firebase from 'firebase/clientApp'
import withAuth from 'utils/withAuth'
import {
  StyledGenereWrapper,
  StyledGenereItem,
  StyledLink,
  StyledButtonsWrapper,
  StyledCenterWrapper,
  StyledVideoWrapper,
  StyledSelectWrapper,
  StyledSelect,
  StyledOption,
} from 'components/shared'

const TvSeries = ({
  fetchTv,
  tvData,
  trailerData,
  pending,
  error,
  addToWatchlist,
  removeFromWatchlist,
  user,
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(true)
  const [selection, setSelection] = useState<string>('select')
  const router = useRouter()
  useEffect(() => {
    const { slug } = router.query
    fetchTv(slug)
  }, [])

  const HandleSelection = (e) => {
    setIsSelected(false)
    setSelection(e.target.value)
  }

  const onAddToWatchlist = useCallback(
    (type) => () => {
      if (user && tvData && !error) {
        addToWatchlist('tv', user, {
          title: tvData.title,
          tmdbId: tvData.id,
          poster_path: tvData.poster_path,
          overview: tvData.overview,
          type: type,
        })
        alert('Added to watchlist')
      } else {
        console.error('user is not logged in')
      }
    },
    [tvData, user]
  )
  const onRemoveFromWatchlist = useCallback(
    () => () => {
      if (user && tvData && !error) {
        removeFromWatchlist('tv', user, {
          tmdbId: tvData.id,
        })
        alert('Removed from watchlist')
      } else {
        console.error('user is not logged in')
      }
    },
    [tvData, user]
  )

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
          <StyledCenterWrapper>
            <StyledGenereWrapper>
              {tvData &&
                tvData.genres &&
                tvData.genres.map((item) => (
                  <StyledGenereItem key={item.id}>{item.name}</StyledGenereItem>
                ))}
            </StyledGenereWrapper>
            <StyledGenereWrapper>
              {tvData?.vote_average && (
                <StyledLink bold>
                  {`Rating: `}
                  <span>{`${tvData.vote_average}/10`}</span>
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
          {tvData?.homepage && (
            <Button>
              <StyledLink target="__blank" href={tvData.homepage}>
                Watch
              </StyledLink>
            </Button>
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
  removeFromWatchlist: (type: EntryType, user: firebase.User, data) => {
    dispatch(removeFromWatchlist(type, user, data))
  },
})

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(TvSeries))
