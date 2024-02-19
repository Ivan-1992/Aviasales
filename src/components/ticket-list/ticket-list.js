import React, { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import Ticket from '../ticket'
import Spinner from '../spinner'
import { fetchTickets } from '../../store/actions/tickets-action'
import priceSort from '../../utilities/price-sort'
import transferSort from '../../utilities/transfer-sort'
import ErrorIndicator from '../error-indicator'

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

  const sortedTickets = useMemo(() => priceSort(tickets, price), [tickets, price])
  const filteredTickets = useMemo(() => transferSort(sortedTickets, transfer), [sortedTickets, transfer])

  const load = loading ? (
    <div className={styles.spinner}>
      <Spinner />
    </div>
  ) : null

  const errs = error ? <ErrorIndicator error={error} /> : null

  const noData =
    !errs && !load && filteredTickets.length === 0 ? (
      <div>Рейсов, подходящих под заданные фильтры, не найдено</div>
    ) : null

  return (
    <>
      {errs}
      {load}
      {noData}
      {filteredTickets.length > 0 && (
        <ul className={styles.ticket_list}>
          {filteredTickets.slice(0, visibleTickets).map((ticket) => (
            <li key={ticket.price + ticket.carrier + ticket.segments[0].duration + ticket.segments[1].stops[0]}>
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
