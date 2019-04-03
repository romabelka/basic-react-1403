import { ADD_COMMENT, LOAD_COMMENTS, SUCCESS, START, FAIL } from '../constants'
// import { normalizedComments } from '../fixtures'
import { arrToMap } from './utils'
import { Record } from 'immutable'

export default (state = arrToMap([]), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case ADD_COMMENT:
      return state.set(randomId, {
        ...payload.comment,
        id: randomId
      })

    case LOAD_COMMENTS + SUCCESS:
      return state.concat(arrToMap(response))

    default:
      return state
  }
}
