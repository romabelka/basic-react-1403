import { createSelector } from 'reselect'

export const articleListSelector = (state) => state.articles.entities.valueSeq()
export const filtersSelector = (state) => state.filters
export const dateRangeSelector = (state) => filtersSelector(state).dateRange
export const selectedSelector = (state) => filtersSelector(state).selected
export const articlesLoadingSelector = (state) => state.articles.get('loading')
export const articleLoadedSelector = (article) => article.get('loaded')
export const articleLoadingSelector = (article) => article.get('loading')
export const commentsLoadedSelector = (article) => article.get('loadedComments')
export const commentsLoadingSelector = (article) => article.get('loadingComments')

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
const commentsSelector = (state) => state.comments.entities

export const createCommentSelector = () =>
  createSelector(
    commentsSelector,
    idSelector,
    (comments, id) => comments.get(id)
  )
