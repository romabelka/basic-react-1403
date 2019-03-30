import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'

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
      const articles = { ...articlesState }
      delete articles[payload.id]
      return articles

    case ADD_COMMENT:
      const {
        payload: { articleId },
        uniqId
      } = action
      const article = articlesState[articleId]

      return {
        ...articlesState,
        [articleId]: {
          ...article,
          comments: [...(article.comments || []), uniqId]
        }
      }

    default:
      return articlesState
  }
}
