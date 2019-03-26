import {
  DELETE_ARTICLE,
  INCREMENT,
  CHANGE_SELECTED_ARTICLES,
  CHANGE_FILTER_DATE_FROM,
  CHANGE_FILTER_DATE_TO
} from '../constants'

export const increment = () => ({
  type: INCREMENT
})

export const deleteArticle = (id) => ({
  type: DELETE_ARTICLE,
  payload: { id }
})

export const changeSelectedArticles = (values) => ({
  type: CHANGE_SELECTED_ARTICLES,
  payload: { values }
})

export const changeFilterDateFrom = (date) => ({
  type: CHANGE_FILTER_DATE_FROM,
  payload: { date }
})

export const changeFilterDateTo = (date) => ({
  type: CHANGE_FILTER_DATE_TO,
  payload: { date }
})
