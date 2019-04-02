import { Record } from 'immutable'
import {
  DELETE_ARTICLE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  SUCCESS,
  START,
  FAIL,
  LOAD_ARTICLE,
  LOAD_ARTICLE_COMMENTS
} from '../constants'
import { arrToMap } from './utils'

const ArticleRecord = Record({
  title: null,
  text: null,
  id: null,
  date: null,
  comments: [],
  loading: false,
  loaded: false,
  loadingComments: false,
  loadedComments: false,
  errorComments: null
})

const ReducerRecord = Record({
  entities: arrToMap([], ArticleRecord),
  loading: false,
  loaded: false,
  error: null
})

export default (articlesState = new ReducerRecord(), action) => {
  const { type, payload, randomId, response, error } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.deleteIn(['entities', payload.id])

    case ADD_COMMENT:
      return articlesState.updateIn(['entities', payload.articleId, 'comments'], (comments) =>
        comments.concat(randomId)
      )

    case LOAD_ARTICLE_COMMENTS + START:
      return articlesState.setIn(['entities', payload.id, 'loadingComments'], true)

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return articlesState
        .setIn(['entities', payload.id, 'loadedComments'], true)
        .setIn(['entities', payload.id, 'loadingComments'], false)

    case LOAD_ARTICLE_COMMENTS + FAIL:
      return articlesState.setIn(['entities', payload.id, 'errorComments'], error)

    case LOAD_ALL_ARTICLES + START:
      return articlesState.set('loading', true)

    case LOAD_ALL_ARTICLES + SUCCESS:
      return articlesState
        .set('entities', arrToMap(response, ArticleRecord))
        .set('loading', false)
        .set('loaded', true)

    case LOAD_ALL_ARTICLES + FAIL:
      return articlesState.set('error', error)

    case LOAD_ARTICLE + START:
      return articlesState.setIn(['entities', payload.id, 'loading'], true)

    case LOAD_ARTICLE + SUCCESS:
      return articlesState
        .setIn(['entities', payload.id], new ArticleRecord(response))
        .setIn(['entities', payload.id, 'loaded'], true)

    default:
      return articlesState
  }
}
