import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS, START, LOAD_COMMENT_PAG } from '../constants'
import { Record, OrderedMap } from 'immutable'
import { arrToMap } from './utils'

const CommentRecord = Record({
  id: null,
  text: null,
  user: null
})

const ReducerRecord = Record({
  entities: new OrderedMap({}),
  pagEntities: {
    entities: new OrderedMap({}),
    loading: false,
    loaded: false,
    totalCount: 0
  }
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

    case LOAD_COMMENT_PAG + START:
      return state.setIn(['pagEntities', 'loading'], true).set(['pagEntities', 'loaded'], false)
    case LOAD_COMMENT_PAG + SUCCESS:
      return state
        .setIn(
          ['pagEntities', 'entities', payload.pageNum],
          arrToMap(response.records, CommentRecord)
        )
        .setIn(['pagEntities', 'loading'], false)
        .setIn(['pagEntities', 'loaded'], true)
        .setIn(['pagEntities', 'totalCount'], response.total)

    default:
      return state
  }
}
