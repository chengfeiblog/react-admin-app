import * as types from './action-type'

export function increment () {
  return {
    type: types.INCREMENT,
  }
}

export function decrement () {
  return {
    type: types.DECREMENT,
  }
}

export function reset () {
  return {
    type: types.RESET,
  }
}
