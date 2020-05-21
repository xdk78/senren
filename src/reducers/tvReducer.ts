import { Reducer } from 'redux'
import {
  FETCH_TV_SUCCESS,
  FETCH_TV_PENDING,
  FETCH_TV_ERROR,
  TvActions,
} from 'actions/tvActions'

export type TvEntry = {
  title: string
  id: number
  poster_path: string
  overview: string
  vote_average: number
}

type TvState = {
  data: TvEntry[]
  isPending: boolean
}

const initialState: TvState = {
  data: [],
  isPending: false,
}

export const tvReducer: Reducer<TvState> = (
  state = initialState,
  action: TvActions
) => {
  switch (action.type) {
    case FETCH_TV_PENDING: {
      return {
        ...state,
        isPending: true,
      }
    }
    case FETCH_TV_SUCCESS: {
      return {
        ...state,
        tvData: action.payload.tvData,
        trailerData: action.payload.trailerData,
        isPending: false,
      }
    }
    case FETCH_TV_ERROR: {
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
