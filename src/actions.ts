export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const RESET = 'RESET'

export const FETCH_TRENDING_PENDING = 'FETCH_TRENDING_PENDING'
export const FETCH_TRENDING_SUCCESS = 'FETCH_TRENDING_SUCCESS'
export const FETCH_TRENDING_ERROR = 'FETCH_TRENDING_ERROR'

// INCREMENT COUNTER BY 1
export const incrementCount = () => ({ type: INCREMENT })

// DECREMENT COUNTER BY 1
export const decrementCount = () => ({ type: DECREMENT })

// RESET COUNTER
export const resetCount = () => ({ type: RESET })
