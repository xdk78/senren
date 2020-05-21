import { combineReducers } from 'redux'
import { trendingReducer } from './trendingReducer'
import { movieReducer } from './movieReducer'
import { discoverReducer } from './discoverReducer'

export default combineReducers({
  trendingState: trendingReducer,
  movieState: movieReducer,
  discoverState: discoverReducer,
})
