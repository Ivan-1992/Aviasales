import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as actions from '../../store/actions'
import './price-filter.scss'

const PriceFilter = ({ cheap, fast, optimal }) => {
  return (
    <div className="price-filter">
      <button className="price-filter__button left" onClick={cheap} autoFocus={true}>
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button className="price-filter__button middle" onClick={fast}>
        САМЫЙ БЫСТРЫЙ
      </button>
      <button className="price-filter__button right" onClick={optimal}>
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  )
}

// PriceFilter.defaultProps={}
// PriceFilter.propTypes={}

const mapStateToProps = (state) => {
  return {
    price: state.price,
  }
}

export default connect(mapStateToProps, actions)(PriceFilter)
