import { createStore, action } from 'easy-peasy'

const counter = {
  count: 0,
  increment: action(state => {
    state.count++
  }),
  decrement: action(state => {
    state.count--
  }),
  reset: action(state => {
    state.count = 0
  }),
}

const model = {
  counter,
}

export default model

export function initializeStore(initialState) {
  return createStore(model, initialState)
}
