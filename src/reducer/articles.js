import defaultArticles from '../fixtures'
import { DELETE_ARTICLE, FILTER_ARTICLES } from '../constants'
import { DateUtils } from 'react-day-picker'

export default (
  articlesState = { allArticles: defaultArticles, showArticles: defaultArticles },
  action
) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      console.log(`State was: ${JSON.stringify(articlesState)}`)
      const articlesDeleted = articlesState.filter((article) => article.id !== payload.id)
      console.log(`State changed to: ${JSON.stringify(articlesDeleted)}`)
      return articlesDeleted

    case FILTER_ARTICLES:
      console.log(`State was: ${JSON.stringify(articlesState)}`)
      const { selected, dateRange } = payload
      const selectedIds = selected ? selected.map((selectedItem) => selectedItem.value) : []
      const isSelected = (article) => selectedIds.includes(article.id)
      const isInDayRange = (article) => {
        const date = new Date(article.date)
        if (!dateRange.from || !dateRange.to) return true
        return DateUtils.isDayInRange(date, dateRange)
      }
      const filteredByDate = articlesState.allArticles.filter(isInDayRange)
      const articlesFiltered = selected ? filteredByDate.filter(isSelected) : filteredByDate
      console.log(`State changed to: ${JSON.stringify(articlesFiltered)}`)
      return {
        allArticles: articlesState.allArticles,
        showArticles: articlesFiltered
      }

    default:
      return articlesState
  }
}
