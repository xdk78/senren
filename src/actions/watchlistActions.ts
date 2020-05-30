import { Action, ActionCreator } from 'redux'
import firebase from 'firebase/clientApp'
import { EntryType } from './trendingActions'
import { WatchlistEntry } from 'reducers/watchlistReducer'

export const ADD_TO_WATCHLIST_PENDING = 'ADD_TO_WATCHLIST_PENDING'
export const ADD_TO_WATCHLIST_SUCCESS = 'ADD_TO_WATCHLIST_SUCCESS'
export const ADD_TO_WATCHLIST_ERROR = 'ADD_TO_WATCHLIST_ERROR'
export const FETCH_MOVIE_WATCHLIST_PENDING = 'FETCH_MOVIE_WATCHLIST_PENDING'
export const FETCH_MOVIE_WATCHLIST_SUCCESS = 'FETCH_MOVIE_WATCHLIST_SUCCESS'
export const FETCH_MOVIE_WATCHLIST_ERROR = 'FETCH_MOVIE_WATCHLIST_ERROR'
export const FETCH_TV_WATCHLIST_PENDING = 'FETCH_TV_WATCHLIST_PENDING'
export const FETCH_TV_WATCHLIST_SUCCESS = 'FETCH_TV_WATCHLIST_SUCCESS'
export const FETCH_TV_WATCHLIST_ERROR = 'FETCH_TV_WATCHLIST_ERROR'

export interface AddToWatchlistPending extends Action {
  type: 'ADD_TO_WATCHLIST_PENDING'
}

export const addToWatchlistPending: ActionCreator<AddToWatchlistPending> = () => ({
  type: ADD_TO_WATCHLIST_PENDING,
})

export interface AddToWatchlistSucces extends Action {
  type: 'ADD_TO_WATCHLIST_SUCCESS'
}

export const addToWatchlistSuccess: ActionCreator<AddToWatchlistSucces> = () => ({
  type: ADD_TO_WATCHLIST_SUCCESS,
})

export interface AddToWatchlistError extends Action {
  type: 'ADD_TO_WATCHLIST_ERROR'
  payload: { error: any }
}

export const addToWatchlistError: ActionCreator<AddToWatchlistError> = (
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
          poster_path: data.poster_path,
          type: 'WATCHING',
        },
        { merge: true }
      )

    dispatch(addToWatchlistSuccess())
  } catch (error) {
    dispatch(addToWatchlistError(error.toString()))
    throw error
  }
}

// FETCH MOVIE WATCHLIST

export interface fetchMovieWatchlistPending extends Action {
  type: 'FETCH_MOVIE_WATCHLIST_PENDING'
}

export const fetchMovieWatchlistPending: ActionCreator<fetchMovieWatchlistPending> = () => ({
  type: FETCH_MOVIE_WATCHLIST_PENDING,
})

export interface fetchMovieWatchlistSuccess extends Action {
  type: 'FETCH_MOVIE_WATCHLIST_SUCCESS'
  payload: { data: WatchlistEntry[] }
}

export const fetchMovieWatchlistSuccess: ActionCreator<fetchMovieWatchlistSuccess> = (
  data
) => ({
  type: FETCH_MOVIE_WATCHLIST_SUCCESS,
  payload: { data },
})

export interface fetchMovieWatchlistError extends Action {
  type: 'FETCH_MOVIE_WATCHLIST_ERROR'
  payload: { error: any }
}

export const fetchMovieWatchlistError: ActionCreator<fetchMovieWatchlistError> = (
  error: any
) => ({
  type: FETCH_MOVIE_WATCHLIST_ERROR,
  payload: { error },
})

export const fetchMovieWatchlist = (user: firebase.User) => async (
  dispatch
) => {
  const documentsCollection = (doc) => {
    return { id: doc.id, ...doc.data() }
  }
  try {
    dispatch(fetchMovieWatchlistPending())
    await firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('watchlist')
      .doc('movie')
      .collection('items')
      .onSnapshot((snapshot) => {
        const dataFromCollection = snapshot.docs.map(documentsCollection)
        dispatch(fetchMovieWatchlistSuccess(dataFromCollection))
      })
  } catch (error) {
    dispatch(fetchMovieWatchlistError(error.toString()))
    throw error
  }
}

//FETCH TV WATCHLIST

export interface fetchTvWatchlistPending extends Action {
  type: 'FETCH_TV_WATCHLIST_PENDING'
}

export const fetchTvWatchlistPending: ActionCreator<fetchTvWatchlistPending> = () => ({
  type: FETCH_TV_WATCHLIST_PENDING,
})

export interface fetchTvWatchlistSuccess extends Action {
  type: 'FETCH_TV_WATCHLIST_SUCCESS'
  payload: { data: WatchlistEntry[] }
}

export const fetchTvWatchlistSuccess: ActionCreator<fetchTvWatchlistSuccess> = (
  data
) => ({
  type: FETCH_TV_WATCHLIST_SUCCESS,
  payload: { data },
})

export interface fetchTvWatchlistError extends Action {
  type: 'FETCH_TV_WATCHLIST_ERROR'
  payload: { error: any }
}

export const fetchTvWatchlistError: ActionCreator<fetchTvWatchlistError> = (
  error: any
) => ({
  type: FETCH_TV_WATCHLIST_ERROR,
  payload: { error },
})

export const fetchTvWatchlist = (user: firebase.User) => async (dispatch) => {
  const documentsCollection = (doc) => {
    return { id: doc.id, ...doc.data() }
  }
  try {
    dispatch(fetchTvWatchlistPending())
    await firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('watchlist')
      .doc('tv')
      .collection('items')
      .onSnapshot((snapshot) => {
        const dataFromCollection = snapshot.docs.map(documentsCollection)
        dispatch(fetchTvWatchlistSuccess(dataFromCollection))
      })
  } catch (error) {
    dispatch(fetchTvWatchlistError(error.toString()))
    throw error
  }
}

export type WatchlistActions =
  | AddToWatchlistPending
  | AddToWatchlistSucces
  | AddToWatchlistError
  | fetchMovieWatchlistPending
  | fetchMovieWatchlistSuccess
  | fetchMovieWatchlistError
  | fetchTvWatchlistPending
  | fetchTvWatchlistSuccess
  | fetchTvWatchlistError
