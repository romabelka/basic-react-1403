import { combineReducers } from 'redux'
import counterReducer from './counter'
import filter from './filter'
import articles from './articles'

export default combineReducers({
  counter: counterReducer,
  articles,
  filter
})
