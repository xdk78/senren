import { combineReducers } from 'redux'
import { trendingReducer } from './trendingReducer'
import { movieReducer } from './movieReducer'
import { discoverReducer } from './discoverReducer'
import { tvReducer } from './tvReducer'
import { searchReducer } from './searchReducer'
import { watchlistReducer } from './watchlistReducer'

export default combineReducers({
  trendingState: trendingReducer,
  movieState: movieReducer,
  discoverState: discoverReducer,
  tvState: tvReducer,
  searchState: searchReducer,
  watchlistState: watchlistReducer,
})
