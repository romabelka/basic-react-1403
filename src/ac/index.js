import {
  DELETE_ARTICLE,
  FILTER_ARTICLES,
  INCREMENT,
  CHANGE_SELECTED,
  UPDATE_RANGE
} from '../constants'

export const increment = () => ({
  type: INCREMENT
})

export const deleteArticle = (id) => ({
  type: DELETE_ARTICLE,
  payload: { id }
})

export const filterArticles = (filter) => ({
  type: FILTER_ARTICLES,
  payload: { ...filter }
})

export const changeSelected = (selected) => ({
  type: CHANGE_SELECTED,
  payload: { selected }
})

export const updateDateRange = (selectedDay) => ({
  type: UPDATE_RANGE,
  payload: { day: selectedDay }
})
