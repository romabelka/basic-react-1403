import { FILTER_ARTICLE } from '../constants'

export default (filteredArticlesState = null, action) => {
  const { type, payload } = action
  console.log("Filter article");

  switch (type) {
    case FILTER_ARTICLE:
      return filteredArticlesState = payload.selectedArticle.map((article) => article.raw)

    default:
      return filteredArticlesState
  }
}