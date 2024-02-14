import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as actions from '../../store/actions/price-actions'

import styles from './price-filter.module.scss'

const PriceFilter = ({ cheap, fast, optimal }) => {
  const [activeButton, setActiveButton] = useState('cheap')

  const handleButtonClick = (filter) => {
    setActiveButton(filter)
    switch (filter) {
      case 'cheap':
        cheap()
        break
      case 'fast':
        fast()
        break
      case 'optimal':
        optimal()
        break
      default:
        break
    }
  }

  return (
    <div className={styles.price_filter}>
      <button
        className={`${styles.price_filter__button} ${styles.left} ${activeButton === 'cheap' ? styles.active : ''}`}
        onClick={() => handleButtonClick('cheap')}
        autoFocus={true}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        className={`${styles.price_filter__button} ${styles.middle} ${activeButton === 'fast' ? styles.active : ''}`}
        onClick={() => handleButtonClick('fast')}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        className={`${styles.price_filter__button} ${styles.right} ${activeButton === 'optimal' ? styles.active : ''}`}
        onClick={() => handleButtonClick('optimal')}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  )
}

PriceFilter.propTypes = {
  cheap: PropTypes.func.isRequired,
  fast: PropTypes.func.isRequired,
  optimal: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    price: state.price,
  }
}

export default connect(mapStateToProps, actions)(PriceFilter)
