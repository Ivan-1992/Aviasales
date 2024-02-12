import { FETCH_TICKETS_REQUEST, FETCH_TICKETS_SUCCESS, FETCH_TICKETS_FAILURE } from '../types'

export const fetchTicketsRequest = () => ({
  type: FETCH_TICKETS_REQUEST,
})

export const fetchTicketsSuccess = (tickets) => ({
  type: FETCH_TICKETS_SUCCESS,
  tickets,
})

export const fetchTicketsFailure = (error) => ({
  type: FETCH_TICKETS_FAILURE,
  error,
})

export const fetchTickets = () => {
  return async (dispatch) => {
    dispatch(fetchTicketsRequest())
    try {
      const searchIdResponse = await fetch('https://aviasales-test-api.kata.academy/search')
      const searchIdData = await searchIdResponse.json()
      const searchId = searchIdData.searchId

      const ticketsResponse = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
      const ticketsData = await ticketsResponse.json()
      dispatch(fetchTicketsSuccess(ticketsData))
    } catch (error) {
      dispatch(fetchTicketsFailure(error))
    }
  }
}
