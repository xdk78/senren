import { Action, ActionCreator } from 'redux'
import apiClient from 'client'
import { fixTitle } from 'utils/fixJSON'
// import { SearchEntry } from 'reducers/searchReducer'

export const FETCH_SEARCH_PENDING = 'FETCH_SEARCH_PENDING'
export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS'
export const FETCH_SEARCH_ERROR = 'FETCH_SEARCH_ERROR'

export interface FetchSearchPending extends Action {
  type: 'FETCH_SEARCH_PENDING'
}

export const fetchSearchPending: ActionCreator<FetchSearchPending> = () => ({
  type: FETCH_SEARCH_PENDING,
})

export interface FetchSearchSuccess extends Action {
  type: 'FETCH_SEARCH_SUCCESS'
  payload: { data }
}

export const fetchSearchSuccess: ActionCreator<FetchSearchSuccess> = (
  data
) => ({
  type: FETCH_SEARCH_SUCCESS,
  payload: { data },
})

export interface FetchSearchError extends Action {
  type: 'FETCH_SEARCH_ERROR'
  payload: { error: any }
}

export const fetchSearchError: ActionCreator<FetchSearchError> = (
  error: any
) => ({
  type: FETCH_SEARCH_ERROR,
  payload: { error },
})

export const fetchSearch = (query) => async (dispatch) => {
  try {
    dispatch(fetchSearchPending())
    const { data } = await apiClient(
      `search/multi?query=${decodeURIComponent(query)}`,
      { method: 'GET' }
    )
    const res = data.results.map((el) => fixTitle(el))
    dispatch(fetchSearchSuccess(res))
  } catch (error) {
    dispatch(fetchSearchError(error.toString()))
    throw error
  }
}

export type SearchActions =
  | FetchSearchPending
  | FetchSearchSuccess
  | FetchSearchError
