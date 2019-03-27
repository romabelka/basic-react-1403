import { DELETE_ARTICLE, INCREMENT, SET_DATES, SELECT_VALUES } from '../constants'

export const increment = () => ({
  type: INCREMENT
})

export const deleteArticle = (id) => ({
  type: DELETE_ARTICLE,
  payload: { id }
})

export const dates = (dates) => {
  return {
    type: SET_DATES,
    payload: { dates }
  }
}

export const selectValues = (values) => {
  return {
    type: SELECT_VALUES,
    payload: { values }
  }
}
