import { createSelector } from 'reselect'

export const articlesMapSelector = (state) => state.articles.entities
export const articleListSelector = (state) => articlesMapSelector(state).valueSeq()

export const filtersSelector = (state) => state.filters
export const dateRangeSelector = (state) => filtersSelector(state).dateRange
export const selectedSelector = (state) => filtersSelector(state).selected
export const articlesLoadingSelector = (state) => state.articles.get('loading')

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

const pageSelector = (
  _,
  {
    match: {
      params: { page }
    }
  }
) => (page ? page : 1)
export const commentsPageSelector = (state) => state.comments.pageEntities
export const commentsListSelector = createSelector(
  commentsPageSelector,
  pageSelector,
  (pageComments, page) => {
    const pageData = pageComments.get(page)
    return pageData
      ? {
          comments: pageData.get('comments') ? pageData.get('comments').valueSeq() : [],
          loading: pageData.get('loading'),
          loaded: pageData.get('loaded')
        }
      : {
          comments: [],
          loading: null,
          loaded: null
        }
  }
)

export const commentsTotalCount = (state) => state.comments.totalCount
