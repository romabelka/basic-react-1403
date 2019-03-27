import { CHANGE_DATE_RANGE, CHANGE_TITLE_SELECT } from '../constants'

const defaultState = {
  selectedValues: [],
  dateRange: {
    fromDate: null,
    toDate: null
  }
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_DATE_RANGE: {
      return (state = { ...state, dateRange: action.payload.dateRange })
    }
    case CHANGE_TITLE_SELECT: {
      return (state = { ...state, selectedValues: action.payload.selectedValues })
    }
    default:
      return state
  }
}
