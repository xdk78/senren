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
  payload: { data: MovieEntry[] }
}

export const fetchMovieSuccess: ActionCreator<FetchMovieSuccess> = (
  data: MovieEntry[]
) => ({
  type: FETCH_MOVIE_SUCCESS,
  payload: { data },
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
    const { data } = await apiClient(`movie/${id}`, { method: 'GET' })

    dispatch(fetchMovieSuccess(fixTitle(data)))
  } catch (error) {
    dispatch(fetchMovieError(error.toString()))
    throw error
  }
}

export type MovieActions =
  | FetchMoviePending
  | FetchMovieSuccess
  | FetchMovieError
