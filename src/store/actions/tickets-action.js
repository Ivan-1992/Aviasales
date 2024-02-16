import { FETCH_TICKETS_REQUEST, FETCH_TICKETS_SUCCESS, FETCH_TICKETS_FAILURE, FETCH_TICKETS_CONTINUE } from '../types'

export const fetchTicketsRequest = () => ({
  type: FETCH_TICKETS_REQUEST,
})

export const fetchTicketsSuccess = (tickets) => ({
  type: FETCH_TICKETS_SUCCESS,
  tickets,
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
  const baseUrl = 'https://aviasales-test-api.kata.academy/'
  let stopSignalReceived = false

  return async (dispatch) => {
    dispatch(fetchTicketsRequest())
    const searchIdResponse = await fetch(`${baseUrl}search`)
    const searchIdData = await searchIdResponse.json()
    const searchId = searchIdData.searchId

    while (!stopSignalReceived) {
      let status
      try {
        const ticketsResponse = await fetch(`${baseUrl}tickets?searchId=${searchId}`)
        status = ticketsResponse.status
        const ticketsData = await ticketsResponse.json()

        if (ticketsData.stop) {
          stopSignalReceived = true
          dispatch(fetchTicketsSuccess(ticketsData))
        } else {
          dispatch(fetchTicketsContinue(ticketsData))
        }
      } catch (error) {
        if (status >= 500) {
          continue
        } else {
          dispatch(fetchTicketsFailure(error))
        }
      }
    }
  }
}
