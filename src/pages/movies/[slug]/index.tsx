import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { fetchMovie } from 'actions/movieActions'
// import { MovieEntry } from 'reducers/movieReducer'
import PageTemplate, { StyledPageWrapper } from 'templates/PageTemplate'
import FeaturedGridElement from 'components/FeaturedGridElement'

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
