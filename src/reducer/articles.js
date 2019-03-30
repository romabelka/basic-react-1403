import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE } from '../constants'

const defaultArticles = normalizedArticles.reduce(
  (acc, article) => ({
    ...acc,
    [article.id]: article
  }),
  {}
)

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      const newState = { ...articlesState }
      delete newState[payload.id]
      return newState

    default:
      return articlesState
  }
}
