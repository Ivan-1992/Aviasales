const initialState = {
  filters: [
    { name: 'filter1', label: 'Без пересадок', checked: true },
    { name: 'filter2', label: '1 пересадка', checked: false },
    { name: 'filter3', label: '2 пересадки', checked: false },
    { name: 'filter4', label: '3 пересадки', checked: false },
  ],
}

const transferCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ALL_FILTERS':
      return {
        ...state,
        filters: state.filters.map((filter) => ({
          ...filter,
          checked: action.payload,
        })),
      }
    case 'SET_FILTER':
      return {
        ...state,
        filters: state.filters.map((filter) =>
          filter.name === action.payload.name ? { ...filter, checked: action.payload.checked } : filter
        ),
      }
    default:
      return state
  }
}

export default transferCountReducer
