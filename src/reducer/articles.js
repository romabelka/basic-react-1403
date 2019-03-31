import { normalizedArticles } from '../fixtures'
import { COMMENT_ADD, DELETE_ARTICLE } from '../constants'

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
      return articlesState.filter((article) => article.id !== payload.id)

    case COMMENT_ADD:
      const newState = { ...articlesState }
      const foundArticle = newState[payload.articleId]

      if (foundArticle) {
        if (foundArticle.comments) {
          foundArticle.comments.push(payload.id)
        } else {
          foundArticle.comments = [payload.id]
        }
      }
      return newState

    default:
      return articlesState
  }
}
