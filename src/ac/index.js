import { DELETE_ARTICLE, FILTER_ARTICLE, INCREMENT } from '../constants'

export const increment = () => ({
  type: INCREMENT
})

export const deleteArticle = (id) => ({
  type: DELETE_ARTICLE,
  payload: { id }
})

export const filterArticle = (selectedArticle) => ({
  type: FILTER_ARTICLE,
  payload: { selectedArticle }
})
