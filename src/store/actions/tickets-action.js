import { FETCH_TICKETS_REQUEST, FETCH_TICKETS_SUCCESS, FETCH_TICKETS_FAILURE, FETCH_TICKETS_CONTINUE } from '../types'

export const fetchTicketsRequest = () => ({
  type: FETCH_TICKETS_REQUEST,
})

export const fetchTicketsSuccess = () => ({
  type: FETCH_TICKETS_SUCCESS,
})

export const fetchTicketsFailure = (error) => ({
  type: FETCH_TICKETS_FAILURE,
  error: error.message,
})

export const fetchTicketsContinue = (tickets) => ({
  type: FETCH_TICKETS_CONTINUE,
  tickets,
})

export const fetchTickets = () => {
  let stopSignalReceived = false

  return async (dispatch) => {
    dispatch(fetchTicketsRequest())
    try {
      const searchIdResponse = await fetch('https://aviasales-test-api.kata.academy/search')
      const searchIdData = await searchIdResponse.json()
      const searchId = searchIdData.searchId

      while (!stopSignalReceived) {
        try {
          const ticketsResponse = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
          const ticketsData = await ticketsResponse.json()

          if (ticketsData.stop) {
            stopSignalReceived = true
            dispatch(fetchTicketsSuccess(ticketsData))
          } else {
            dispatch(fetchTicketsContinue(ticketsData))
          }
        } catch (error) {
          console.error('Error fetching tickets:', error)
        }
      }
    } catch (error) {
      dispatch(fetchTicketsFailure(error))
    }
  }
}
