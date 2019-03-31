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
      const { [payload.id]: deletedKey, ...otherKeys } = articlesState
      return otherKeys

    case ADD_COMMENT: {
      const { articleId, generatedId } = payload
      const a = articlesState[articleId]
      return { ...articlesState, [articleId]: { ...a, comments: [...a.comments, generatedId] } }
    }
    default:
      return articlesState
  }
}
