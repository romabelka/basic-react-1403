import defaultArticles from '../fixtures'
import { DELETE_ARTICLE, FILTER_ARTICLE } from '../constants'

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.filter((article) => article.id !== payload.id)

    case FILTER_ARTICLE:
      return defaultArticles.filter((article) => payload.some((e) => e.value === article.id))

    default:
      return articlesState
  }
}
