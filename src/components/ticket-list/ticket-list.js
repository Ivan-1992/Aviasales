import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import Ticket from '../ticket'
import Spinner from '../spinner'
import { fetchTickets } from '../../store/actions/tickets-action'

import styles from './ticket-list.module.scss'

const TicketList = () => {
  const dispatch = useDispatch()
  const { tickets } = useSelector((state) => state.tickets)
  const transfer = useSelector((state) => state.transfer.filters)
  const price = useSelector((state) => state.price.filter)
  const loading = useSelector((state) => state.tickets.loading)
  const error = useSelector((state) => state.tickets.error)
  const [visibleTickets, setVisibleTickets] = useState(5)

  useEffect(() => {
    dispatch(fetchTickets())
  }, [dispatch])

  const showMoreTickets = () => {
    setVisibleTickets((visibleTickets) => visibleTickets + 5)
  }

  const transferSort = (tickets) => {
    const checkedTransfers = transfer.filter((tr) => tr.checked)
    if (checkedTransfers.length === 4) return tickets
    return tickets.filter((ticket) => {
      const stops = ticket.segments[0].stops.length
      return checkedTransfers.some((tr) => {
        if (tr.name === 'filter1' && stops === 0) return true
        if (tr.name === 'filter2' && stops === 1) return true
        if (tr.name === 'filter3' && stops === 2) return true
        if (tr.name === 'filter4' && stops === 3) return true
        return false
      })
    })
  }

  const priceSort = (tickets) => {
    if (price === 'cheap') return [...tickets].sort((a, b) => a.price - b.price)
    if (price === 'fast') return [...tickets].sort((a, b) => a.segments[0].duration - b.segments[0].duration)
    if (price === 'optimal') return [...tickets].sort((a, b) => a.segments[1].duration - b.segments[1].duration)
  }

  const sortingTickets = tickets ? transferSort(priceSort(tickets)) : []

  const load = loading ? (
    <div className={styles.spinner}>
      <Spinner />
    </div>
  ) : null

  const noData =
    !load && sortingTickets.length === 0 ? <div>Рейсов, подходящих под заданные фильтры, не найдено</div> : null

  if (error) {
    return
  }

  return (
    <>
      {load}
      {noData}
      {sortingTickets.length > 0 && (
        <ul className={styles.ticket_list}>
          {sortingTickets.slice(0, visibleTickets).map((ticket, index) => (
            <li key={index}>
              <Ticket ticket={ticket} />
            </li>
          ))}
        </ul>
      )}

      {!noData && tickets && visibleTickets < tickets.length && (
        <button className={styles.more_button} onClick={showMoreTickets}>
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      )}
    </>
  )
}

TicketList.propTypes = {
  tickets: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
  visibleTickets: PropTypes.number,
  transfer: PropTypes.array,
  price: PropTypes.string,
}

TicketList.defaultProps = {
  tickets: [],
  loading: false,
  error: '',
  visibleTickets: 5,
  transfer: [],
  price: 'cheap',
}

export default TicketList
