import { SELECT_DATE_RANGE } from '../constants'

export default (state, action) => {
  const { type, payload } = action

  if (type === SELECT_DATE_RANGE) {
    return payload
  }

  return { from: null, to: null }
}
