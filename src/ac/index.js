import {
  ADD_COMMENT,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  DELETE_ARTICLE,
  INCREMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  SUCCESS,
  START,
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
  const rawRes = await fetch(`/api/article/${id}`)
  const response = await rawRes.json()

  dispatch({
    type: LOAD_ARTICLE + SUCCESS,
    payload: { id },
    response
  })
}

export const loadComments = (id) => async (dispatch) => {
  dispatch({
    type: LOAD_COMMENTS + START,
    payload: { id }
  })

  const rawRes = await fetch(`/api/comment?article=${id}`)
  const response = await rawRes.json()

  dispatch({
    type: LOAD_COMMENTS + SUCCESS,
    payload: { id },
    response
  })
}
