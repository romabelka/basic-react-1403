import { normalizedArticleList } from '../fixtures'
import { DELETE_ARTICLE } from '../constants'

export default (articleListState = normalizedArticleList, action) => {
  const { type, payload } = action
  console.log(articleListState)
  switch (type) {
    case DELETE_ARTICLE:
      return articleListState.filter((id) => id !== payload.id)

    default:
      return articleListState
  }
}
