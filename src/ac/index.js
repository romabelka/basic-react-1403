import { DELETE_ARTICLE, INCREMENT, CHANGE_SELECT, CHANGE_DATA } from '../constants'

export const increment = () => ({
  type: INCREMENT
})

export const deleteArticle = (id) => ({
  type: DELETE_ARTICLE,
  payload: { id }
})

export const changeSelect = (selected) => ({
  type: CHANGE_SELECT,
  payload: { selected }
})

export const changeData = (dateRange) => ({
  type: CHANGE_DATA,
  payload: { dateRange: { from: dateRange.from, to: dateRange.to } }
})
