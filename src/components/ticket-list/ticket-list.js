import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import Ticket from '../ticket'
import { fetchTickets } from '../../store/actions/tickets-action'

import styles from './ticket-list.module.scss'

const TicketList = () => {
  const dispatch = useDispatch()
  const { tickets } = useSelector((state) => state.tickets)

  const loading = useSelector((state) => state.loading)
  const error = useSelector((state) => state.error)
  const [visibleTickets, setVisibleTickets] = useState(5)

  useEffect(() => {
    dispatch(fetchTickets())
  }, [dispatch])

  const showMoreTickets = () => {
    setVisibleTickets((visibleTickets) => visibleTickets + 5)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <>
      {tickets && tickets.tickets && (
        <ul className={styles.ticket_list}>
          {tickets.tickets.slice(0, visibleTickets).map((ticket, index) => (
            <li key={index}>
              <Ticket ticket={ticket} />
            </li>
          ))}
        </ul>
      )}
      {tickets && tickets.tickets && visibleTickets < tickets.tickets.length && (
        <button className={styles.more_button} onClick={showMoreTickets}>
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      )}
    </>
  )
}

// TicketList.defaultProps={}
// TicketList.propTypes={}

export default TicketList
