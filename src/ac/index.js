import { DELETE_ARTICLE, FILTER_ARTICLE, INCREMENT, FILTER_ARTICLE_BY_DAY } from '../constants'

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

export const changeDayRange = (range) => ({
  type: FILTER_ARTICLE_BY_DAY,
  payload: { from: range.from, to: range.to }
})
