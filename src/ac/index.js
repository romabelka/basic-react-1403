import { replace, push } from 'connected-react-router'
import {
  ADD_COMMENT,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  DELETE_ARTICLE,
  FAIL,
  INCREMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  LOAD_ARTICLE_COMMENTS,
  LOAD_COMMENTS_FOR_PAGE,
  START,
  SUCCESS
} from '../constants'

export const increment = () => ({
  type: INCREMENT
})

export const deleteArticle = (id) => ({
  type: DELETE_ARTICLE,
  payload: { id }
})

export const changeDateRange = (dateRange) => ({
  type: CHANGE_DATE_RANGE,
  payload: { dateRange }
})

export const changeSelection = (selected) => ({
  type: CHANGE_SELECTION,
  payload: { selected }
})

export const addComment = (comment, articleId) => ({
  type: ADD_COMMENT,
  payload: { comment, articleId },
  generateId: true
})

export const loadAllArticles = () => ({
  type: LOAD_ALL_ARTICLES,
  callAPI: '/api/article'
})

export const loadArticle = (id) => async (dispatch) => {
  dispatch({
    type: LOAD_ARTICLE + START,
    payload: { id }
  })

  try {
    const rawRes = await fetch(`/api/article/${id}`)
    if (rawRes.status >= 400) throw new Error(rawRes.statusText)

    const response = await rawRes.json()

    dispatch({
      type: LOAD_ARTICLE + SUCCESS,
      payload: { id },
      response
    })
  } catch (error) {
    dispatch(replace('/error'))

    dispatch({
      type: LOAD_ARTICLE + FAIL,
      payload: { id },
      error
    })
  }
}

export function loadArticleComments(articleId) {
  return {
    type: LOAD_ARTICLE_COMMENTS,
    payload: { articleId },
    callAPI: `/api/comment?article=${articleId}`
  }
}

export const checkAndLoadCommentsForPage = (page) => (dispatch, getState) => {
  const {
    comments: { pagination }
  } = getState()
  if (pagination.getIn([page, 'loading']) || pagination.getIn([page, 'ids'])) return

  dispatch({
    type: LOAD_COMMENTS_FOR_PAGE,
    payload: { page },
    callAPI: `/api/comment?limit=5&offset=${(page - 1) * 5}`
  })
}
