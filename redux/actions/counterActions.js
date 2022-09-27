// Action type

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

// Action Create
export const incrementCounter = (value) => ({
  type: INCREMENT_COUNTER,
  data: value
})
export const decrementCounter = () => ({
  type: DECREMENT_COUNTER
})