import { Reducer } from 'redux'
import {
  FETCH_DISCOVER_ERROR,
  FETCH_DISCOVER_PENDING,
  FETCH_DISCOVER_SUCCESS,
  DiscoverActions,
} from 'actions/discoverActions'

export type DiscoverEntry = {
  title: string
  id: number
  poster_path: string
  overview: string
  backdrop_path: string
  vote_average: number
}

type DiscoverState = {
  moviesData: DiscoverEntry[]
  tvData: DiscoverEntry[]
  isPending: boolean
}

const initialState: DiscoverState = {
  moviesData: [],
  tvData: [],
  isPending: false,
}

export const discoverReducer: Reducer<DiscoverState> = (
  state = initialState,
  action: DiscoverActions
) => {
  switch (action.type) {
    case FETCH_DISCOVER_PENDING: {
      return {
        ...state,
        isPending: true,
      }
    }
    case FETCH_DISCOVER_SUCCESS: {
      return {
        ...state,
        tvData: action.payload.tvData,
        moviesData: action.payload.moviesData,
        isPending: false,
      }
    }
    case FETCH_DISCOVER_ERROR: {
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
