import { createSelector } from 'reselect'

export const articleListSelector = (state) => state.articles
export const filtersSelector = (state) => state.filters
export const articleTitleSelector = (state, id) => articleListSelector(state)[id].title
export const dateRangeSelector = (state) => filtersSelector(state).dateRange
export const selectedSelector = (state) => filtersSelector(state).selected

const idSelector = (_, { id }) => id

export const getArticleByIdSelector = createSelector(
  articleListSelector,
  idSelector,
  (article, id) => article[id]
)

export const filterSelector = (state) =>
  Object.keys(articleListSelector(state)).map((id) => ({
    label: articleTitleSelector(state, id),
    value: id
  }))

export const filtratedArticlesSelector = createSelector(
  articleListSelector,
  dateRangeSelector,
  selectedSelector,
  (articles, { from, to }, selected) => {
    console.log('---', 'articles selector')

    return Object.keys(articles).filter((id) => {
      const published = Date.parse(articles[id].date)
      return (
        (!selected.length || selected.find((selected) => selected.value === id)) &&
        (!from || !to || (published > from && published < to))
      )
    })
  }
)

const commentsSelector = (state) => state.comments

export const createCommentSelector = () =>
  createSelector(
    commentsSelector,
    idSelector,
    (comments, id) => comments[id]
  )
