import React, { useEffect } from 'react'
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

const Index = ({ fetchMovie, movieData, trailerData }) => {
  const router = useRouter()
  useEffect(() => {
    const { slug } = router.query
    fetchMovie(slug)
  }, [])
  return (
    <PageTemplate>
      <StyledPageWrapper>
        {movieData && (
          <FeaturedGridElement
            title={movieData.title}
            about={movieData.tagline}
            description={movieData.overview}
            image={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
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
          <Button>Add to Watchlist</Button>
          {movieData && <Button>{`${movieData.vote_average}/10  `}</Button>}
          {movieData && (
            <Button>
              <StyledLink target="__blank" href={movieData.homepage}>
                Watch
              </StyledLink>
            </Button>
          )}
        </StyledWrapper>
        <Heading>Trailer</Heading>
        <Paragraph>Watch trailer of this Movie</Paragraph>

        {trailerData && (
          <StyledVideoWrapper>
            <ReactPlayer
              width="100%"
              height="100%"
              url={`https://www.youtube.com/watch?v=${trailerData.results[0].key}`}
            />
          </StyledVideoWrapper>
        )}
      </StyledPageWrapper>
    </PageTemplate>
  )
}

const mapStateToProps = (state, props) => ({
  ...props,
  movieData: state.movieState.movieData,
  trailerData: state.movieState.trailerData,
  pending: state.movieState.isPending,
  error: state.movieState.error,
})

const mapDispatchToProps = (dispatch) => ({
  fetchMovie: (slug) => {
    dispatch(fetchMovie(slug))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
