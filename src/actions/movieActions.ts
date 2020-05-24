import { Action, ActionCreator } from 'redux'
import apiClient from 'client'
import { MovieEntry } from 'reducers/movieReducer'
import { fixTitle } from 'utils/fixJSON'

export const FETCH_MOVIE_PENDING = 'FETCH_MOVIE_PENDING'
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS'
export const FETCH_MOVIE_ERROR = 'FETCH_MOVIE_ERROR'

export interface FetchMoviePending extends Action {
  type: 'FETCH_MOVIE_PENDING'
}

export const fetchMoviePending: ActionCreator<FetchMoviePending> = () => ({
  type: FETCH_MOVIE_PENDING,
})

export interface FetchMovieSuccess extends Action {
  type: 'FETCH_MOVIE_SUCCESS'
  payload: { movieData: MovieEntry[]; trailerData: any }
}

export const fetchMovieSuccess: ActionCreator<FetchMovieSuccess> = (
  movieData: MovieEntry[],
  trailerData: any
) => ({
  type: FETCH_MOVIE_SUCCESS,
  payload: { movieData, trailerData },
})

export interface FetchMovieError extends Action {
  type: 'FETCH_MOVIE_ERROR'
  payload: { error: any }
}

export const fetchMovieError: ActionCreator<FetchMovieError> = (
  error: any
) => ({
  type: FETCH_MOVIE_ERROR,
  payload: { error },
})

export const fetchMovie = (id) => async (dispatch) => {
  try {
    dispatch(fetchMoviePending())
    const movieRes = await apiClient(`movie/${id}`, { method: 'GET' })
    const trailerRes = await apiClient(`movie/${id}/videos`, { method: 'GET' })
    dispatch(fetchMovieSuccess(fixTitle(movieRes.data), trailerRes.data))
  } catch (error) {
    dispatch(fetchMovieError(error.toString()))
    throw error
  }
}

export type MovieActions =
  | FetchMoviePending
  | FetchMovieSuccess
  | FetchMovieError
