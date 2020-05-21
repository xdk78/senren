import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { fetchTv } from 'actions/tvActions'
import PageTemplate, { StyledPageWrapper } from 'templates/PageTemplate'
import FeaturedGridElement from 'components/FeaturedGridElement'

const TvSeries = ({ fetchTv, data }) => {
  const router = useRouter()
  useEffect(() => {
    const { slug } = router.query
    fetchTv(slug)
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
  data: state.tvState.data,
  pending: state.tvState.isPending,
  error: state.tvState.error,
})

const mapDispatchToProps = (dispatch) => ({
  fetchTv: (slug) => {
    dispatch(fetchTv(slug))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(TvSeries)
