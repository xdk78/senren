import { combineReducers } from 'redux'
import { trendingReducer } from './trendingReducer'
import { movieReducer } from './movieReducer'
import { discoverReducer } from './discoverReducer'
import { tvReducer } from './tvReducer'

export default combineReducers({
  trendingState: trendingReducer,
  movieState: movieReducer,
  discoverState: discoverReducer,
  tvState: tvReducer,
})
