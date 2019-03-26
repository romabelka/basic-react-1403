import {
  DELETE_ARTICLE,
  INCREMENT,
  SET_DATE_FILTER,
  SET_SELECT_FILTER,
  FILTER_ARTICLES
} from '../constants'

export const increment = () => ({
  type: INCREMENT
})

export const deleteArticle = (id) => ({
  type: DELETE_ARTICLE,
  payload: { id }
})

export const setDateFilter = (filter) => ({
  type: SET_DATE_FILTER,
  payload: { filter }
})

export const setSelectFilter = (filter) => ({
  type: SET_SELECT_FILTER,
  payload: { filter }
})

export const filterArticles = (filter) => ({
  type: FILTER_ARTICLES,
  payload: { filter }
})
