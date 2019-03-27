import defaultArticles from '../fixtures'
import { DELETE_ARTICLE, DATE_RANGE } from '../constants'

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.filter((article) => article.id !== payload.id)

    case DATE_RANGE:
      return defaultArticles.filter((article) => {
        let date = new Date(article.date)
        let { from, to } = payload.range
        return date >= from && date <= to
      })

    default:
      return articlesState
  }
}
