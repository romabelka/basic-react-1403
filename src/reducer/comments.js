import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS } from '../constants'
import { arrToMap } from './utils'
import { Record, OrderedMap } from 'immutable'

const CommentRecord = Record({
  user: null,
  text: null,
  id: null
})

const ReducerRecord = Record({
  entities: new OrderedMap({})
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case ADD_COMMENT:
      return state.setIn(
        ['entities', randomId],
        new CommentRecord({
          ...payload.comment,
          id: randomId
        })
      )

    // case LOAD_COMMENTS + START:
    //   console.log(6)
    //   return state.setIn(['entities', payload.articleId, 'loading'], true)

    case LOAD_COMMENTS + SUCCESS:
      console.log(12)
      return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

    default:
      return state
  }
}
