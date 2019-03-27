import defaultArticles from '../fixtures'
import { DELETE_ARTICLE, FILTER_ARTICLES } from '../constants'
import { DateUtils } from 'react-day-picker'

export default (state, action) => {
  const { type, payload } = action

  console.log(`ACTION TRIGGERED
               => type: ${type} 
               => payload: ${JSON.stringify(payload)}`)

  return null
}
