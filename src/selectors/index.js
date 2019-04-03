import { createSelector } from 'reselect'

export const articleListSelector = (state) => state.articles.entities.valueSeq()
export const filtersSelector = (state) => state.filters
export const dateRangeSelector = (state) => filtersSelector(state).dateRange
export const selectedSelector = (state) => filtersSelector(state).selected
export const articlesLoadingSelector = (state) => state.articles.get('loading')

export const articleLoadingSelector = (state, articleId) =>
  state.articles.entities.get(articleId).loading

export const articleLoadedSelector = (state, articleId) =>
  state.articles.entities.get(articleId).loaded

// // так и не смог придумать, как организовать стор
// export const commentLoadingSelector = (state, article) => state.comments.get(article.id).get('loading');

export const filtratedArticlesSelector = createSelector(
  articleListSelector,
  dateRangeSelector,
  selectedSelector,
  (articles, { from, to }, selected) => {
    console.log('---', 'articles selector')

    return articles.filter((article) => {
      const published = Date.parse(article.date)
      return (
        (!selected.length || selected.find((selected) => selected.value === article.id)) &&
        (!from || !to || (published > from && published < to))
      )
    })
  }
)

const idSelector = (_, { id }) => id
const commentsSelector = (state, { article }) => state.comments.get(article)

export const createCommentSelector = () =>
  createSelector(
    commentsSelector,
    idSelector,
    (comments, id) => comments.get(id)
  )
