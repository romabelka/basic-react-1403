import { FILTER_DATE_RANGE_CHANGE, FILTER_TITLES_CHANGE } from '../constants'

export default (filtersState = { dateRange: { from: null, to: null }, titles: [] }, action) => {
  const { type, payload } = action

  switch (type) {
    case FILTER_DATE_RANGE_CHANGE:
      return Object.assign({}, filtersState, {
        dateRange: payload
      })
    case FILTER_TITLES_CHANGE:
      return Object.assign({}, filtersState, {
        titles: payload
      })

    default:
      return filtersState
  }
}
