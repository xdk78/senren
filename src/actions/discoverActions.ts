import { Action, ActionCreator } from 'redux'
import apiClient from 'client'
import { DiscoverEntry } from 'reducers/discoverReducer'

export const FETCH_DISCOVER_PENDING = 'FETCH_DISCOVER_PENDING'
export const FETCH_DISCOVER_SUCCESS = 'FETCH_DISCOVER_SUCCESS'
export const FETCH_DISCOVER_ERROR = 'FETCH_DISCOVER_ERROR'

export interface FetchDiscoverPending extends Action {
  type: 'FETCH_DISCOVER_PENDING'
}

export const fetchDiscoverPending: ActionCreator<FetchDiscoverPending> = () => ({
  type: FETCH_DISCOVER_PENDING,
})

export interface FetchDiscoverSuccess extends Action {
  type: 'FETCH_DISCOVER_SUCCESS'
  payload: { tvData: DiscoverEntry[]; moviesData: DiscoverEntry[] }
}

export const fetchDiscoverSuccess: ActionCreator<FetchDiscoverSuccess> = (
  tvData: DiscoverEntry[],
  moviesData: DiscoverEntry[]
) => ({
  type: FETCH_DISCOVER_SUCCESS,
  payload: { tvData, moviesData },
})

export interface FetchDiscoverError extends Action {
  type: 'FETCH_DISCOVER_ERROR'
  payload: { error: any }
}

export const fetchDiscoverError: ActionCreator<FetchDiscoverError> = (
  error: any
) => ({
  type: FETCH_DISCOVER_ERROR,
  payload: { error },
})

export const fetchDiscover = () => async (dispatch) => {
  try {
    dispatch(fetchDiscoverPending())
    const tvRes = await apiClient(`discover/tv`, {
      method: 'GET',
    })
    const movieRes = await apiClient(`discover/movie`, {
      method: 'GET',
    })
    dispatch(fetchDiscoverSuccess(tvRes.data, movieRes.data))
  } catch (error) {
    dispatch(fetchDiscoverError(error.toString()))
    throw error
  }
}

export type DiscoverActions =
  | FetchDiscoverPending
  | FetchDiscoverSuccess
  | FetchDiscoverError
