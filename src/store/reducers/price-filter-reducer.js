import { CHEAP, FAST, OPTIMAL } from '../types'

const initialState = { filter: 'cheap' }

const priceFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHEAP:
      return { ...state, filter: 'cheap' }
    case FAST:
      return { ...state, filter: 'fast' }
    case OPTIMAL:
      return { ...state, filter: 'optimal' }
    default:
      return state
  }
}

export default priceFilterReducer
