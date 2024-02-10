import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import App from '../src/components/app'

import transferCountReducer from './store/transfer-count-reducer'
import priceFilterReducer from './store/price-filter-reducer'

const store = configureStore({ reducer: { transfer: transferCountReducer, price: priceFilterReducer } })
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
