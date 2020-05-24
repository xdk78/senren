import React, { useEffect } from 'react'
import styled from 'utils/styled-components'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import PageTemplate, { StyledPageWrapper } from 'templates/PageTemplate'
import { connect } from 'react-redux'
import { fetchSearch } from 'actions/searchAction'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import GridElement from 'components/GridElement'
import Search from 'components/Search'
const GridWrapper = styled(motion.div)`
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  grid-auto-flow: dense;
  max-width: 1400px;
`

const Index = ({ fetchSearch, data }) => {
  const router = useRouter()
  const { query } = router.query
  useEffect(() => {
    fetchSearch(query)
  }, [])
  return (
    <PageTemplate>
      <Heading>Your search results</Heading>
      <Paragraph>For query: {query}</Paragraph>
      <Search placeholder="Search for TV Shows and movies..." />
      {data?.length > 0 ? (
        <StyledPageWrapper>
          <GridWrapper>
            {data &&
              data.map((item) => (
                <GridElement
                  title={item.title}
                  content={item.overview}
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  key={item.id}
                  link={`/${item.media_type}/${item.id}`}
                />
              ))}
          </GridWrapper>
        </StyledPageWrapper>
      ) : (
        <Paragraph>Sorry Nothing found :( </Paragraph>
      )}
    </PageTemplate>
  )
}

const mapStateToProps = (state, props) => ({
  ...props,
  data: state.searchState.data,
  pending: state.searchState.isPending,
  error: state.searchState.error,
})

const mapDispatchToProps = (dispatch) => ({
  fetchSearch: (query) => {
    dispatch(fetchSearch(query))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
