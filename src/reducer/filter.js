import { SELECT_ARTICLE, SELECT_DATE_RANGE } from '../constants'

export default (state, action) => {
  const { type, payload } = action

  switch (type) {
    case SELECT_ARTICLE:
      return { ...state, selected: payload }
    case SELECT_DATE_RANGE:
      return { ...state, dateRange: payload }

    default:
      return { dateRange: { from: null, to: null }, selected: [] }
  }
}
