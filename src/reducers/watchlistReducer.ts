import { Reducer } from 'redux'
import {
  WatchlistActions,
  ADD_TO_WATCHLIST_PENDING,
  ADD_TO_WATCHLIST_SUCCESS,
  ADD_TO_WATCHLIST_ERROR,
} from 'actions/watchlistActions'

type MovieState = {
  success: boolean
  isPending: boolean
}

const initialState: MovieState = {
  success: false,
  isPending: false,
}

export const watchlistReducer: Reducer<MovieState> = (
  state = initialState,
  action: WatchlistActions
) => {
  switch (action.type) {
    case ADD_TO_WATCHLIST_PENDING: {
      return {
        ...state,
        isPending: true,
      }
    }
    case ADD_TO_WATCHLIST_SUCCESS: {
      return {
        ...state,
        success: true,
        isPending: false,
      }
    }
    case ADD_TO_WATCHLIST_ERROR: {
      return {
        ...state,
        success: false,
        error: action.payload.error,
        isPending: false,
      }
    }

    default:
      return state
  }
}
