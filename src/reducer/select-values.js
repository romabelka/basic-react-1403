import { SELECT_VALUES } from '../constants'

export default (state = null, action) => {
  const { type, payload } = action

  switch (type) {
    case SELECT_VALUES:
      return {
        ...state,
        values: payload.values
      }
    default:
      return state
  }
}
