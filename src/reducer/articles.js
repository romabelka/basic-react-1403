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
      delete articlesState[payload.id]
      return articlesState
    case ADD_COMMENT:
      const article = articlesState[payload.articleId]
      const { id } = payload.comment
      if (article.comments) {
        article.comments.push(id)
      } else {
        article.comments = [id]
      }
      return { ...articlesState }

    default:
      return articlesState
  }
}
