import { Reducer } from 'redux'
import {
  FETCH_SEARCH_ERROR,
  FETCH_SEARCH_PENDING,
  FETCH_SEARCH_SUCCESS,
  SearchActions,
} from 'actions/searchAction'

export type SearchEntry = {
  title: string
  id: number
  poster_path: string
  overview: string
  vote_average: number
}

type SearchState = {
  data: SearchEntry[]
  isPending: boolean
}

const initialState: SearchState = {
  data: [],
  isPending: false,
}

export const searchReducer: Reducer<SearchState> = (
  state = initialState,
  action: SearchActions
) => {
  switch (action.type) {
    case FETCH_SEARCH_PENDING: {
      return {
        ...state,
        isPending: true,
      }
    }
    case FETCH_SEARCH_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        isPending: false,
      }
    }
    case FETCH_SEARCH_ERROR: {
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
