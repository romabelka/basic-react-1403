import { normalizedArticles } from '../fixtures'

const defaultArticles = normalizedArticles.reduce(
  (acc, article) => ({
    ...acc,
    [article.id]: article
  }),
  {}
)

export default (articles = defaultArticles, action) => {
  const { type } = action

  switch (type) {
    default:
      return articles
  }
}
