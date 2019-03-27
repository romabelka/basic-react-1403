import {
  CHANGE_FILTER_DATE_FROM,
  CHANGE_FILTER_DATE_TO,
  CHANGE_SELECTED_ARTICLES
} from '../constants'

const defaultState = {
  dateFrom: null,
  dateTo: null,
  selectedArticles: []
}
export default (filterState = defaultState, action) => {
  const { type, payload } = action

  switch (type) {
    case CHANGE_SELECTED_ARTICLES:
      return {
        ...filterState,
        selectedArticles: payload.values
      }
    case CHANGE_FILTER_DATE_FROM:
      return {
        ...filterState,
        dateFrom: payload.date
      }
    case CHANGE_FILTER_DATE_TO:
      return {
        ...filterState,
        dateTo: payload.date
      }
    default:
      return filterState
  }
}
