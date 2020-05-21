import { combineReducers } from 'redux'
import { trendingReducer } from './trendingReducer'
import { movieReducer } from './movieReducer'
import { tvReducer } from './tvReducer'

export default combineReducers({
  trendingState: trendingReducer,
  movieState: movieReducer,
  tvState: tvReducer,
})
