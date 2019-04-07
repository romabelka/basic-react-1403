import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS, LOAD_COMMENTS, START } from '../constants'
import { Record, OrderedMap, Map } from 'immutable'
import { arrToMap } from './utils'

const CommentRecord = Record({
  id: null,
  text: null,
  user: null
})

const PageRecord = Record({
  loading: false,
  comments: null
})

const ReducerRecord = Record({
  entities: new OrderedMap({}),
  pages: new Map({}),
  totalSize: 0
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, randomId, response, page } = action

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

    case LOAD_COMMENTS + START:
      return state.setIn(
        ['pages', payload.page],
        new PageRecord({
          loading: true
        })
      )
    case LOAD_COMMENTS + SUCCESS:
      return state
        .mergeIn(['entities'], arrToMap(response.records, CommentRecord))
        .updateIn(['pages', payload.page], (pageRecord) =>
          pageRecord
            .set('comments', response.records.map((record) => record.id))
            .set('loading', false)
        )
        .set('totalSize', response.total)

    default:
      return state
  }
}
