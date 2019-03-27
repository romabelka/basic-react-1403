import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import dates from './set-dates'
import selectValues from './select-values'

export default combineReducers({
  counter: counterReducer,
  articles,
  dates,
  selectValues
})
