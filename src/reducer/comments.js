import { ADD_COMMENT, SUCCESS, LOAD_COMMENTS } from '../constants'

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
      return response.reduce((acc, item) => acc.set(item.id, item), state)

    default:
      return state
  }
}
