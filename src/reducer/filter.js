import {
  CHANGE_FILTER_DATE_FROM,
  CHANGE_FILTER_DATE_TO,
  CHANGE_SELECTED_ARTICLES
} from '../constants'

export const filterChangeDateFromReducer = (filterState = null, action) => {
  const { type, payload } = action
  switch (type) {
    case CHANGE_FILTER_DATE_FROM:
      return payload.date

    default:
      return filterState
  }
}

export const filterChangeDateToReducer = (filterState = null, action) => {
  const { type, payload } = action
  switch (type) {
    case CHANGE_FILTER_DATE_TO:
      return payload.date

    default:
      return filterState
  }
}

export const changeSelectedArticles = (filterState = [], action) => {
  const { type, payload } = action
  switch (type) {
    case CHANGE_SELECTED_ARTICLES:
      return payload.values

    default:
      return filterState
  }
}
