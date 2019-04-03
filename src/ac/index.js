import {
  ADD_COMMENT,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  DELETE_ARTICLE,
  INCREMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
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

export const loadArticle = (id) => ({
  type: LOAD_ARTICLE,
  callAPI: `/api/article/${id}`,
  payload: { id }
})

export const loadComments = (id) => ({
  type: LOAD_COMMENTS,
  callAPI: `/api/comment?article=${id}`,
  payload: { id }
})
