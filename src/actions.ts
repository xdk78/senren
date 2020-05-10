export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const RESET = 'RESET'

// INCREMENT COUNTER BY 1
export const incrementCount = () => ({ type: INCREMENT })

// DECREMENT COUNTER BY 1
export const decrementCount = () => ({ type: DECREMENT })

// RESET COUNTER
export const resetCount = () => ({ type: RESET })
