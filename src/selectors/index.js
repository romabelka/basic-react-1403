import { createSelector } from 'reselect'

export const articlesMapSelector = (state) => state.articles.entities
export const articleListSelector = (state) => articlesMapSelector(state).valueSeq()
export const filtersSelector = (state) => state.filters
export const dateRangeSelector = (state) => filtersSelector(state).dateRange
export const selectedSelector = (state) => filtersSelector(state).selected
export const articlesLoadingSelector = (state) => state.articles.get('loading')
export const commentPagSelector = (state) => state.comments.pagEntities.entities
export const commentPagCountSelector = (state) => state.comments.pagEntities.totalCount
export const commentPagLoadingSelector = (state) => state.comments.pagEntities.loading
export const commentPagLoadedSelector = (state) => state.comments.pagEntities.loaded

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

export const articleSelector = createSelector(
  articlesMapSelector,
  idSelector,
  (articles, id) => articles.get(id)
)

export const commentPageSelector = createSelector(
  commentPagSelector,
  (_, { pageNum }) => +pageNum,
  (comments, pageNum) =>
    comments.get(pageNum) ? comments.get(pageNum).valueSeq() : comments.get(pageNum)
)

export const commentPageCountSelector = createSelector(
  commentPagCountSelector,
  (_, { limit }) => limit,
  (totalCount, limit) => Math.floor(totalCount / limit)
)
