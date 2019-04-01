import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles as defaultArticles } from '../fixtures'
import { arrToMap } from './utils'
import { OrderedMap, fromJS, List } from 'immutable'

export default (articles = fromJS(arrToMap(defaultArticles)), action) => {
  const { type, payload, randomId } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articles.delete(payload.id)

    case ADD_COMMENT:
      return articles.updateIn([payload.articleId, 'comments'], new List([]), (comments) =>
        comments.push(randomId)
      )

    default:
      return articles
  }
}
