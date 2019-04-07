import { createSelector } from 'reselect'

export const articlesMapSelector = (state) => state.articles.entities
export const articleListSelector = (state) => articlesMapSelector(state).valueSeq()
export const filtersSelector = (state) => state.filters
export const dateRangeSelector = (state) => filtersSelector(state).dateRange
export const selectedSelector = (state) => filtersSelector(state).selected
export const articlesLoadingSelector = (state) => state.articles.get('loading')
export const commentsEntitiesSelector = (state) => state.comments.commentsEntities.entities
export const commentsCountSelector = (state) => state.comments.commentsEntities.totalCount
export const commentsLoadingSelector = (state) => state.comments.commentsEntities.loading
export const commentsLoadedSelector = (state) => state.comments.commentsEntities.loaded

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

export const commentsPageSelector = createSelector(
  commentsEntitiesSelector,
  (_, { pageNum }) => +pageNum,
  (comments, pageNum) =>
    comments.get(pageNum) ? comments.get(pageNum).valueSeq() : comments.get(pageNum)
)

export const commentsPageCountSelector = createSelector(
  commentsCountSelector,
  (_, { limit }) => limit,
  (totalCount, limit) => Math.floor(totalCount / limit)
)
