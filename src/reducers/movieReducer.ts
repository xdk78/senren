import { Reducer } from 'redux'
import {
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_PENDING,
  FETCH_MOVIE_ERROR,
  MovieActions,
} from 'actions/movieActions'

export type MovieEntry = {
  title: string
  id: number
  poster_path: string
  overview: string
  vote_average: number
}

type MovieState = {
  data: MovieEntry[]
  isPending: boolean
}

const initialState: MovieState = {
  data: [],
  isPending: false,
}

export const movieReducer: Reducer<MovieState> = (
  state = initialState,
  action: MovieActions
) => {
  switch (action.type) {
    case FETCH_MOVIE_PENDING: {
      return {
        ...state,
        isPending: true,
      }
    }
    case FETCH_MOVIE_SUCCESS: {
      return {
        ...state,
        movieData: action.payload.movieData,
        trailerData: action.payload.trailerData,
        isPending: false,
      }
    }
    case FETCH_MOVIE_ERROR: {
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
