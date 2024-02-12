import React from 'react'
// import PropTypes from 'prop-types'

import './ticket.scss'

const Ticket = ({ ticket }) => {
  const { price, carrier } = ticket
  const {
    origin: originTo,
    destination: destinationTo,
    duration: durationTo,
    stops: stopsTo,
    date: dateTo,
  } = ticket.segments[0]

  const {
    origin: originBack,
    destination: destinationBack,
    duration: durationBack,
    stops: stopsBack,
    date: dateBack,
  } = ticket.segments[1]

  const durationToHour = Math.floor(durationTo / 60)
  const durationToMinutes = durationTo % 60

  const durationBackHour = Math.floor(durationBack / 60)
  const durationBackMinutes = durationBack % 60

  const timeTo = dateTo.split('T')[1].split(':')
  const tt = `${timeTo[0]}:${timeTo[1]}`
  const fullTimeTo = Number(timeTo[0]) * 60 + Number(timeTo[1]) + Number(durationTo)
  const dTH =
    Math.floor(fullTimeTo / 60) < 24
      ? Math.floor(fullTimeTo / 60)
      : Math.floor(fullTimeTo / 60) - 24 > 9
        ? Math.floor(fullTimeTo / 60) - 24
        : `0${Math.floor(fullTimeTo / 60) - 24}`
  const dTM = fullTimeTo % 60 < 10 ? `0${fullTimeTo % 60}` : fullTimeTo % 60
  const tt2 = `${dTH}:${dTM}`

  const timeBack = dateBack.split('T')[1].split(':')
  const tb = `${timeBack[0]}:${timeBack[1]}`
  const fullTimeBack = Number(timeBack[0]) * 60 + Number(timeBack[1]) + Number(durationBack)
  const dBH =
    Math.floor(fullTimeBack / 60) < 24
      ? Math.floor(fullTimeBack / 60)
      : Math.floor(fullTimeBack / 60) - 24 > 9
        ? Math.floor(fullTimeBack / 60) - 24
        : `0${Math.floor(fullTimeBack / 60) - 24}`
  const dBM = fullTimeBack % 60 < 10 ? `0${fullTimeBack % 60}` : fullTimeBack % 60
  const tb2 = `${dBH}:${dBM}`

  const stopsEdit = (stopsTo) => {
    return stopsTo.length == 0 ? '0 ПЕРЕСАДОК' : stopsTo.length == 1 ? '1 ПЕРЕСАДКА' : `${stopsTo.length} ПЕРЕСАДКИ`
  }

  const stopsEditBack = (stopsBack) => {
    return stopsBack.length == 0
      ? '0 ПЕРЕСАДОК'
      : stopsBack.length == 1
        ? '1 ПЕРЕСАДКА'
        : `${stopsBack.length} ПЕРЕСАДКИ`
  }

  return (
    <div className="ticket">
      <span className="ticket__price">{price} Р</span>
      <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="air company" className="ticket__company-logo" />
      <div className="ticket__airport">
        <div className="ticket__airport_reduction">
          {originTo} - {destinationTo}
        </div>
        <div className="ticket__airport_time">
          {tt} - {tt2}
        </div>
      </div>
      <div className="ticket__on-way">
        <div className="ticket__on-way_way">В ПУТИ</div>
        <div className="ticket__on-way_time">
          {durationToHour}ч {durationToMinutes}м
        </div>
      </div>
      <div className="ticket__transfer-count">
        <div className="ticket__transfer-count_count">{stopsEdit(stopsTo)}</div>
        <div className="ticket__transfer-count_airport">{stopsTo.join(', ')}</div>
      </div>

      <div className="ticket__airport">
        <div className="ticket__airport_reduction">
          {originBack} - {destinationBack}
        </div>
        <div className="ticket__airport_time">
          {tb} - {tb2}
        </div>
      </div>
      <div className="ticket__on-way">
        <div className="ticket__on-way_way">В ПУТИ</div>
        <div className="ticket__on-way_time">
          {durationBackHour}ч {durationBackMinutes}м
        </div>
      </div>
      <div className="ticket__transfer-count">
        <div className="ticket__transfer-count_count">{stopsEditBack(stopsBack)}</div>
        <div className="ticket__transfer-count_airport">{stopsBack.join(', ')}</div>
      </div>
    </div>
  )
}

// Ticket.defaultProps = {}
// Ticket.propTypes = {}

export default Ticket
