import { Record, OrderedMap } from 'immutable'
import { LOAD_PAGINATOR_COMMENTS, SUCCESS, START } from '../constants'

const CommentsRecord = new Record({
  comments: [],
  loading: null,
  loaded: false
})

const ReducerRecord = new Record({
  entities: new OrderedMap({}),
  total: null
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, response } = action

  switch (type) {
    case LOAD_PAGINATOR_COMMENTS + START:
      return state
        .setIn(['entities', payload.page], new CommentsRecord({}))
        .setIn(['entities', payload.page, 'loading'], true)

    case LOAD_PAGINATOR_COMMENTS + SUCCESS:
      return state
        .setIn(['entities', payload.page, 'comments'], response.records)
        .set('total', response.total)
        .setIn(['entities', payload.page, 'loading'], false)
        .setIn(['entities', payload.page, 'loaded'], true)

    default:
      return state
  }
}
