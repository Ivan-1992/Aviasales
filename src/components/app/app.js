import React from 'react'

import PriceFilter from '../price-filter'
import TicketList from '../ticket-list'
import TransferCount from '../transfer-count'
import icon from '../../assets/Logo.png'

import style from './app.module.scss'

const App = () => {
  return (
    <div className={style.general}>
      <img src={icon} alt="airplane" className={style.general__airplane} />
      <div className={style.general__transfer_count}>
        <TransferCount />
      </div>
      <div className={style.general__price_filter}>
        <PriceFilter />
      </div>
      <div className={style.general__ticket_list}>
        <TicketList />
      </div>
    </div>
  )
}

export default App
