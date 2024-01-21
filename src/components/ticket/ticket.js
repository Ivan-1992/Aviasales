import React from 'react'
// import PropTypes from 'prop-types'

import icon from './S7 Logo.png'
import './ticket.scss'

const Ticket = () => {
  return (
    <div className="ticket">
      <span className="ticket__price">13 400 Р</span>
      <img src={icon} alt="air company" className="ticket__company-logo" />
      <div className="ticket__airport">
        <div className="ticket__airport_reduction">MOW - HKT</div>
        <div className="ticket__airport_time">10:45 - 08:00</div>
      </div>
      <div className="ticket__on-way">
        <div className="ticket__on-way_way">В ПУТИ</div>
        <div className="ticket__on-way_time">21ч 15м</div>
      </div>
      <div className="ticket__transfer-count">
        <div className="ticket__transfer-count_count">2 ПЕРЕСАДКИ</div>
        <div className="ticket__transfer-count_airport">HKG, JNB</div>
      </div>

      <div className="ticket__airport">
        <div className="ticket__airport_reduction">MOW - HKT</div>
        <div className="ticket__airport_time">11:20 - 00:50</div>
      </div>
      <div className="ticket__on-way">
        <div className="ticket__on-way_way">В ПУТИ</div>
        <div className="ticket__on-way_time">13ч 30м</div>
      </div>
      <div className="ticket__transfer-count">
        <div className="ticket__transfer-count_count">1 ПЕРЕСАДКА</div>
        <div className="ticket__transfer-count_airport">HKG</div>
      </div>
    </div>
  )
}

// Ticket.defaultProps = {}
// Ticket.propTypes = {}

export default Ticket
