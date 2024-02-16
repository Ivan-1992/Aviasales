import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { cheap, fast, optimal } from '../../store/actions/price-actions'

import styles from './price-filter.module.scss'

const PriceFilter = () => {
  const [activeButton, setActiveButton] = useState('cheap')
  const dispatch = useDispatch()

  const handleButtonClick = (filter) => {
    setActiveButton(filter)
    switch (filter) {
      case 'cheap':
        dispatch(cheap())
        break
      case 'fast':
        dispatch(fast())
        break
      case 'optimal':
        dispatch(optimal())
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

export default PriceFilter
