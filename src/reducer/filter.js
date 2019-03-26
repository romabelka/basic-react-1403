import defaultArticles from '../fixtures'
import { FILTER_ARTICLE } from '../constants'
export default (articles = defaultArticles, action) =>
  action.type === FILTER_ARTICLE
    ? defaultArticles.filter((article) => action.payload.some((e) => e.value === article.id))
    : articles
