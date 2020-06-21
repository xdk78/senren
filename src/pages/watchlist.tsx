import React, { useEffect, useState } from 'react'
import PageTemplate, {
  GridWrapper,
  StyledPageWrapper,
} from 'templates/PageTemplate'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import Input from 'components/Input'
import Graph from 'components/Graph'
import { connect } from 'react-redux'
import { fetchMovieWatchlist, fetchTvWatchlist } from 'actions/watchlistActions'
import firebase from 'firebase/clientApp'
import { fadeInUp, stagger } from 'utils/animations'
import GridElement from 'components/GridElement'

const Watchlist = ({
  movieData,
  tvData,
  fetchMovieWatchlist,
  fetchTvWatchlist,
}) => {
  useEffect(() => {
    const user = firebase.auth().currentUser
    if (user) {
      fetchMovieWatchlist(user)
      fetchTvWatchlist(user)
    }
  }, [])
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
        <div>Graph</div>
        <Input
          value={inputValue}
          large
          placeholder="Filter watchlist..."
          onChange={onInputChange}
        />
        {movieData && movieData.length > 0 && (
          <>
            <Heading>Movies</Heading>
            <Paragraph>Your movies to watch</Paragraph>
          </>
        )}
        <GridWrapper
          variants={stagger}
          initial="initial"
          animate="animate"
          exit={{ opacity: 0 }}
        >
          {movieData &&
            movieData.length > 0 &&
            movieData
              .filter((item) =>
                item.title.toLowerCase().includes(inputValue.toLowerCase())
              )
              .map((item) => (
                <GridElement
                  key={item.tmdbId}
                  variants={fadeInUp}
                  title={item.title}
                  content={''}
                  link={`/movie/${item.tmdbId}`}
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                />
              ))}
        </GridWrapper>
        {tvData && tvData.length > 0 && (
          <>
            <Heading>TV Shows</Heading>
            <Paragraph>Your Tv Shows to watch</Paragraph>
          </>
        )}
        <GridWrapper
          variants={stagger}
          initial="initial"
          animate="animate"
          exit={{ opacity: 0 }}
        >
          {tvData &&
            tvData.length > 0 &&
            tvData
              .filter((item) =>
                item.title.toLowerCase().includes(inputValue.toLowerCase())
              )
              .map((item) => (
                <GridElement
                  key={item.tmdbId}
                  variants={fadeInUp}
                  title={item.title}
                  content={''}
                  link={`/tv/${item.tmdbId}`}
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                />
              ))}
        </GridWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist)
