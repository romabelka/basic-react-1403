import { Record } from 'immutable'
import {
  DELETE_ARTICLE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  SUCCESS,
  START,
  FAIL,
  LOAD_ARTICLE,
  LOAD_COMMENTS
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
  error: null,
  commentsLoading: false,
  commentsLoaded: false
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
      return articlesState.updateIn(['entities', payload.id], (articleRecord) =>
        articleRecord.set('loading', () => true)
      )

    case LOAD_ARTICLE + SUCCESS:
      return articlesState.setIn(
        ['entities', payload.id],
        new ArticleRecord(response)
          .set('loaded', true)
          // .set('loading', false)
          .set('error', null)
      )

    case LOAD_COMMENTS + START:
      return articlesState.updateIn(['entities', payload.id, 'commentsLoading'], () => true)

    case LOAD_COMMENTS + SUCCESS:
      console.log(response)
      return articlesState
        .setIn(['entities', payload.id, 'comments'], response)
        .updateIn(['entities', payload.id, 'commentsLoading'], () => false)
        .updateIn(['entities', payload.id, 'commentsLoaded'], () => true)

    default:
      return articlesState
  }
}
