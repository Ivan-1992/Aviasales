import { FETCH_TICKETS_REQUEST, FETCH_TICKETS_SUCCESS, FETCH_TICKETS_FAILURE, FETCH_TICKETS_CONTINUE } from '../types'

const initialState = {
  tickets: [],
  loading: false,
  error: null,
  stop: false,
}

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKETS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        loading: false,
        stop: true,
      }
    case FETCH_TICKETS_CONTINUE:
      return {
        ...state,
        loading: true,
        tickets: state.tickets.concat(action.tickets.tickets),
      }
    case FETCH_TICKETS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state
  }
}

export default ticketsReducer
