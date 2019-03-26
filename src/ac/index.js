import { DELETE_ARTICLE, INCREMENT, FILTER_ARTICLE } from '../constants'

export const increment = () => ({
  type: INCREMENT
})

export const deleteArticle = (id) => ({
  type: DELETE_ARTICLE,
  payload: { id }
})

export const filterArticle = (obj) => ({
  type: FILTER_ARTICLE,
  payload: obj
})
