import { combineReducers } from 'redux'
import { trendingReducer } from './trendingReducer'
import { movieReducer } from './movieReducer'

export default combineReducers({
  trendingState: trendingReducer,
  movieState: movieReducer,
})
