import { combineReducers } from 'redux'
import { trendingReducer } from './trendingReducer'
import { movieReducer } from './movieReducer'
import { discoverReducer } from './discoverReducer'
import { tvReducer } from './tvReducer'
import { searchReducer } from './searchReducer'

export default combineReducers({
  trendingState: trendingReducer,
  movieState: movieReducer,
  discoverState: discoverReducer,
  tvState: tvReducer,
  searchState: searchReducer,
})
