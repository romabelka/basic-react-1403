import { createSelector } from 'reselect'

export const articleListSelector = (state) => state.articles.entities.valueSeq()
export const filtersSelector = (state) => state.filters
export const dateRangeSelector = (state) => filtersSelector(state).dateRange
export const selectedSelector = (state) => filtersSelector(state).selected
export const articlesLoadingSelector = (state) => state.articles.get('loading')
export const articlesLoadedSelector = (state) => state.articles.get('loaded')

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
const commentsSelector = (state) => state.comments

export const createCommentSelector = () =>
  createSelector(
    commentsSelector,
    idSelector,
    (comments, id) => comments.get(id)
  )
/* 
export const createArticleSelector = () =>
  createSelector(
    articleListSelector,
    idSelector,
    (articles, id) => articles && articles.get(id)
  )

export const createArticleLoadingSelector = () =>
  createSelector(
    articleListSelector,
    idSelector,
    (articles, id) => {
      console.log('articles -- ', articles, ' ---- id --', id, '---- ', articles.get(id))
      return articles && articles.get(id).get('loading')
    }
  )

export const createArticleLoadedSelector = () =>
  createSelector(
    articleListSelector,
    idSelector,
    (articles, id) => articles && articles.get(id).get('loaded')
  ) */
