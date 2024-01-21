import React from 'react'
import './transfer-count.module.scss'
// import PropTypes from 'prop-types'

const TransferCount = () => {
  return (
    <form className="transfer-count">
      <div className="transfer-count__count">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <label>
        <input type="checkbox" />
        Все
      </label>
      <label>
        <input type="checkbox" />
        Без пересадок
      </label>
      <label>
        <input type="checkbox" />1 пересадка
      </label>
      <label>
        <input type="checkbox" />2 пересадки
      </label>
      <label>
        <input type="checkbox" />3 пересадки
      </label>
    </form>
  )
}

// TransferCount.defaultProps={}
// TransferCount.propTypes={}

export default TransferCount
