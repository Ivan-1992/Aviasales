import { SET_FILTER, SET_ALL_FILTERS } from '../types'

export const setAllFilters = (checked) => ({ type: SET_ALL_FILTERS, payload: checked })
export const setFilter = (name, checked) => ({ type: SET_FILTER, payload: { name, checked } })
