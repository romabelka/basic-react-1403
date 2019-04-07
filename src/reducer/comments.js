import { ADD_COMMENT, LOAD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS, START } from '../constants'
import { Record, OrderedMap } from 'immutable'
import { arrToMap } from './utils'

const CommentRecord = Record({
  id: null,
  text: null,
  user: null
})

const ReducerRecord = Record({
  entities: new OrderedMap({}),
  commentsEntities: {
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

    case LOAD_COMMENT + START:
      return state
        .setIn(['commentsEntities', 'loading'], true)
        .set(['commentsEntities', 'loaded'], false)

    case LOAD_COMMENT + SUCCESS:
      return state
        .setIn(
          ['commentsEntities', 'entities', payload.pageNum],
          arrToMap(response.records, CommentRecord)
        )
        .setIn(['commentsEntities', 'loading'], false)
        .setIn(['commentsEntities', 'loaded'], true)
        .setIn(['commentsEntities', 'totalCount'], response.total)

    default:
      return state
  }
}
