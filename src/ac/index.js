import { DELETE_ARTICLE, INCREMENT, CHANGE_DATE_RANGE } from '../constants'

export const increment = () => ({
  type: INCREMENT
})

export const deleteArticle = (id) => ({
  type: DELETE_ARTICLE,
  payload: { id }
})

export const changeDateRange = (fromDate, toDate) => ({
  type: CHANGE_DATE_RANGE,
  payload: { fromDate, toDate }
})
