import { FILTER_ARTICLE_BY_DAY } from '../constants'

export default (range = { from: null, to: null }, action) => {
  const { type, payload } = action

  switch (type) {
    case FILTER_ARTICLE_BY_DAY:
      return {from: payload.from, to: payload.to}

    default:
      return range
  }
}