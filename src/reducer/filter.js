import { CHANGE_FILTER_DATE_FROM, CHANGE_FILTER_DATE_TO, CHANGE_SELECTED_IDS } from '../constants'

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

export const changeSelectedIds = (filterState = [], action) => {
  const { type, payload } = action
  switch (type) {
    case CHANGE_SELECTED_IDS:
      return payload.ids

    default:
      return filterState
  }
}
