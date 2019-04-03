import { ADD_COMMENT, LOAD_COMMENTS, SUCCESS } from '../constants'
import { arrToMap } from './utils'

export default (state = arrToMap([]), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case ADD_COMMENT:
      return state.set(randomId, {
        ...payload.comment,
        id: randomId
      })

    case LOAD_COMMENTS + SUCCESS:
      return arrToMap(response)

    default:
      return state
  }
}
