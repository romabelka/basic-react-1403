import { DELETE_ARTICLE, INCREMENT, SELECT_ARTICLE, SELECT_DATE_RANGE } from '../constants'

export const increment = () => ({
  type: INCREMENT
})

export const deleteArticle = (id) => ({
  type: DELETE_ARTICLE,
  payload: { id }
})

export const selectArticle = (payload) => ({
  type: SELECT_ARTICLE,
  payload
})

export const selectDateRange = (payload) => ({
  type: SELECT_DATE_RANGE,
  payload
})
