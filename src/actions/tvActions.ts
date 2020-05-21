import { Action, ActionCreator } from 'redux'
import apiClient from 'client'
import { TvEntry } from 'reducers/tvReducer'
import { fixTitle } from 'utils/fixJSON'

export const FETCH_TV_PENDING = 'FETCH_TV_PENDING'
export const FETCH_TV_SUCCESS = 'FETCH_TV_SUCCESS'
export const FETCH_TV_ERROR = 'FETCH_TV_ERROR'

export interface FetchTvPending extends Action {
  type: 'FETCH_TV_PENDING'
}

export const fetchTvPending: ActionCreator<FetchTvPending> = () => ({
  type: FETCH_TV_PENDING,
})

export interface FetchTvSuccess extends Action {
  type: 'FETCH_TV_SUCCESS'
  payload: { data: TvEntry[] }
}

export const fetchTvSuccess: ActionCreator<FetchTvSuccess> = (
  data: TvEntry[]
) => ({
  type: FETCH_TV_SUCCESS,
  payload: { data },
})

export interface FetchTvError extends Action {
  type: 'FETCH_TV_ERROR'
  payload: { error: any }
}

export const fetchTvError: ActionCreator<FetchTvError> = (error: any) => ({
  type: FETCH_TV_ERROR,
  payload: { error },
})

export const fetchTv = (id) => async (dispatch) => {
  try {
    dispatch(fetchTvPending())
    const { data } = await apiClient(`tv/${id}`, { method: 'GET' })

    dispatch(fetchTvSuccess(fixTitle(data)))
  } catch (error) {
    dispatch(fetchTvError(error.toString()))
    throw error
  }
}

export type TvActions = FetchTvPending | FetchTvSuccess | FetchTvError
