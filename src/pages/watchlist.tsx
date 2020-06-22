import React, { useEffect, useState } from 'react'
import PageTemplate, { StyledPageWrapper } from 'templates/PageTemplate'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import Input from 'components/Input'
import Graph from 'components/Graph'
import { connect } from 'react-redux'
import { fetchMovieWatchlist, fetchTvWatchlist } from 'actions/watchlistActions'
import firebase from 'firebase/clientApp'
import Tabs from 'components/Tabs'
import withAuth from 'utils/withAuth'

const Watchlist = ({
  movieData,
  tvData,
  fetchMovieWatchlist,
  fetchTvWatchlist,
  user,
}) => {
  useEffect(() => {
    if (user) {
      fetchMovieWatchlist(user)
      fetchTvWatchlist(user)
    }
  }, [user])

  const [inputValue, setInputValue] = useState('')
  const onInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <PageTemplate>
      <StyledPageWrapper>
        <Heading>Rating analyst</Heading>
        <Paragraph>Your collection</Paragraph>
        <Graph width={1100} height={480} />
        <Heading>Top-Rated Generes</Heading>
        <Paragraph>Your collection</Paragraph>
        <Input
          value={inputValue}
          large
          placeholder="Filter watchlist..."
          onChange={onInputChange}
        />
        <Tabs tvData={tvData} movieData={movieData} inputValue={inputValue} />
      </StyledPageWrapper>
    </PageTemplate>
  )
}

const mapStateToProps = (state, props) => ({
  ...props,
  movieData: state.watchlistState.movieWatchlistData,
  tvData: state.watchlistState.tvWatchlistData,
  watchlistPending: state.watchlistState.isPending,
  watchlistError: state.watchlistState.error,
})

const mapDispatchToProps = (dispatch) => ({
  fetchMovieWatchlist: (user: firebase.User) => {
    dispatch(fetchMovieWatchlist(user))
  },
  fetchTvWatchlist: (user: firebase.User) => {
    dispatch(fetchTvWatchlist(user))
  },
})

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(Watchlist))
