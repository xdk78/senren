import { Reducer } from 'redux'
import {
  WatchlistActions,
  ADD_TO_WATCHLIST_PENDING,
  ADD_TO_WATCHLIST_SUCCESS,
  ADD_TO_WATCHLIST_ERROR,
  FETCH_MOVIE_WATCHLIST_SUCCESS,
  FETCH_MOVIE_WATCHLIST_ERROR,
  FETCH_MOVIE_WATCHLIST_PENDING,
  FETCH_TV_WATCHLIST_ERROR,
  FETCH_TV_WATCHLIST_PENDING,
  FETCH_TV_WATCHLIST_SUCCESS,
  REMOVE_FROM_WATCHLIST_SUCCESS,
  REMOVE_FROM_WATCHLIST_ERROR,
  REMOVE_FROM_WATCHLIST_PENDING,
} from 'actions/watchlistActions'

type MovieState = {
  success: boolean
  isPending: boolean
}

export type WatchlistEntry = {
  title: string
  tmdbId: string
  backdrop_path: string
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
    case FETCH_MOVIE_WATCHLIST_PENDING: {
      return {
        ...state,
        isPending: true,
      }
    }
    case FETCH_MOVIE_WATCHLIST_SUCCESS: {
      return {
        ...state,
        movieWatchlistData: action.payload.data,
        isPending: false,
      }
    }
    case FETCH_MOVIE_WATCHLIST_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        isPending: false,
      }
    }
    case FETCH_TV_WATCHLIST_PENDING: {
      return {
        ...state,
        isPending: true,
      }
    }
    case FETCH_TV_WATCHLIST_SUCCESS: {
      return {
        ...state,
        tvWatchlistData: action.payload.data,
        isPending: false,
      }
    }
    case FETCH_TV_WATCHLIST_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        isPending: false,
      }
    }
    case REMOVE_FROM_WATCHLIST_PENDING: {
      return {
        ...state,
        isPending: true,
      }
    }
    case REMOVE_FROM_WATCHLIST_SUCCESS: {
      return {
        ...state,
        isPending: false,
      }
    }
    case REMOVE_FROM_WATCHLIST_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        isPending: false,
      }
    }

    default:
      return state
  }
}
