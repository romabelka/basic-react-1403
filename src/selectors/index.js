import { createSelector } from 'reselect'

export const articleListSelector = (state) => state.articles
export const filtersSelector = (state) => state.filters
export const dateRangeSelector = (state) => filtersSelector(state).dateRange
export const selectedSelector = (state) => filtersSelector(state).selected

export const filtratedArticlesSelector = createSelector(
  articleListSelector,
  dateRangeSelector,
  selectedSelector,
  (articles, { from, to }, selected) => {
    console.log('---', 'articles selector')
    let filtratedArticles = {}

    for (const key in articles) {
      const value = articles[key]
      const published = Date.parse(value.date)
      if (
        (!selected.length || selected.find((selected) => selected.value === key)) &&
        (!from || !to || (published > from && published < to))
      ) {
        filtratedArticles = { ...filtratedArticles, [key]: value }
      }
    }
    return filtratedArticles
  }
)

const idSelector = (_, { id }) => id
const commentsSelector = (state) => state.comments

export const createCommentSelector = () =>
  createSelector(
    commentsSelector,
    idSelector,
    (comments, id) => comments[id]
  )

export const createArticleSelector = () =>
  createSelector(
    filtratedArticlesSelector,
    idSelector,
    (articles, id) => articles[id]
  )
