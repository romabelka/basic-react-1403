import {
  DELETE_ARTICLE,
  FILTER_DATE_RANGE_CHANGE,
  INCREMENT,
  FILTER_TITLES_CHANGE
} from '../constants'

export const increment = () => ({
  type: INCREMENT
})

export const deleteArticle = (id) => ({
  type: DELETE_ARTICLE,
  payload: { id }
})

export const filterDateRangeChange = (dateRange) => ({
  type: FILTER_DATE_RANGE_CHANGE,
  payload: dateRange
})

export const filterTitlesChange = (titles) => ({
  type: FILTER_TITLES_CHANGE,
  payload: titles
})
