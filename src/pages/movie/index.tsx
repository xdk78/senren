import { useEffect } from 'react'
import PageTemplate, {
  StyledPageWrapper,
  GridWrapper,
} from 'templates/PageTemplate'
import { fadeInUp, stagger } from 'utils/animations'
import { connect } from 'react-redux'
import { fetchTrending, EntryType } from 'actions/trendingActions'
import { TrendingEntry } from 'reducers/trendingReducer'
import FeaturedGridElement from 'components/FeaturedGridElement'
import GridElement from 'components/GridElement'
import Heading from 'components/Heading'
import ListElement from 'components/ListElement'
import Paragraph from 'components/Paragraph'
import Spinner, { LoaderWrapper } from 'components/Spinner'
import Search from 'components/Search'

type IndexProps = {
  data: TrendingEntry[]
  fetchTrending: (type: EntryType) => void
  pending: boolean
  error: boolean
}

const Movies = ({ data, fetchTrending, pending, error }: IndexProps) => {
  useEffect(() => {
    fetchTrending('movie')
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
          <Heading>Movies</Heading>
          <Paragraph>Discover your new favourite movie</Paragraph>
          <Search placeholder="Find Movies, TV Shows and more..." />
          {data && data.length > 0 && (
            <FeaturedGridElement
              image={`https://image.tmdb.org/t/p/original/${data[1].backdrop_path}`}
              title={data[1].title}
              description={data[1].overview.slice(0, 120) + '...'}
              about="Action Movie"
            />
          )}
          <Heading>Trending</Heading>
          <Paragraph>Most popular Movies right now</Paragraph>
          <GridWrapper
            variants={stagger}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0 }}
          >
            {data &&
              data.length > 0 &&
              data.map((item: TrendingEntry) => (
                <GridElement
                  key={item.id}
                  variants={fadeInUp}
                  title={item.title}
                  content={item.overview}
                  link={`/movie/${item.id}`}
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                />
              ))}
          </GridWrapper>
          <Heading>Top 20</Heading>
          {data &&
            data.length > 0 &&
            data.map((item: TrendingEntry, index: number) => (
              <ListElement
                key={item.id}
                title={`${index + 1}. ${item.title}`}
                overview={item.overview}
                rating={`${item.vote_average}/10`}
                link={`/movie/${item.id}`}
                image={item.poster_path}
              />
            ))}
        </StyledPageWrapper>
      )}
    </PageTemplate>
  )
}

const mapStateToProps = (state, props) => ({
  ...props,
  data: state.trendingState.data,
  pending: state.trendingState.isPending,
  error: state.trendingState.error,
})

const mapDispatchToProps = (dispatch) => ({
  fetchTrending: (type: EntryType) => {
    dispatch(fetchTrending(type))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
