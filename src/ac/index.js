import {
  ADD_COMMENT,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  DELETE_ARTICLE,
  INCREMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  LOAD_ARTICLE_COMMENTS,
  START,
  SUCCESS,
  LOAD_COMMENTS
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

  const rawRes = await fetch(`/api/article/${id}`)
  const response = await rawRes.json()

  dispatch({
    type: LOAD_ARTICLE + SUCCESS,
    payload: { id },
    response
  })
}

export function loadArticleComments(articleId) {
  return {
    type: LOAD_ARTICLE_COMMENTS,
    payload: { articleId },
    callAPI: `/api/comment?article=${articleId}`
  }
}

export function loadComments(limit, offset) {
  return {
    type: LOAD_COMMENTS,
    payload: { limit, offset },
    callAPI: `/api/comment?limit=${limit}&offset=${offset}`
  }
}
