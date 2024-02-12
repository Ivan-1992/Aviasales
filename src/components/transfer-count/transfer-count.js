import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../store/actions/transfer-actions'

import styles from './transfer-count.module.scss'

const TransferCount = ({ filters, setAllFilters, setFilter }) => {
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target

    if (name === 'all') {
      if (checked) {
        setAllFilters(true)
      } else {
        setAllFilters(false)
      }
    } else {
      setFilter(name, checked)
    }
  }

  const allChecked = filters.every((filter) => filter.checked)

  return (
    <form className={styles.transfer_count}>
      <div className={styles.transfer_count__count}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <div className={styles.transfer_count__checkbox}>
        <label>
          <input type="checkbox" name="all" checked={allChecked} onChange={handleCheckboxChange} />
          <span className={styles.checkBox}></span>
          Все
        </label>
      </div>

      {filters.map((filter) => (
        <div key={filter.name} className={styles.transfer_count__checkbox}>
          <label>
            <input type="checkbox" name={filter.name} checked={filter.checked} onChange={handleCheckboxChange} />
            <span className={styles.checkBox}></span>
            {filter.label}
          </label>
        </div>
      ))}
    </form>
  )
}

const mapStateToProps = (state) => ({
  filters: state.transfer.filters,
})

export default connect(mapStateToProps, actions)(TransferCount)
