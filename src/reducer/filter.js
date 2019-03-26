import defaultArticles from '../fixtures'
import { FILTER_ARTICLE } from '../constants'
export default (articles = defaultArticles, action) => {
  if (action.type === FILTER_ARTICLE) {
    console.log(action.id, articles)
    return articles.filter((article) => {
      console.log(article.id === action.payload.id)
      return article.id === action.payload.id
    })
  }
  return articles
}
