import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { fetchMovie } from 'actions/movieActions'
import PageTemplate, { StyledPageWrapper } from 'templates/PageTemplate'
import FeaturedGridElement from 'components/FeaturedGridElement'
import styled from 'utils/styled-components'
import Button from 'components/Button'
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

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
`

const Index = ({ fetchMovie, data }) => {
  const router = useRouter()
  useEffect(() => {
    const { slug } = router.query
    fetchMovie(slug)
  }, [])

  return (
    <PageTemplate>
      <StyledPageWrapper>
        <FeaturedGridElement
          title={data.title}
          about={data.tagline}
          description={data.overview}
          image={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        />
        <StyledGenereWrapper>
          {data &&
            data.genres &&
            data.genres.map((item) => (
              <StyledGenereItem key={item.id}>{item.name}</StyledGenereItem>
            ))}
        </StyledGenereWrapper>
        <StyledWrapper>
          <Button>Add to Watchlist</Button>
          {data && <Button>{`${data.vote_average}/10  `}</Button>}
          {data && (
            <Button>
              <StyledLink target="__blank" href={data.homepage}>
                Watch
              </StyledLink>
            </Button>
          )}
        </StyledWrapper>
      </StyledPageWrapper>
    </PageTemplate>
  )
}

const mapStateToProps = (state, props) => ({
  ...props,
  data: state.movieState.data,
  pending: state.movieState.isPending,
  error: state.movieState.error,
})

const mapDispatchToProps = (dispatch) => ({
  fetchMovie: (slug) => {
    dispatch(fetchMovie(slug))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
