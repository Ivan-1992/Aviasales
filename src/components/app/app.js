import React from 'react'

import PriceFilter from '../price-filter'
import TicketList from '../ticket-list'
import TransferCount from '../transfer-count'
import icon from '../../assets/Logo.png'
import './app.scss'

const App = () => {
  return (
    <div className="general">
      <img src={icon} alt="airplane" className="general__airplane" />
      <div className="general__transfer-count">
        <TransferCount />
      </div>
      <div className="general__price-filter">
        <PriceFilter />
      </div>
      <div className="general__ticket-list">
        <TicketList />
      </div>
    </div>
  )
}

export default App
