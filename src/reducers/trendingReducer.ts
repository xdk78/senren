import { Reducer } from 'redux'
import {
  FETCH_TRENDING_SUCCESS,
  FETCH_TRENDING_ERROR,
  FETCH_TRENDING_PENDING,
  TrendingActions,
} from 'actions/trendingActions'

export type TrendingEntry = {
  title: string
  id: number
  poster_path: string
  overview: string
  vote_average: number
}

type TrendingState = {
  data: TrendingEntry[]
  isPending: boolean
}

const initialState: TrendingState = {
  data: [],
  isPending: false,
}

export const trendingReducer: Reducer<TrendingState> = (
  state = initialState,
  action: TrendingActions
) => {
  switch (action.type) {
    case FETCH_TRENDING_PENDING: {
      return {
        ...state,
        isPending: true,
      }
    }
    case FETCH_TRENDING_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        isPending: false,
      }
    }
    case FETCH_TRENDING_ERROR: {
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
