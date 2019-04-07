import {
  ADD_COMMENT,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  COMMENT_ITEMS_ON_PAGE,
  DELETE_ARTICLE,
  INCREMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ALL_COMMENTS,
  LOAD_ARTICLE,
  LOAD_ARTICLE_COMMENTS,
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

export const loadAllComments = (pageNumber) => async (dispatch) => {
  const page = pageNumber ? pageNumber : 1

  dispatch({
    type: LOAD_ALL_COMMENTS + START,
    payload: { page }
  })

  const offset = (page - 1) * COMMENT_ITEMS_ON_PAGE

  const rawRes = await fetch(`/api/comment?limit=5&offset=${offset}`)
  const response = await rawRes.json()

  dispatch({
    type: LOAD_ALL_COMMENTS + SUCCESS,
    payload: { page },
    response
  })
}
