import { normalizedArticles } from '../fixtures'
import { ADD_NEW_COMMENT, DELETE_ARTICLE } from '../constants'

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
    case ADD_NEW_COMMENT:
      const { id, article } = payload
      articlesState[article].comments.push(id)
      return { ...articlesState }

    default:
      return articlesState
  }
}
