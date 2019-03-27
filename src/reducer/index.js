import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import selected from './selected'
import dateRange from './date-range'

export default combineReducers({
  counter: counterReducer,
  articles,
  selected,
  dateRange
})
