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
    case LOAD_PAGINATOR_COMMENTS + SUCCESS:
      return state
        .setIn(
          ['entities', payload.page],
          new CommentsRecord({
            comments: response.records
          })
        )
        .set('total', response.total)

    default:
      return state
  }
}
