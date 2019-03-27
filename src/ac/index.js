import { DELETE_ARTICLE, INCREMENT, SELECTED_ARTICLES, DATE_RANGE } from '../constants'

export const increment = () => ({
  type: INCREMENT
})

export const deleteArticle = (id) => ({
  type: DELETE_ARTICLE,
  payload: { id }
})

export const selectArticles = (obj) => ({
  type: SELECTED_ARTICLES,
  payload: obj
})

export const chooseDateRange = (range) => ({
  type: DATE_RANGE,
  payload: { range }
})
