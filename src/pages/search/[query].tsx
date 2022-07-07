import { useEffect } from 'react'
import { useRouter } from 'next/router'
import PageTemplate, {
  StyledPageWrapper,
  GridWrapper,
} from 'templates/PageTemplate'
import { connect } from 'react-redux'
import { fetchSearch } from 'actions/searchAction'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import GridElement from 'components/GridElement'
import Search from 'components/Search'
import { stagger, fadeInUp } from 'utils/animations'
import Spinner, { LoaderWrapper } from 'components/Spinner'

const Index = ({ fetchSearch, data, pending, error }) => {
  const router = useRouter()
  const { query } = router.query
  useEffect(() => {
    fetchSearch(query)
  }, [])
  return (
    <PageTemplate>
      {pending && !error ? (
        <LoaderWrapper>
          <Spinner />
        </LoaderWrapper>
      ) : error ? (
        <LoaderWrapper>
          <Heading>Sorry there is no data :(</Heading>
        </LoaderWrapper>
      ) : (
        <StyledPageWrapper>
          <Heading>Your search results</Heading>
          <Paragraph>For query: {query}</Paragraph>
          <Search placeholder="Search for TV Shows and movies..." />
          {data?.length > 0 ? (
            <GridWrapper
              variants={stagger}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0 }}
            >
              {data &&
                data.map((item) => (
                  <GridElement
                    title={item.title}
                    content={item.overview}
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    key={item.id}
                    variants={fadeInUp}
                    link={`/${item.media_type}/${item.id}`}
                  />
                ))}
            </GridWrapper>
          ) : (
            <Paragraph>Sorry Nothing found :( </Paragraph>
          )}
        </StyledPageWrapper>
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
