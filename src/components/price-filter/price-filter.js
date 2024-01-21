import React from 'react'
// import PropTypes from 'prop-types'
import { Radio } from 'antd'

import './price-filter.module.scss'

const PriceFilter = () => {
  const buttonStyle = { color: 'white', backgroundColor: '#2196F3' }
  return (
    <div className="price-filter">
      <Radio.Group defaultValue="a" size="large">
        <Radio.Button value="a" style={buttonStyle}>
          САМЫЙ ДЕШЕВЫЙ
        </Radio.Button>
        <Radio.Button value="b">САМЫЙ БЫСТРЫЙ</Radio.Button>
        <Radio.Button value="c">ОПТИМАЛЬНЫЙ</Radio.Button>
      </Radio.Group>
      {/* <button className="price-filter__button">САМЫЙ ДЕШЕВЫЙ</button>
      <button className="price-filter__button">САМЫЙ БЫСТРЫЙ</button>
      <button className="price-filter__button">ОПТИМАЛЬНЫЙ</button> */}
    </div>
  )
}

// PriceFilter.defaultProps={}
// PriceFilter.propTypes={}

export default PriceFilter
