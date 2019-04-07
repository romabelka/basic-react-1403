import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS, LOAD_COMMENTS } from '../constants'
import { Record, OrderedMap, List } from 'immutable'
import { arrToMap } from './utils'

const CommentRecord = Record({
  id: null,
  text: null,
  user: null
})

const ReducerRecord = Record({
  entities: new OrderedMap({}),
  pages: new OrderedMap(),
  loading: false,
  total: 0,
  currentPage: 1
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

    case LOAD_COMMENTS + SUCCESS:
      const commentsIds = response.records.map((c) => c.id)

      if (commentsIds.length > 0) {
        const currentPage = payload.offset / payload.limit + 1
        return state
          .mergeIn(['entities'], arrToMap(response.records, CommentRecord))
          .setIn(['pages', currentPage], commentsIds)
          .set('total', response.total)
          .set('currentPage', currentPage)
      }
      return state

    default:
      return state
  }
}
