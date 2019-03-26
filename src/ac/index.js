import { DELETE_ARTICLE, INCREMENT, CHANGE_SELECTED_IDS } from '../constants'

export const increment = () => ({
  type: INCREMENT
})

export const deleteArticle = (id) => ({
  type: DELETE_ARTICLE,
  payload: { id }
})

export const changeSelectedArticles = (values) => ({
  type: CHANGE_SELECTED_IDS,
  payload: { ids: values }
})
