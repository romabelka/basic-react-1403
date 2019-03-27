import { SET_DATES } from '../constants'

export default (state = null, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_DATES:
      return payload.dates

    default:
      return state
  }
}
