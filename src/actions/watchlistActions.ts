import { Action, ActionCreator } from 'redux'
import firebase from 'firebase/clientApp'
import { EntryType } from './trendingActions'

export const ADD_TO_WATCHLIST_PENDING = 'ADD_TO_WATCHLIST_PENDING'
export const ADD_TO_WATCHLIST_SUCCESS = 'ADD_TO_WATCHLIST_SUCCESS'
export const ADD_TO_WATCHLIST_ERROR = 'ADD_TO_WATCHLIST_ERROR'

export interface AddToWatchlistPending extends Action {
  type: 'ADD_TO_WATCHLIST_PENDING'
}

export const addToWatchlistPending: ActionCreator<AddToWatchlistPending> = () => ({
  type: ADD_TO_WATCHLIST_PENDING,
})

export interface AddToWatchlistSucces extends Action {
  type: 'ADD_TO_WATCHLIST_SUCCESS'
}

export const fetchTrendingSuccess: ActionCreator<AddToWatchlistSucces> = () => ({
  type: ADD_TO_WATCHLIST_SUCCESS,
})

export interface AddToWatchlistError extends Action {
  type: 'ADD_TO_WATCHLIST_ERROR'
  payload: { error: any }
}

export const fetchTrendingError: ActionCreator<AddToWatchlistError> = (
  error: any
) => ({
  type: ADD_TO_WATCHLIST_ERROR,
  payload: { error },
})

export const addToWatchlist = (
  type: EntryType,
  user: firebase.User,
  data
) => async (dispatch) => {
  try {
    dispatch(addToWatchlistPending())
    await firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('watchlist')
      .doc(type)
      .collection('items')
      .doc(data.tmdbId.toString())
      .set(
        {
          tmdbId: data.tmdbId.toString(),
          title: data.title,
          type: 'WATCHING',
        },
        { merge: true }
      )

    dispatch(fetchTrendingSuccess())
  } catch (error) {
    dispatch(fetchTrendingError(error.toString()))
    throw error
  }
}

export type WatchlistActions =
  | AddToWatchlistPending
  | AddToWatchlistSucces
  | AddToWatchlistError
