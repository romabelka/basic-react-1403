import { ADD_COMMENT, LOAD_ALL_COMMENTS, LOAD_ARTICLE_COMMENTS, START, SUCCESS } from '../constants'
import { Record, OrderedMap } from 'immutable'
import { arrToMap } from './utils'

const CommentRecord = Record({
  id: null,
  text: null,
  user: null
})

const PageCommentRecord = Record({
  loading: null,
  loaded: null,
  comments: arrToMap([], CommentRecord)
})

const ReducerRecord = Record({
  entities: new OrderedMap({}),
  totalCount: 0,
  pageEntities: new OrderedMap({})
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

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

    case LOAD_ALL_COMMENTS + START:
      return state.setIn(['pageEntities', payload.page, 'loading'], true)

    case LOAD_ALL_COMMENTS + SUCCESS:
      const { records, total } = response
      const comments = arrToMap(records, CommentRecord)

      return state.set('totalCount', total).setIn(
        ['pageEntities', payload.page],
        new PageCommentRecord({
          loading: false,
          loaded: true,
          comments
        })
      )

    default:
      return state
  }
}
