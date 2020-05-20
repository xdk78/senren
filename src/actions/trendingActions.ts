import { Action, ActionCreator } from 'redux'
import apiClient from 'client'
import { TrendingEntry } from 'reducers/trendingReducer'

export const FETCH_TRENDING_PENDING = 'FETCH_TRENDING_PENDING'
export const FETCH_TRENDING_SUCCESS = 'FETCH_TRENDING_SUCCESS'
export const FETCH_TRENDING_ERROR = 'FETCH_TRENDING_ERROR'

export interface FetchTrendingPending extends Action {
  type: 'FETCH_TRENDING_PENDING'
}

export const fetchTrendingPending: ActionCreator<FetchTrendingPending> = () => ({
  type: FETCH_TRENDING_PENDING,
})

export interface FetchTrendingSuccess extends Action {
  type: 'FETCH_TRENDING_SUCCESS'
  payload: { data: TrendingEntry[] }
}

export const fetchTrendingSuccess: ActionCreator<FetchTrendingSuccess> = (
  data: TrendingEntry[]
) => ({
  type: FETCH_TRENDING_SUCCESS,
  payload: { data },
})

export interface FetchTrendingError extends Action {
  type: 'FETCH_TRENDING_ERROR'
  payload: { error: any }
}

export const fetchTrendingError: ActionCreator<FetchTrendingError> = (
  error: any
) => ({
  type: FETCH_TRENDING_ERROR,
  payload: { error },
})

export const fetchTrending = () => async (dispatch) => {
  try {
    dispatch(fetchTrendingPending())
    const { data } = await apiClient(`trending/movie/week`, { method: 'GET' })
    const res = data.results
    res.map((el) => {
      if (!el.title) {
        el.title = el.name
      }
      return el
    })

    dispatch(fetchTrendingSuccess(data.results))
  } catch (error) {
    dispatch(fetchTrendingError(error.toString()))
    throw error
  }
}

export type TrendingActions =
  | FetchTrendingPending
  | FetchTrendingSuccess
  | FetchTrendingError
