import { ADD_COMMENT, FAIL, LOAD_ALL_ARTICLES, LOAD_COMMENTS, START, SUCCESS } from '../constants'
import { arrToMap } from './utils'
import { Record, OrderedMap } from 'immutable'

const CommentRecord = Record({
  user: null,
  text: null,
  id: null
})

const ReducerRecord = Record({
  entities: arrToMap([], CommentRecord),
  commentsLoading: false,
  commentsLoaded: false
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, randomId, response, error } = action

  switch (type) {
    case ADD_COMMENT:
      return state.setIn(
        ['entities', randomId],
        new CommentRecord({
          ...payload.comment,
          id: randomId
        })
      )

    case LOAD_COMMENTS + START:
      return state.setIn(['entities', payload.articleId, 'commentsLoading'], true)
    // .set('commentsLoading', true)
    // .set('commentsLoaded', false)

    case LOAD_COMMENTS + SUCCESS:
      return (
        state
          .setIn(['entities'], arrToMap(response))
          // .set('commentsLoading', false)
          // .set('commentsLoaded', true)
          .setIn(['entities', payload.articleId, 'commentsLoading'], false)
          .setIn(['entities', payload.articleId, 'commentsLoaded'], true)
      )

    // case LOAD_COMMENTS + FAIL:
    //     return state
    //         .setIn(['entities', payload.articleId, 'error'], error)

    default:
      return state
  }
}
