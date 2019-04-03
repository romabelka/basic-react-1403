import { ADD_COMMENT, LOAD_COMMENTS, SUCCESS, START, LOAD_ALL_ARTICLES } from '../constants'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const CommentRecord = Record({
  id: null,
  user: null,
  text: null
})
// const CommentsRecord = Record({
//   entities:
//   loading: false,
//   loaded: false,
// })

export default (state = arrToMap([]), action) => {
  const { type, payload, randomId, response, id } = action

  switch (type) {
    case ADD_COMMENT:
      return state.set(randomId, {
        ...payload.comment,
        id: randomId
      })

    case LOAD_COMMENTS + SUCCESS:
      return state
        .set(id, arrToMap(response, CommentRecord))
        .setIn([id, 'loading'], 'false')
        .setIn([id, 'loaded'], 'true')

    case LOAD_COMMENTS + START:
      return state.setIn([id, 'loading'], 'true')

    default:
      return state
  }
}
