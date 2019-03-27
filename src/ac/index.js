import { DELETE_ARTICLE, INCREMENT, CHANGE_DATE_RANGE, CHANGE_TITLE_SELECT } from '../constants'

export const increment = () => ({
  type: INCREMENT
})

export const deleteArticle = (id) => ({
  type: DELETE_ARTICLE,
  payload: { id }
})

export const changeDateRange = (fromDate, toDate) => ({
  type: CHANGE_DATE_RANGE,
  payload: { dateRange: { fromDate, toDate } }
})

export const changeTitleSelect = (selectedValues) => ({
  type: CHANGE_TITLE_SELECT,
  payload: { selectedValues }
})
