import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import dateRange from './dateRangeReducer'
import logReducer from './logReducer'
import changeSelectedReducer from './changeSelectedReducer'

export default combineReducers({
  logReducer,
  counter: counterReducer,
  articles,
  dateRange,
  changeSelectedReducer
})
