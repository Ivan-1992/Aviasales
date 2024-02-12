import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import App from '../src/components/app'

import transferCountReducer from './store/reducers/transfer-count-reducer'
import priceFilterReducer from './store/reducers/price-filter-reducer'
import ticketsReducer from './store/reducers/tickets-reducer'

const store = configureStore({
  reducer: { transfer: transferCountReducer, price: priceFilterReducer, tickets: ticketsReducer },
})

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
