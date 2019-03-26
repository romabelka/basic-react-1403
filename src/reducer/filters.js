import { SET_DATE_FILTER, SET_SELECT_FILTER } from '../constants'

export default (
  filterState = { dateFilter: { from: null, to: null }, selectFilter: [] },
  action
) => {
  const { type, payload } = action

  switch (type) {
    case SET_DATE_FILTER:
      return (filterState = { ...filterState, dateFilter: payload.filter })

    case SET_SELECT_FILTER:
      return (filterState = { ...filterState, selectFilter: payload.filter })

    default:
      return filterState
  }
}

// Tue Mar 01 2016 12:00:00 GMT+0300 (GMT+04:00), to: Sat Mar 16 2019 12:00:00 GMT+0400 (GMT+04:00)
