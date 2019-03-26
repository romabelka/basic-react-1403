import defaultArticles from '../fixtures'
import { DELETE_ARTICLE, FILTER_ARTICLES } from '../constants'

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.filter((article) => article.id !== payload.id)

    case FILTER_ARTICLES:
      const { selectFilter, dateFilter } = payload.filter
      let articleIds = null
      if (selectFilter.length > 0) {
        articleIds = selectFilter.map((value) => value.value)
      }
      return defaultArticles.slice().filter((value) => {
        return (
          (!articleIds || articleIds.includes(value.id)) &&
          (!dateFilter.from || new Date(dateFilter.from) < new Date(value.date)) &&
          (!dateFilter.to || new Date(dateFilter.to) > new Date(value.date))
        )
      })

    default:
      return articlesState
  }
}
